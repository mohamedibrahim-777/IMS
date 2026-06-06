import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {AuthProvider} from './context/AuthContext';
import {Preloader} from './components/Preloader';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Preloader />
      <App />
    </AuthProvider>
  </StrictMode>,
);
