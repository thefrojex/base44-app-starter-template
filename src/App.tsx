import type { ReactNode } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const navItems = [{ label: "Home", to: "/" }];

function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-56 shrink-0 border-r bg-card px-3 py-6 sm:block">
        <nav className="grid gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <section className="w-full max-w-xl rounded-2xl border bg-card p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-muted-foreground">Starter template</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-card-foreground">
          Hello, this app is ready to be built.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Vite, React, TypeScript, Tailwind CSS, shadcn/ui, Supabase, and TanStack Query are configured.
        </p>
      </section>
    </main>
  );
}

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppShell>
  );
}

export default App;
