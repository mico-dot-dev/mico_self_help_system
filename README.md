TaskTracker (Mico Personal Help System)

A personal productivity and finance system built with Next.js. It combines task management with expense, stock, transaction and income tracking, and ties them together with a dashboard, charts, and automation (for example, a low grocery stock automatically creates a "Buy ..." task).

Status: active development. See Roadmap for known gaps.

Table of Contents
Features
Tech Stack
Architecture
Project Structure
Getting Started
Environment Variables
Database
Authentication
Scripts
Conventions
Roadmap
Deployment
Features

Dashboard

Header KPIs: total balance, monthly income, monthly expense, budget usage (with weekly sparkline trends)
Cash flow bar chart (money in vs. money out) with day / week / month granularity and pagination
Expense breakdown donut chart by expense type
Date range picker with presets (today, this week, last 30 days, etc.)
Quick-start buttons for adding income, transactions, expenses and budgets

Tasks

Create, edit, complete and archive tasks
Categories (user-defined plus system categories), search and category filtering
Repeating types (manual, daily, biweekly, monthly, yearly)

Expenses

Typed expenses with dynamic sub-forms: HOUSE, PERSONAL (recurring bills), TRANSPORTATION (fare lists), GROCERY (stock tracking), MISC
Recurring bills automatically seed a pending transaction with the next due date

Stock

Increment / decrement current stock for grocery expenses
When stock falls below its minimum, a "Buy ..." task is auto-created in the system "Home" category; when restocked, the task is auto-completed

Transactions and Income

Multi-step transaction form (type, item, amount and price)
Income logging (amount, date, whether it came from a job)

General

Responsive UI: data table on desktop, card list on mobile
Light / dark / system theme
Email/password, Google and anonymous guest (hCaptcha-protected) sign-in
Tech Stack
Area Technology
Framework Next.js 16 (App Router, Server Components, Server Actions), React 19
Language TypeScript (strict)
Styling Tailwind CSS v4, DaisyUI, shadcn/ui on Base UI primitives, CVA, tailwind-merge
Auth Supabase Auth (@supabase/ssr)
Database PostgreSQL (Supabase) via Prisma 7 with @prisma/adapter-pg; raw SQL for dashboard aggregates
Validation Zod 4
Forms React Hook Form + @hookform/resolvers
Tables TanStack Table v9
Charts TanStack Charts + d3-scale / d3-shape
Dates date-fns
UI utilities lucide-react, react-icons, SweetAlert2, next-themes
Captcha hCaptcha
Tooling ESLint 9, Supabase CLI, tsx
Architecture
Browser ──► Next.js (RSC pages) ──► Server Actions ──► withAuth() ──► Prisma / raw SQL ──► Supabase Postgres
│ │
└── proxy.ts (route protection) └── Supabase Auth session (cookies)

Key patterns:

Server Actions as the API layer (src/actions/_.action.ts). Every action returns a typed ActionResponse<T> ({ success: true, data } | { success: false, error }).
withAuth wrapper (src/lib/utils/validation-wrapper.ts) resolves the Supabase user, injects userId, and centralizes error handling. All data access is scoped to that user.
Zod schemas (src/schema/) are the single source of truth for form models, list models and validation, shared between client and server.
Module registry pattern: DataListContainer looks up the list component for a module (task, expense, stock, transaction, income) in data-list-registry.ts, and the add/edit modal form in AddModal.config.ts. Adding a new module means registering it in both.
Responsive data display: DataShowcase renders a TanStack table on lg screens and a list of module-specific cards below.
URL-driven state: search text, category filter, date range (from/to) and the edit modal (?edit=<id>) live in the query string, so views are shareable and server-rendered.
Route protection in src/proxy.ts: unauthenticated users are redirected away from /dashboard/_.
Project Structure
src/
├── app/
│ ├── page.tsx # Login / sign-up landing
│ ├── layout.tsx # Fonts, theme provider
│ ├── globals.css # Design tokens + component classes
│ └── dashboard/
│ ├── layout.tsx # Sidebar shell
│ ├── page.tsx # Dashboard
│ ├── task/ expense/ stock/ transaction/
├── actions/ # Server actions (auth, task, category, expense, stock, income, transaction, dashboard)
├── schema/ # Zod schemas and inferred types
├── features/ # Per-module columns and list/card components
│ ├── task/ expense/ stock/ income/ transaction/
├── components/
│ ├── ui/ # Base UI components (button, dialog, sidebar, DataShowcase, FormField, ...)
│ ├── form/ # Forms (Task, Expense, Transaction, Income, Auth, sub-forms)
│ ├── modal/ # Add/Edit/DateRange/Captcha modals
│ ├── chart/ # BarGraph, PieGraph, area graphs
│ ├── dashboard/ # Header cards, cash charts, quick start
│ └── layout/ # Navbar
├── lib/
│ ├── supabase/ # Server and browser clients
│ ├── prisma-client.ts # Prisma client (pg adapter)
│ ├── utils/ # formatters, mappers, granularity, pagination helpers
│ ├── theme/ # Icon color registry
│ └── errors.ts # getErrorMessage, AppError
├── generated/prisma/ # Prisma client and schema output
├── type/ # Shared TypeScript types
└── proxy.ts # Auth route protection
supabase/ # Supabase CLI config
prisma.config.ts # Prisma configuration
Getting Started
Prerequisites
Node.js 22+ (required by cn; Prisma needs 20.19+ / 22.12+)
npm
A Supabase project (cloud, or local via the Supabase CLI)
A Google OAuth client (optional, for Google sign-in)
An hCaptcha site key (optional, for guest login)
Installation
bash
git clone <your-repo-url>
cd Self_Help_System
npm install # also runs `prisma generate`
cp .env.example .env # then fill in values (see below)
Run
bash
npm run dev

