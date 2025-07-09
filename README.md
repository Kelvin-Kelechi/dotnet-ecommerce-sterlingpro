# Dot NET E-commerce Demo (Onion Slice Architecture)

A modern e-commerce demo app built with:

- **Backend:** .NET 8 (C#), Onion Slice architecture, EF Core In-Memory DB
- **Frontend:** React (Vite), TypeScript, Tailwind CSS, react-icons

## Features

- Product catalog (6 Apple products, real images)
- Shopping cart (add, update, remove)
- User authentication (demo credentials)
- Modern, responsive UI

---

## Demo Credentials

- **Email:** `kelvin@gmail.com`
- **Password:** `password123`

---

## Project Structure

```
Ecommerce/
├── backend/                # .NET 8 API (C#)
│   ├── ECommerce.API/      # Main API project
│   ├── ECommerce.Domain/   # Domain models
│   ├── ECommerce.Infrastructure/ # Data, seeding
│   └── ECommerce.Application/    # Application logic
├── frontend/               # React + Vite + Tailwind frontend
└── README.md               # This file
```

---

## Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Node.js & npm](https://nodejs.org/) (v18+ recommended)

---

### 1. Start the Backend API

Open a terminal in the project root and run:

```bash
cd backend/ECommerce.API

dotnet restore

dotnet run
```

- The API uses an **in-memory database** (no setup needed).
- Swagger UI available at: [http://localhost:5133/swagger](http://localhost:5133/swagger)

---

### 2. Start the Frontend

Open a new terminal in the project root and run:

```bash
cd frontend
npm install
npm run dev
```

- The frontend expects the backend at `http://localhost:5133/api` (see `frontend/src/services/api.ts`).
- If you change backend port, update the API URL in the frontend.

---

## Usage

1. Go to [http://localhost:5173](http://localhost:5173)
2. Log in with the demo credentials above
3. Browse products, add to cart, and checkout

---

## Troubleshooting

- **Port in use:**
  - Backend: Make sure nothing else is running on port 5133
  - Frontend: Make sure nothing else is running on port 5173
- **Permission errors (backend):**
  - The API uses in-memory DB, so no file/database permissions are needed.
- **Frontend can't connect to backend:**
  - Ensure both servers are running
  - Check CORS errors (should be allowed by default)
- **Images not loading:**
  - Product images use external URLs; check your internet connection

---

## Tech Stack

- **Backend:** .NET 8, ASP.NET Core, EF Core (InMemory), Onion Slice
- **Frontend:** React, Vite, Tailwind CSS, react-icons

---

## License

MIT (for demo purposes)
