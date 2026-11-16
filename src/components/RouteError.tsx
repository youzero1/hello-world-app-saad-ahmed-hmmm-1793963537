import { useEffect } from 'react';

// Shown when a page crashes. Blank on purpose: the event lets the Summon preview hide a crashed page.
export function RouteError() {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('summon:render-error-state', { detail: { showing: true } }));
    return () => {
      window.dispatchEvent(new CustomEvent('summon:render-error-state', { detail: { showing: false } }));
    };
  }, []);

  return null;
}
