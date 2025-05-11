# Vite + React Todo App (v1)

The purpose of this app is to help me learn the above technologies.

- Vite (bundling, dev server)
- Vercel (deployment)
- TypeScript
- ReactJS
- TailwindCSS
- Shadcn/ui

While I have used these technologies in the past, including TS and React at work, I want to learn them more deeply with this side project and to setup future projects.

I will also have a backend. The backend will be in a separate codebase and will be built with Golang and deployed to Railway. I have built backend API's with Golang in the past and have confidence in my abilities with it.

## Requirements

- Allow users to create, update, and delete todo items
- Persist data in backend
- Auth (using Clerk) for signing up and logging in

## Setup

Began by running the following command:

```bash
pnpm create vite@latest
```

I chose ReactJS + SWC option, TypeScript, etc. Then, I followed the documentation on the [official tailwindcss documentation](https://tailwindcss.com/docs/installation/using-vite) to add tailwindcss support to the project. Then, I added shadcn support by following the [official shadcn documentation](https://ui.shadcn.com/docs/installation/vite) for vite.
