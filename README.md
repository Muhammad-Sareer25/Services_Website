# CLICK TZEE LTD — IT Services Website (Full-Stack MERN)

A complete, production-ready full-stack website for **CLICK TZEE LTD**, a UK IT services / managed services provider. Built with MongoDB, Express, React and Node.js.

## What's included

- Public marketing site: Home, About, Services (10 services across Managed & Professional categories), individual service detail pages, Projects (demo content), Contact form
- User authentication (register/login) with a client dashboard: profile, enquiries, service requests
- Separate admin authentication (`/admin/login`) with a role-protected admin panel: dashboard stats, user management, enquiry management, service request management, admin profile
- REST API secured with JWT authentication and role-based authorization
- MongoDB via Mongoose with `User`, `Enquiry` and `ServiceRequest` models
- Centralized error handling, input validation, CORS configuration, hashed passwords (bcryptjs)

## Project structure

```text
IT-Services-Website/
├── frontend/     React (Vite) + Tailwind CSS application
├── backend/      Node.js / Express REST API + MongoDB (Mongoose)
└── README.md     This file
```

See `frontend/README.md` and `backend/README.md` for details specific to each part.

## Quick start

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env`:
- `MONGO_URI` — your MongoDB connection string (local or MongoDB Atlas)
- `JWT_SECRET` — a long, random secret
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — used only to seed the admin account

Then:

```bash
npm run dev
```

The API runs at `http://localhost:5000`.

### 2. Create the admin account

```bash
npm run seed:admin
```

This is the **only** way to create an admin account — there is no public admin registration page. Log in at `/admin/login` on the frontend using the credentials from `.env`.

### 3. Frontend

In a separate terminal:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The site runs at `http://localhost:5173` and talks to the backend API at `http://localhost:5000/api` (configurable via `frontend/.env`).

## Connecting MongoDB Atlas

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Create a database user and allow your IP (or `0.0.0.0/0` for development).
3. Copy the connection string, e.g.:
   `mongodb+srv://<user>:<password>@cluster0.mongodb.net/clicktzee-it-services`
4. Paste it into `backend/.env` as `MONGO_URI`.

## Main features implemented

- **10 IT services** (Hardware Break Fix, Server Maintenance, Network Maintenance, Data Center Services, Asset Management, Site Surveys, ITAD, Wi-Fi Surveys, IMAC & Projects, Rollout & Migration), each with a dedicated detail page including overview, inclusions, benefits, use cases, process and FAQs
- **Contact form** that submits directly to MongoDB via the REST API, with validation, loading and success/error states
- **User accounts**: registration, login (JWT), profile management, viewing submitted enquiries, submitting and tracking service requests
- **Admin panel**: dashboard statistics, searchable/filterable user, enquiry and service request management, status updates, admin notes, and a secure admin profile with password change
- **Security**: hashed passwords, JWT auth, role-based route protection, input validation, centralized error handling, no hard-coded secrets

## Notes on placeholder content

Company address, phone number, statistics, and demo project examples are placeholders and clearly labelled as such — replace them with CLICK TZEE LTD's real details before going live. Similarly, `.env.example` files contain no real credentials; you must supply your own `MONGO_URI`, `JWT_SECRET` and admin credentials.
