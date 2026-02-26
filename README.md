# React + Express Monorepo Scaffold

This repository is organized as a simple monorepo with separate frontend and backend apps:

- `frontend/` — Vite + React client with React Router route scaffolding.
- `backend/` — Express API server scaffold.

## Project Structure

```text
.
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   └── store/
│   └── .env.example
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   └── .env.example
└── package.json
```

## Setup

Install dependencies for each package:

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

## Run in Development

Run frontend and backend together from the repo root:

```bash
npm run dev
```

Or run independently:

```bash
npm run dev:frontend
npm run dev:backend
```

## Production Commands

```bash
npm run build
npm run start
```

## Environment Variables

Copy example env files and adjust values as needed:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```
