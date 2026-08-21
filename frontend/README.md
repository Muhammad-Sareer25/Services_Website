# CLICK TZEE LTD — Frontend

React (Vite) frontend for the CLICK TZEE LTD IT services website.

## Requirements

- Node.js 18+
- npm

## Installation

```bash
cd frontend
npm install
cp .env.example .env
```

Edit `.env` if your backend API runs somewhere other than `http://localhost:5000/api`.

## Running the app

```bash
npm run dev
```

The app runs on `http://localhost:5173` by default and expects the backend API (see `../backend`) to be running.

## Building for production

```bash
npm run build
npm run preview
```

## Folder structure

```text
frontend/
├── src/
│   ├── assets/         Static assets
│   ├── components/     Reusable UI components (Navbar, Footer, forms, cards, etc.)
│   ├── context/         AuthContext (global auth/session state)
│   ├── data/            Static services & demo projects data (fallback/reference)
│   ├── hooks/            Custom hooks (useAuth)
│   ├── layouts/          MainLayout, AdminLayout
│   ├── pages/            Route-level pages, including pages/admin/ for the admin panel
│   ├── services/         Axios API client + typed service functions
│   ├── utils/            Icon mapping helper
│   ├── App.jsx           Route definitions
│   └── main.jsx          App entry point
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## Key routes

| Path | Description |
|---|---|
| `/` | Homepage |
| `/about` | About page |
| `/services` | Services overview |
| `/services/:id` | Individual service detail page |
| `/projects` | Demo projects |
| `/contact` | Contact form |
| `/login`, `/register` | User authentication |
| `/dashboard` | Authenticated user dashboard |
| `/admin/login` | Admin login |
| `/admin/dashboard`, `/admin/users`, `/admin/enquiries`, `/admin/requests`, `/admin/profile` | Admin panel (role-protected) |

## Notes

- All service content, enquiries, service requests and user data are fetched live from the backend REST API — nothing here is hard-coded beyond illustrative demo project examples on the Projects page.
- JWTs are stored in `localStorage` and attached automatically to API requests via an axios interceptor.