Open http://localhost:3000.

Environment Variables

Create a .env file (it is git-ignored). Never commit secrets.

Variable Used by Description
NEXT_PUBLIC_SUPABASE_URL Supabase clients Supabase project URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY Supabase clients Supabase publishable (anon) key
DATABASE_URL Prisma runtime Pooled Postgres connection string
DIRECT_URL Prisma CLI / migrations Direct Postgres connection string
NEXT_PUBLIC_GOOGLE_CLIENT_ID Google sign-in Google OAuth client ID
SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET Supabase CLI config Google OAuth secret (local Supabase)
NEXT_PUBLIC_HCAPTCHA_SITE_KEY Guest login hCaptcha site key
Database
ORM: Prisma, with the schema and migrations located under src/generated/prisma/ (see prisma.config.ts).
Runtime connection uses DATABASE_URL through the pg driver adapter; migrations use DIRECT_URL.
Main entities: task, task_category (with is_system), expense, bill_expense, transportation_expense, stock, transaction, income.
Enums: ExpenseType (HOUSE, PERSONAL, TRANSPORTATION, GROCERY, MISC), DateRepeatType, TransactionStatus.
The dashboard uses hand-written SQL ($queryRaw) for aggregates (weekly stats, cash flow, expense breakdown). Dates are bucketed in the Asia/Manila time zone.
A system task category named Home must exist (is_system = true) for the stock-to-task automation to work.

Common commands:

bash
npx prisma generate
npx prisma migrate dev
npx prisma studio
npx supabase start # local Supabase stack (optional)
Authentication
Email/password sign-up and login via Supabase Auth.
Google sign-in using Google Identity Services (ID token exchange).
Guest access via anonymous sign-in, gated by hCaptcha.
Sessions are cookie-based (@supabase/ssr) and refreshed on the server.
src/proxy.ts protects /dashboard/_. Note: an already authenticated user visiting / is signed out by the proxy; review this if you want to redirect to the dashboard instead.
Scripts
Script Description
npm run dev Start the dev server
npm run build Production build
npm run start Run the production build
npm run lint Lint with ESLint
npm run typecheck Type-check with tsc --noEmit
npm run test / test:watch Vitest (note: Vitest is referenced but not yet listed in devDependencies)
Conventions
Server actions are "use server", validate input with Zod safeParse, run inside withAuth, and return ActionResponse<T>. Never trust a client-supplied user ID; always filter by the userId from withAuth.
Multi-table writes use prisma.$transaction (see CreateExpense, manageStockAmount).
Forms use React Hook Form with zodResolver and the shared FormField component.
Imports use the @/src/_ alias (a legacy @/_ alias also maps to src/; prefer @/src/_).
Styling uses design tokens defined in globals.css (--primary, --surface, --text-\*, etc.) and reusable component classes (card-base, input-base, button-base).
Adding a module: add a schema, an action, a list component and columns under features/<module>, register it in data-list-registry.ts, add the form to FORM_REGISTRY, extend AppModule / ModuleWithModals, and add a nav item and route.
Roadmap

Tracked from the internal checklist:

Fix mobile view
Additional CI/CD pipelines
Redis installation, buffering and caching
Cookie and session hardening
Restrict database data access (RLS / policies) and enforce database function restrictions
Hooks for reusable logic
Database refactor
Complete income and dashboard features (budgets, budget recommendations)
Pagination for lists
Consistent auth handling across actions
Delete/edit actions for expenses, income and transactions (menus are UI placeholders)

Known rough edges worth cleaning up:

Placeholder UI (e.g. hard-coded "Due: June 15, 2026", static budget card values, "Total Balance" trend of 12.5%).
getUserTasks queries categories without scoping to the user; filter categories by owner or system flag.
Task edit/delete links and some imports use inconsistent paths (/tasks vs /dashboard/task).
Several unused imports and commented-out code blocks.
Deployment

The app is designed for Vercel with a Supabase project:

Create the Supabase project and apply the database schema (prisma migrate deploy).
Configure the environment variables above in Vercel.
In Supabase Auth settings, add your production site URL and redirect URLs, enable the Google provider, and configure hCaptcha for anonymous sign-ins.
Deploy. postinstall runs prisma generate automatically.
License

Private project. All rights reserved.
