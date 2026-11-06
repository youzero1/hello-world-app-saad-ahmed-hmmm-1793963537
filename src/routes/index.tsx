import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Soft glow behind the text */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <h1 className="bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
          Hello, World!
        </h1>
        <p className="max-w-md text-lg text-slate-400">
          Your new app is up and running. This is where the fun begins.
        </p>
      </div>
    </div>
  );
}
