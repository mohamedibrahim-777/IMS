/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState } from 'react';

export interface AuthUser {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// ⚠️ ADMIN ACCOUNT — these are the ONLY credentials that unlock the admin dashboard.
// Change them to your own. (This is a static client-side site, so the values live in
// the front-end bundle — fine to deter casual visitors, not bank-grade security.)
const ADMIN_EMAIL = 'admin@kraft.com';
const ADMIN_PASSWORD = 'admin@kraft';

// 🔑 GOOGLE OAUTH — paste your Google OAuth Client ID here to enable real
// "Continue with Google" sign-in. It looks like:
//   1234567890-abc123.apps.googleusercontent.com
// Create one at https://console.cloud.google.com/apis/credentials
//   → "Create credentials" → "OAuth client ID" → Web application
//   → Authorized JavaScript origins: http://localhost:3000 (and your live domain)
// While this is empty, the button falls back to a demo sign-in.
export const GOOGLE_CLIENT_ID = '';
export const isGoogleConfigured = () => GOOGLE_CLIENT_ID.trim().length > 0;

const CURRENT_KEY = 'kraft-current-user';
const USERS_KEY = 'kraft-users';

interface StoredUser {
  name: string;
  email: string;
  password: string;
}

interface AuthResult {
  ok: boolean;
  error?: string;
  user?: AuthUser;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAdmin: boolean;
  login: (email: string, password: string) => AuthResult;
  signup: (name: string, email: string, password: string) => AuthResult;
  loginWithGoogle: (name?: string, email?: string) => AuthResult;
  logout: () => void;
}

// Number of registered (non-admin) user accounts — used by the admin overview.
export function getRegisteredUserCount(): number {
  return readUsers().length;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function readUsers(): StoredUser[] {
  try {
    const stored = localStorage.getItem(USERS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch {
    /* ignore */
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const stored = localStorage.getItem(CURRENT_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const persist = (next: AuthUser | null) => {
    setUser(next);
    try {
      if (next) localStorage.setItem(CURRENT_KEY, JSON.stringify(next));
      else localStorage.removeItem(CURRENT_KEY);
    } catch {
      /* ignore */
    }
  };

  const login = (email: string, password: string): AuthResult => {
    const normalized = email.trim().toLowerCase();
    if (!normalized || !password) {
      return { ok: false, error: 'Email and password are required.' };
    }

    // Admin login
    if (normalized === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
      const admin: AuthUser = { name: 'Administrator', email: ADMIN_EMAIL, role: 'admin' };
      persist(admin);
      return { ok: true, user: admin };
    }

    // Normal user login
    const found = readUsers().find((u) => u.email.toLowerCase() === normalized);
    if (!found) return { ok: false, error: 'No account found with that email.' };
    if (found.password !== password) return { ok: false, error: 'Incorrect password.' };

    const account: AuthUser = { name: found.name, email: found.email, role: 'user' };
    persist(account);
    return { ok: true, user: account };
  };

  const signup = (name: string, email: string, password: string): AuthResult => {
    const trimmedName = name.trim();
    const normalized = email.trim().toLowerCase();

    if (!trimmedName) return { ok: false, error: 'Full name is required.' };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) return { ok: false, error: 'Please enter a valid email.' };
    if (password.length < 4) return { ok: false, error: 'Password must be at least 4 characters.' };
    if (normalized === ADMIN_EMAIL.toLowerCase()) return { ok: false, error: 'This email is reserved.' };

    const users = readUsers();
    if (users.some((u) => u.email.toLowerCase() === normalized)) {
      return { ok: false, error: 'An account with this email already exists.' };
    }

    users.push({ name: trimmedName, email: email.trim(), password });
    writeUsers(users);

    const account: AuthUser = { name: trimmedName, email: email.trim(), role: 'user' };
    persist(account);
    return { ok: true, user: account };
  };

  // Sign in (or auto-register) a Google user. When real OAuth is configured, the
  // verified name/email from Google are passed in. Otherwise a demo identity is used.
  const loginWithGoogle = (name?: string, email?: string): AuthResult => {
    const googleUser: AuthUser = {
      name: name?.trim() || 'Google User',
      email: (email?.trim() || 'google.user@gmail.com').toLowerCase(),
      role: 'user',
    };
    if (googleUser.email === ADMIN_EMAIL.toLowerCase()) {
      return { ok: false, error: 'This email is reserved for the studio admin.' };
    }
    // Ensure a stored account exists so the user persists like a normal sign-up.
    const users = readUsers();
    if (!users.some((u) => u.email.toLowerCase() === googleUser.email)) {
      users.push({ name: googleUser.name, email: googleUser.email, password: '' });
      writeUsers(users);
    }
    persist(googleUser);
    return { ok: true, user: googleUser };
  };

  const logout = () => persist(null);

  return (
    <AuthContext.Provider value={{ user, isAdmin: user?.role === 'admin', login, signup, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
