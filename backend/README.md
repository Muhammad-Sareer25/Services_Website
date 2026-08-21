# CLICK TZEE LTD — Backend API

Node.js / Express / MongoDB REST API powering the CLICK TZEE LTD IT services website.

## Requirements

- Node.js 18+
- MongoDB (local instance or MongoDB Atlas)
- npm

## Installation

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set:

- `MONGO_URI` — your MongoDB connection string
- `JWT_SECRET` — a long, random secret string
- `CLIENT_URL` — the frontend origin (default `http://localhost:5173`)
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` — credentials used only by the admin seed script

## Running the server

```bash
npm run dev    # nodemon, auto-restarts on changes
# or
npm start
```

The API runs on `http://localhost:5000` by default. Check `GET /api/health` to confirm it's running.

## Creating the admin account

Admin accounts cannot be created through the public registration form. Instead, run:

```bash
npm run seed:admin
```

This reads `ADMIN_NAME`, `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env` and creates (or promotes) an admin user. Re-running it is safe — it will not overwrite an existing password unless `ADMIN_RESET_PASSWORD=true` is set.

Log in at `/admin/login` on the frontend with these credentials.

## REST API overview

### Auth
| Method | Route | Access |
|---|---|---|
| POST | /api/auth/register | Public |
| POST | /api/auth/login | Public |
| GET | /api/auth/me | Private |
| PUT | /api/auth/profile | Private |

### Services
| Method | Route | Access |
|---|---|---|
| GET | /api/services | Public |
| GET | /api/services/:id | Public |

### Enquiries
| Method | Route | Access |
|---|---|---|
| POST | /api/enquiries | Public |
| GET | /api/enquiries | Private (own) / Admin (all) |
| GET | /api/enquiries/:id | Private (owner or admin) |
| PUT | /api/enquiries/:id | Admin |
| DELETE | /api/enquiries/:id | Admin |

### Service Requests
| Method | Route | Access |
|---|---|---|
| POST | /api/requests | Private |
| GET | /api/requests | Private (own) / Admin (all) |
| GET | /api/requests/:id | Private (owner or admin) |
| PUT | /api/requests/:id | Private (owner: cancel only) / Admin (full) |

### Users
| Method | Route | Access |
|---|---|---|
| GET | /api/users | Admin |
| GET | /api/users/:id | Admin |
| PUT | /api/users/:id | Admin |
| DELETE | /api/users/:id | Admin |

### Admin
| Method | Route | Access |
|---|---|---|
| GET | /api/admin/stats | Admin |

## Folder structure

```text
backend/
├── config/        MongoDB connection
├── controllers/    Route handler logic
├── middleware/     Auth, admin authorization, error handling
├── models/         Mongoose schemas (User, Enquiry, ServiceRequest)
├── routes/         Express routers
├── seed/           Admin account seed script
├── utils/          Token generation, static services data
└── server.js       App entry point
```

## Security notes

- Passwords are hashed with bcryptjs and never returned in API responses.
- JWTs are required for all private routes via the `protect` middleware.
- Admin-only routes are additionally protected with the `adminOnly` middleware.
- No credentials or secrets are committed — `.env` is gitignored and `.env.example` only contains placeholders.
