import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { RouteError } from '@/components/RouteError';
import '@/styles/global.css';

const router = createRouter({
  routeTree,
  defaultErrorComponent: RouteError,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

// Makes <Link to="..."> type-check against the real route tree.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Tells the Summon preview this app reports crashed pages itself (see RouteError).
window.dispatchEvent(new CustomEvent('summon:render-error-state', { detail: { showing: false } }));

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
