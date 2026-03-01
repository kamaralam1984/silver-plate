# Silver Plate – Production-Ready Restaurant Management System

Full-stack restaurant management system built with Next.js + Node.js + MongoDB.

## 🔥 Highlights

- Online Ordering + Razorpay Payment Integration
- Table Booking with Conflict Prevention Logic
- Role-Based Admin Panel (RBAC — Admin / Staff / Customer)
- Billing System (Online + Offline / Walk-in)
- Analytics Dashboard (Revenue, Peak Hours, Top Items, Repeat Customers)
- Dockerized Deployment
- CI/CD with GitHub Actions
- AWS EC2 + Nginx + SSL (Let's Encrypt)

## 🏗 Architecture

```
Client (Next.js 14)
  → Node.js API (Express + TypeScript)
    → MongoDB Atlas
    → Razorpay (payment processing)
    → WhatsApp API (order notifications)
    → SMTP (email)
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion |
| Backend | Node.js, Express.js, TypeScript |
| Database | MongoDB (Mongoose ODM) |
| Auth | JWT (role-based — customer / staff / admin) |
| Payment | Razorpay SDK |
| File Upload | Multer |
| Infra | Docker, AWS EC2, Nginx, PM2, GitHub Actions |

---

## ✅ Features

### Customer
- Category-wise menu with Veg/Non-Veg filter
- Item add-ons, ingredients, allergen info, prep time
- Cart with localStorage persistence
- Online order (Razorpay) + Cash on Delivery
- Server-side payment verification before order confirmation
- WhatsApp fallback order option
- Slot-based table booking (auto conflict prevention)
- QR menu page for in-restaurant use
- Live language switch (Hindi / English)
- SEO + Schema.org structured data

### Admin Panel
- Dashboard KPIs (today's orders, revenue, pending count)
- Order management with status lifecycle: `pending → confirmed → preparing → ready → completed`
- Menu CRUD (name, price, category, image, veg flag, add-ons, availability toggle)
- Booking management with status control
- Table management (capacity, section, status: available / booked / reserved / maintenance)
- Billing system — generate bills for online orders or manual walk-in entries (subtotal, tax, discount, grand total)
- Revenue reports
- Analytics: orders per hour, top-selling items, repeat customers, booking stats
- Customer & user management
- Review moderation (verify / unverify)
- Hero image management (up to 5 images, drag-order)

### Backend
- JWT authentication + middleware-based RBAC
- API rate limiting
- Input validation middleware
- Structured JSON logging (production)
- Auto WhatsApp notifications on new orders
- Razorpay server-side signature verification
- Auto-generated order/booking/bill numbers

---

## 🗄 Database Schema

**MongoDB — 8 Collections**

### users
| Field | Type | Notes |
|---|---|---|
| name | String | required |
| email | String | unique |
| phone | String | required |
| role | String | `customer` / `admin` / `staff` |
| password | String | bcrypt hashed, hidden by default |

### menus
| Field | Type | Notes |
|---|---|---|
| name, description | String | required |
| price | Number | required |
| category | String | `appetizer` / `main` / `dessert` / `beverage` / `salad` / `soup` |
| isVeg | Boolean | required |
| available | Boolean | default true |
| ingredients, allergens | [String] | optional |
| preparationTime | Number | minutes |
| addOns | [{ name, price, available }] | sub-documents |
| **Indexes** | | `{category, available}`, `{isVeg, available}` |

### orders
| Field | Type | Notes |
|---|---|---|
| orderNumber | String | auto-generated `ORD-timestamp-XXXX` |
| items | [OrderItem] | ref → Menu |
| total | Number | required |
| customerName, customerPhone | String | required |
| tableNumber | String | dine-in |
| status | String | `pending / confirmed / preparing / ready / completed / cancelled` |
| paymentStatus | String | `pending / paid / failed / refunded` |
| paymentMethod | String | `cash / card / online` |
| paymentId | String | Razorpay ID |
| **Indexes** | | `{status, createdAt}`, `{paymentStatus, createdAt}`, `{customerPhone}` |

### bookings
| Field | Type | Notes |
|---|---|---|
| bookingNumber | String | auto-generated `BK-timestamp-XXXX` |
| customerName, customerEmail, customerPhone | String | required |
| date, time | Date / String | required |
| numberOfGuests | Number | 1–20 |
| tableNumber, tableCapacity | String / Number | auto-assigned |
| specialRequests | String | optional |
| status | String | `pending / confirmed / cancelled / completed` |
| **Indexes** | | `{date, time}`, `{status, date}` |

### bills
| Field | Type | Notes |
|---|---|---|
| billNumber | String | auto-generated `BILL-timestamp-XXXX` |
| source | String | `online / offline` |
| orderId | ObjectId | ref → Order |
| items | [{ name, quantity, price, total }] | sub-documents |
| subtotal, taxAmount, discountAmount, grandTotal | Number | required |
| paymentMethod | String | `cash / card / online` |
| status | String | `unpaid / paid / cancelled` |
| generatedBy | ObjectId | ref → User (admin/staff) |
| **Indexes** | | `{createdAt}`, `{source, createdAt}` |

### tables
| Field | Type | Notes |
|---|---|---|
| tableNumber | String | unique |
| capacity | Number | 2–10 |
| status | String | `available / booked / reserved / maintenance` |
| location | { row, column, section } | section: `window / center / corner / outdoor` |
| currentBooking | ObjectId | ref → Booking |
| bookedUntil | Date | expiry time |

### reviews
| Field | Type | Notes |
|---|---|---|
| customerName | String | required |
| rating | Number | 1–5 |
| comment | String | optional |
| menuItemId | ObjectId | ref → Menu |
| orderId | ObjectId | ref → Order |
| verified | Boolean | admin moderation flag |

### heroimages
| Field | Type | Notes |
|---|---|---|
| imageUrl | String | required |
| order | Number | 1–5, unique |
| isActive | Boolean | show/hide toggle |

---

## 📡 API Reference

### Public
| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | User login |
| POST | `/api/admin/auth/login` | Admin login |
| GET | `/api/menu` | List menu items |
| GET | `/api/menu/:id` | Single menu item |
| POST | `/api/orders` | Place order |
| POST | `/api/payments/create-order` | Create Razorpay order |
| POST | `/api/payments/verify` | Verify payment signature |
| POST | `/api/bookings` | Create table booking |
| GET | `/api/reviews` | List reviews |
| POST | `/api/reviews` | Submit review |
| GET | `/api/hero-images` | Hero images |

### Protected (Admin/Staff)
| Method | Route | Description |
|---|---|---|
| GET/PUT | `/api/orders`, `/api/orders/:id/status` | Manage orders |
| POST/PUT/DELETE | `/api/menu/:id` | Menu CRUD |
| GET/PUT/DELETE | `/api/bookings/:id` | Manage bookings |
| GET/POST/PUT | `/api/tables/:id` | Manage tables |
| GET/POST/PUT | `/api/billing/:id` | Billing system |
| GET | `/api/revenue` | Revenue data |
| GET | `/api/analytics/dashboard` | Dashboard KPIs |
| GET | `/api/analytics/orders-per-hour` | Peak hours |
| GET | `/api/analytics/top-selling` | Top items |
| GET | `/api/analytics/revenue` | Revenue summary |
| GET | `/api/analytics/repeat-customers` | Repeat customers |
| GET | `/api/analytics/bookings` | Booking stats |
| GET | `/api/users` | User list |
| POST | `/api/upload` | File/image upload |
| POST/PUT/DELETE | `/api/hero-images/:id` | Hero image management |

---

## 📁 Project Structure

```
silver-plate/
├── frontend/                    # Next.js 14 App Router
│   └── src/
│       ├── app/
│       │   ├── page.tsx         # Home
│       │   ├── menu/            # Menu page
│       │   ├── cart/            # Cart
│       │   ├── checkout/        # Checkout + Razorpay
│       │   ├── booking/         # Table booking
│       │   ├── login/ signup/   # Auth
│       │   └── admin/           # Admin panel
│       │       ├── dashboard/
│       │       ├── orders/
│       │       ├── menu/
│       │       ├── bookings/
│       │       ├── billing/
│       │       ├── revenue/
│       │       ├── analytics/
│       │       ├── customers/
│       │       ├── reviews/
│       │       └── hero-images/
│       ├── components/
│       ├── context/             # Cart, Auth context
│       ├── hooks/
│       ├── services/            # Axios API calls
│       └── utils/
│
├── backend/                     # Node.js + Express
│   └── src/
│       ├── config/              # DB, Razorpay, env
│       ├── models/              # Mongoose schemas
│       ├── controllers/         # Business logic
│       ├── routes/              # Express routers
│       ├── middleware/          # Auth, rate limit, validation, upload
│       ├── services/            # Order, analytics services
│       └── utils/               # JWT, WhatsApp, logger, email
│
├── docker-compose.yml
├── docker-compose.atlas.yml
├── ecosystem.config.cjs         # PM2 config
└── .github/workflows/           # GitHub Actions CI/CD
```

---

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### Both (from root)
```bash
npm run dev
```

---

## 🔐 Environment Variables

### `backend/.env`
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/silverplet
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
ADMIN_PHONE=+91XXXXXXXXXX
WHATSAPP_API_URL=your_whatsapp_api_url
WHATSAPP_API_KEY=your_whatsapp_api_key
NODE_ENV=development
```

### `frontend/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🐳 Docker

```bash
cp env.docker.example .env
# Set JWT_SECRET and other values
docker compose up -d --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000/api |

For MongoDB Atlas: `docker compose -f docker-compose.atlas.yml up -d --build`

See [DOCKER.md](./DOCKER.md) for full guide.

---

## 🚀 Production

| Item | Stack |
|---|---|
| Server | AWS EC2 |
| Reverse Proxy | Nginx |
| SSL | Let's Encrypt (Certbot) |
| Process Manager | PM2 |
| CI/CD | GitHub Actions |
| Database | MongoDB Atlas |

See [PRODUCTION.md](./PRODUCTION.md) for full setup guide.

---

## 🔒 Security

- JWT authentication on all protected routes
- bcrypt password hashing
- API rate limiting
- Input validation middleware
- CORS policy enforcement
- Role-based access control (RBAC)
- Razorpay server-side signature verification
- Environment-based secrets (no hardcoded credentials)

---

## 📝 License

MIT
