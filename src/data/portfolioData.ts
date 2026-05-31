/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'studio-landing',
    title: 'Bespoke Brand & Landing Page',
    description: 'High-concept, immersive visual experience engineered to tell your story, maximize conversions, and load in under 1 second.',
    price: 'From ₹1,50,000',
    duration: '2-3 weeks',
    badge: 'Popular',
    icon: 'Sparkles',
    features: [
      'Custom vector art & bespoke typography',
      'Fully responsive, mobile-first design',
      'Advanced micro-interactions & motion choreography',
      'A+ Grade Core Web Vitals optimization',
      'Basic SEO architecture & analytics setup',
      '14 days post-launch support and iterations'
    ]
  },
  {
    id: 'saas-marketing',
    title: 'SaaS Platform & Interactive UI',
    description: 'Highly components-driven React architecture built to showcase complex software features, interactive pricing, and product tours.',
    price: 'From ₹2,90,000',
    duration: '3-4 weeks',
    badge: 'Enterprise-grade',
    icon: 'Cpu',
    features: [
      'Tailwind CSS & custom interactive UI dashboards',
      'Client-side mockups & product demo sandboxes',
      'Modular component library for future expansion',
      'Stripe checkout or payment proxy integration readiness',
      'Comprehensive content management setup (CMS)',
      '30 days of direct developer support'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Premium E-Commerce Experience',
    description: 'Elegantly curated digital boutique designed with a frictionless checkout funnel, rich product filters, and immersive detail sheets.',
    price: 'From ₹3,75,000',
    duration: '4-5 weeks',
    icon: 'ShoppingBag',
    features: [
      'Intuitive shopping cart & fluid order drawer',
      'Optimized multi-step or single-step checkout',
      'Product categorization & high-performance search',
      'CMS for effortless inventory & stock tracking',
      'Automated transactional email template design',
      'Comprehensive conversion rate optimization audit'
    ]
  },
  {
    id: 'editorial',
    title: 'Creative Studio & Editorial Portfolios',
    description: 'Ultra-minimalist, gallery-forward editorial portfolio allowing your photography, writing, or design work to take center stage.',
    price: 'From ₹1,25,000',
    duration: '1-2 weeks',
    badge: 'Exclusive',
    icon: 'Layout',
    features: [
      'Typographic-focused editorial layout grid',
      'Immersive image lightbox & category filter boards',
      'Lazy loading & next-gen visual format optimization',
      'Social layout optimization & newsletter setup (Substack/Mailchimp)',
      'Extremely light codebase for perfect SEO indexation',
      'Simple markdown-based content updates'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nordic-living',
    title: 'Nordic Living Co.',
    description: 'An immersive digital boutique and catalogue for minimalist interior furniture, engineered with interactive layout grids and seamless side-drawers.',
    category: 'ecommerce',
    tags: ['E-Commerce', 'React', 'Motion', 'High-end Retail'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    stats: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Mobile Load Time', value: '0.8s' },
      { label: 'Lighthouse Performance', value: '100' }
    ],
    details: [
      'Dynamic cart drawer with instant tax and shipping calculations',
      'Staggered gallery grid with fluid image hover magnifying',
      'Complete local-state catalog search and filter interface'
    ]
  },
  {
    id: 'vertex-saas',
    title: 'Vertex Analytics',
    description: 'A dark, precision-oriented marketing lander and real-time interactive playground demonstrating network activity metrics of an enterprise analytics SaaS.',
    category: 'saas',
    tags: ['SaaS', 'Tailwind v4', 'Interactive Chart', 'Bento Grid'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    stats: [
      { label: 'Sign-up Conversion', value: '8.4%' },
      { label: 'Interactive CTR', value: '+65%' },
      { label: 'Bundle Size Reduced', value: '72%' }
    ],
    details: [
      'Custom SVG vector metrics dashboard simulating live client signals',
      'Bento-grid interactive feature modules with custom pointer-tracking shadows',
      'Frictionless custom layout step-checker for pricing tier selector'
    ]
  },
  {
    id: 'atelier-studio',
    title: 'Atelier Creative Agency',
    description: 'An editorial agency portfolio highlighting premium spatial photography and high-fashion brand architecture, emphasizing high-contrast layout grids.',
    category: 'creative',
    tags: ['Portfolio', 'Editorial', 'Typography', 'Space Grotesk'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    stats: [
      { label: 'Engagement Duration', value: '4m 12s' },
      { label: 'SEO Authority Rank', value: 'A+' },
      { label: 'Image Payload Weight', value: '-60%' }
    ],
    details: [
      'Full-bleed typography transitions utilizing high-friction scroll snapping',
      'Responsive photo-matrix showcasing seamless masonry alignments',
      'Subtle page fade-in/out transitions mimicking high-end fashion catalogs'
    ]
  },
  {
    id: 'chronicle-mag',
    title: 'Chronicle Magazine',
    description: 'A modern, typographic-focused publication and blog platform dedicated to slow-living philosophy, cultural observations, and architectural essays.',
    category: 'editorial',
    tags: ['Editorial', 'Markdown', 'Static Site', 'Newsletter CMS'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    stats: [
      { label: 'Monthly Readers', value: '180K' },
      { label: 'Newsletter Signups', value: '14.2%' },
      { label: 'Ad-block Friendly', value: '100%' }
    ],
    details: [
      'Optimized reader view with adjustable typography scales and layout grids',
      'Pre-compiled markdown reader interface for low data usage devices',
      'Highly stylized minimalist newsletter subscriber callout sheets'
    ]
  }
];

export const PROJECT_TYPES = [
  'Bespoke Brand & Landing Page',
  'SaaS Platform & Interactive Landing Page',
  'Premium E-Commerce Experience',
  'Creative Agency/Editorial Portfolio',
  'Custom App (Web/React Module)'
];

export const BUDGET_RANGES = [
  'Under ₹1,25,000',
  '₹1,25,000 - ₹2,50,000',
  '₹2,50,000 - ₹4,00,000',
  '₹4,00,000 - ₹8,00,000',
  '₹8,00,000+'
];

export const TIMELINES = [
  'ASAP (Within 2 weeks)',
  'Standard (3-4 weeks)',
  'Flexible (1-2 months)',
  'Ongoing Collaboration'
];
