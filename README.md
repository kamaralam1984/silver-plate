# 🍽️ Silver Plate — Restaurant Management System

**Silver Plate** ek complete, production-ready restaurant management system hai jo modern restaurants ke liye banaya gaya hai. Isme customer-facing website, admin panel, online ordering, table booking, payment gateway, aur analytics sab kuch ek jagah milta hai.

---

## 📋 Table of Contents

1. [Website ke Faayde (Benefits)](#-website-ke-faayde-benefits)
2. [Saare Features (All Functions)](#-saare-features-all-functions)
3. [Tech Stack](#-tech-stack)
4. [Database Structure](#-database-structure)
5. [API Endpoints](#-api-endpoints)
6. [Project Structure](#-project-structure)
7. [Installation](#-installation)
8. [Environment Variables](#-environment-variables)
9. [Docker Setup](#-docker-setup)
10. [Production & Deployment](#-production--deployment)
11. [Security](#-security)

---

## 💡 Website ke Faayde (Benefits)

### Restaurant Owner ke liye
- **Zyada Sales** — Online ordering se customers ghar se order kar sakte hain, restaurant ki reach badhti hai
- **Table Wastage Khatam** — Online table booking se double-booking aur confusion nahi hoti
- **24/7 Available** — Website hamesha available hoti hai, koi phone uthane ki zaroorat nahi
- **Real-time Analytics** — Kaun sa item sabse zyada bikta hai, kab rush hoti hai, kitna revenue aa raha hai — sab ek jagah
- **Manual Kaam Kam** — Orders automatically track hote hain, menu update karna easy hai
- **Payment Collection Aasaan** — Razorpay se online payment seedha bank account mein aati hai
- **WhatsApp Notification** — Har nayi order par automatically WhatsApp message milta hai
- **Customer Loyalty** — Repeat customers track hote hain, unhe special treatment dena possible hai
- **Bill Management** — Online aur offline dono taraf ke bills ek system mein
- **Staff Management** — Staff ke liye alag role aur access control

### Customer ke liye
- **Ghar Baithe Order** — Phone uthane ki zaroorat nahi, website se order karo
- **Menu Dekho Aasaan Se** — Category aur Veg/Non-Veg filter se apni pasand ka khaana dhundho
- **Table Book Karo** — Restaurant aaane se pehle table book karo, wait karna nahi padega
- **Secure Payment** — Razorpay se safe aur fast online payment
- **Hindi/English Support** — Language apni marzi se badlo
- **Order Track Karo** — Apne order ka status live dekhо
- **Reviews Do** — Khaane ke baad review share karo
- **QR Menu** — Restaurant mein QR scan karo, menu seedha phone pe aata hai

---

## ✅ Saare Features (All Functions)

### 🛒 Customer Side

#### Menu System
- Category-wise menu (Appetizer, Main Course, Dessert, Beverage, Salad, Soup)
- Veg / Non-Veg filter
- Item ke add-ons (extra toppings, sides)
- Item ka description, ingredients, allergens, preparation time
- Item ki image
- Availability toggle (agar koi item available nahi to show nahi hoga)

#### Cart & Ordering
- Cart mein items add/remove karo
- Cart localStorage mein save hoti hai (page refresh pe bhi nahi jaati)
- Order place karo — online ya Cash on Delivery (COD)
- Table number ke saath order
- Order notes / customizations

#### Payment
- **Razorpay** payment gateway integration
- Payment verify hone ke baad hi order confirm hota hai
- Payment fail hone par order nahi banta
- COD support
- Cash/Card/Online — teen payment methods

#### Table Booking
- Date aur time select karo
- Guest count batao
- Table automatically assign hoti hai
- Conflict prevention — ek table ek time pe do bookings nahi
- Special requests field

#### User Accounts
- Signup / Login (email + password)
- JWT token based authentication
- Role: customer, admin, staff
- Profile management

#### Other Customer Pages
- **Home Page** — Hero images slider, restaurant highlight
- **About Page** — Restaurant ke baare mein
- **Contact Page** — Contact details
- **QR Menu Page** — Restaurant mein QR scan karo
- **WhatsApp Fallback** — Agar koi issue aaye to WhatsApp se order
- **Hindi/English Language Switch** — Live language toggle
- **SEO + Schema.org** — Google search mein restaurant achha dikhta hai

---

### 🔧 Admin Panel

#### Dashboard
- Aaj ke orders ki count
- Aaj ka total revenue
- Pending orders count
- Online vs COD order ratio
- Live stats

#### Order Management
- Saari orders list
- Order status update: Pending → Confirmed → Preparing → Ready → Completed / Cancelled
- Payment status track
- Customer details dekho

#### Menu Management (CRUD)
- Nayi menu item add karo
- Item edit karo (naam, price, category, image, veg/non-veg, add-ons)
- Item delete karo
- Item available/unavailable toggle karo
- Image upload karo

#### Booking Management
- Saari bookings list
- Booking status: Pending / Confirmed / Cancelled / Completed
- Customer details
- Date, time, guests, table number

#### Table Management
- Tables ki list
- Table status: Available / Booked / Reserved / Maintenance
- Table location: Section (window, center, corner, outdoor), row, column
- Table capacity manage karo

#### Billing System
- Online orders se automatically bill generate hota hai
- Offline bills bhi manually banao (walk-in customers ke liye)
- Subtotal, Tax, Discount, Grand Total
- Bill number auto-generate
- Payment method: Cash / Card / Online
- Bill status: Unpaid / Paid / Cancelled

#### Analytics & Reports
- **Dashboard Stats** — Today's orders, revenue, pending count
- **Orders Per Hour** — Peak hours analysis (kab zyada orders aate hain)
- **Top Selling Items** — Sabse zyada bikne wale items
- **Revenue Summary** — Daily/weekly revenue breakdown
- **Repeat Customers** — Kitne customers dobara aaye
- **Booking Stats** — Booking trends

#### Customer Management
- Saare registered customers ki list
- Customer order history

#### Review Management
- Customers ke reviews dekho
- Reviews verify/unverify karo

#### Hero Images Management
- Home page ke slider ki images upload/change karo
- Max 5 hero images
- Images ka order set karo
- Images activate/deactivate karo

#### Settings
- Admin settings manage karo

---

### ⚙️ Backend System Features

- **JWT Authentication** — Secure login system
- **Role-based Access Control** — Admin, Staff, Customer alag roles
- **API Rate Limiting** — Spam/abuse se protection
- **Input Validation** — Galat data se protection
- **File Upload** — Menu images aur hero images ke liye
- **WhatsApp Notifications** — Har order par auto notification
- **Razorpay Payment Verification** — Server-side payment verify
- **Slot-based Booking** — Double booking automatic prevent
- **Structured Logging** — Production mein JSON logs
- **Error Handling Middleware** — Sare errors handle hote hain
- **MongoDB Optimized Queries** — Fast database queries with indexes
- **CORS Configuration** — Cross-origin requests safely handle

---

## 🛠️ Tech Stack

### Frontend
| Technology | Use |
|---|---|
| Next.js 14 (App Router) | React framework, SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Axios | HTTP requests |
| Context API | State management |

### Backend
| Technology | Use |
|---|---|
| Node.js | Runtime |
| Express.js | Web framework |
| TypeScript | Type safety |
| MongoDB (Mongoose) | Database |
| JWT | Authentication tokens |
| Razorpay SDK | Payment processing |
| Multer | File upload handling |
| bcrypt | Password hashing |
| dotenv | Environment variables |
| CORS | Cross-origin policy |

### Infrastructure
| Technology | Use |
|---|---|
| Docker + Docker Compose | Containerization |
| AWS EC2 | Server hosting |
| Nginx | Reverse proxy, SSL termination |
| Let's Encrypt | Free SSL certificate |
| PM2 | Process management |
| GitHub Actions | CI/CD pipeline |
| MongoDB Atlas | Cloud database |

---

## 🗄️ Database Structure

Database: **MongoDB** (NoSQL)

---

### 1. 👤 User (Collection: `users`)

Saare registered users — customers, admins, staff.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `name` | String | User ka naam (required) |
| `email` | String | Email address (unique, required) |
| `phone` | String | Phone number (required) |
| `role` | String | `customer` / `admin` / `staff` |
| `password` | String | Hashed password (hidden by default) |
| `createdAt` | Date | Account banane ka time |
| `updatedAt` | Date | Last update time |

---

### 2. 🍛 Menu (Collection: `menus`)

Restaurant ke saare menu items.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `name` | String | Item ka naam (required) |
| `description` | String | Item ki description (required) |
| `price` | Number | Price in rupees (required) |
| `category` | String | `appetizer` / `main` / `dessert` / `beverage` / `salad` / `soup` |
| `image` | String | Image URL/path |
| `available` | Boolean | Abhi available hai ya nahi |
| `isVeg` | Boolean | Veg = true, Non-veg = false |
| `ingredients` | [String] | Ingredients ki list |
| `allergens` | [String] | Allergen information |
| `preparationTime` | Number | Minutes mein preparation time |
| `addOns` | [AddOn] | Extra add-ons array (naam, price, available) |
| `createdAt` | Date | Item add karne ka time |
| `updatedAt` | Date | Last update time |

**AddOn Sub-document:**
| Field | Type | Description |
|---|---|---|
| `name` | String | Add-on ka naam |
| `price` | Number | Add-on ki price |
| `available` | Boolean | Available hai ya nahi |

**Indexes:** `{category, available}`, `{isVeg, available}`, `{available}`

---

### 3. 📦 Order (Collection: `orders`)

Customer ke saare orders.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `orderNumber` | String | Unique order number (ORD-timestamp-XXXX) |
| `items` | [OrderItem] | Order mein items ki list |
| `total` | Number | Total amount |
| `customerName` | String | Customer ka naam (required) |
| `customerEmail` | String | Customer ki email |
| `customerPhone` | String | Customer ka phone (required) |
| `tableNumber` | String | Table number (dine-in ke liye) |
| `status` | String | `pending` / `confirmed` / `preparing` / `ready` / `completed` / `cancelled` |
| `paymentStatus` | String | `pending` / `paid` / `failed` / `refunded` |
| `paymentMethod` | String | `cash` / `card` / `online` |
| `paymentId` | String | Razorpay payment ID |
| `notes` | String | Special instructions |
| `createdAt` | Date | Order ka time |
| `updatedAt` | Date | Last update time |

**OrderItem Sub-document:**
| Field | Type | Description |
|---|---|---|
| `menuItemId` | ObjectId | Menu item ka reference |
| `name` | String | Item ka naam |
| `quantity` | Number | Kitne items |
| `price` | Number | Item ki price |
| `addOns` | Array | Selected add-ons |
| `customizations` | String | Custom requests |

**Indexes:** `{createdAt}`, `{status, createdAt}`, `{paymentStatus, createdAt}`, `{customerPhone}`

---

### 4. 📅 Booking (Collection: `bookings`)

Table reservations.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `bookingNumber` | String | Unique booking number (BK-timestamp-XXXX) |
| `customerName` | String | Customer ka naam (required) |
| `customerEmail` | String | Customer ki email (required) |
| `customerPhone` | String | Customer ka phone (required) |
| `date` | Date | Booking ki date (required) |
| `time` | String | Booking ka time (required) |
| `numberOfGuests` | Number | Guests ki count (1-20) |
| `tableNumber` | String | Assigned table number |
| `tableCapacity` | Number | Table ki capacity (2-10) |
| `specialRequests` | String | Koi special request |
| `status` | String | `pending` / `confirmed` / `cancelled` / `completed` |
| `createdAt` | Date | Booking ka time |
| `updatedAt` | Date | Last update time |

**Indexes:** `{date, time}`, `{status, date}`, `{customerPhone}`

---

### 5. ⭐ Review (Collection: `reviews`)

Customer ke reviews aur ratings.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `customerName` | String | Customer ka naam (required) |
| `customerEmail` | String | Customer ki email |
| `rating` | Number | Rating 1 se 5 (required) |
| `comment` | String | Review comment |
| `menuItemId` | ObjectId | Kis menu item ka review |
| `orderId` | ObjectId | Kis order ka review |
| `verified` | Boolean | Admin ne verify kiya ya nahi |
| `createdAt` | Date | Review dene ka time |
| `updatedAt` | Date | Last update time |

---

### 6. 🧾 Bill (Collection: `bills`)

Online aur offline dono ke bills.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `billNumber` | String | Unique bill number (BILL-timestamp-XXXX) |
| `source` | String | `online` / `offline` |
| `orderId` | ObjectId | Online order ka reference |
| `orderNumber` | String | Order number |
| `customerName` | String | Customer ka naam (required) |
| `customerEmail` | String | Customer ki email |
| `customerPhone` | String | Customer ka phone |
| `items` | [BillItem] | Bill mein items |
| `subtotal` | Number | Tax se pehle total |
| `taxAmount` | Number | Tax amount |
| `discountAmount` | Number | Discount amount |
| `grandTotal` | Number | Final total |
| `paymentMethod` | String | `cash` / `card` / `online` |
| `status` | String | `unpaid` / `paid` / `cancelled` |
| `notes` | String | Notes |
| `generatedBy` | ObjectId | Kis admin/staff ne banaya |
| `createdAt` | Date | Bill ka time |
| `updatedAt` | Date | Last update time |

**BillItem Sub-document:**
| Field | Type | Description |
|---|---|---|
| `name` | String | Item ka naam |
| `quantity` | Number | Quantity |
| `price` | Number | Per item price |
| `total` | Number | quantity × price |

**Indexes:** `{createdAt}`, `{source, createdAt}`

---

### 7. 🪑 Table (Collection: `tables`)

Restaurant ki physical tables.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `tableNumber` | String | Table ka number (unique) |
| `capacity` | Number | Kitne log baith sakte hain (2-10) |
| `status` | String | `available` / `booked` / `reserved` / `maintenance` |
| `location.row` | Number | Row position (1-10) |
| `location.column` | Number | Column position (1-10) |
| `location.section` | String | `window` / `center` / `corner` / `outdoor` |
| `currentBooking` | ObjectId | Current booking ka reference |
| `bookedUntil` | Date | Kab tak booked hai |
| `createdAt` | Date | Table add karne ka time |
| `updatedAt` | Date | Last update time |

**Indexes:** `{status}`, `{location.row, location.column}`

---

### 8. 🖼️ HeroImage (Collection: `heroimages`)

Home page ke slider ki images.

| Field | Type | Description |
|---|---|---|
| `_id` | ObjectId | Auto-generated unique ID |
| `imageUrl` | String | Image ka URL/path (required) |
| `order` | Number | Display order (1-5, unique) |
| `isActive` | Boolean | Show karna hai ya nahi |
| `createdAt` | Date | Upload time |
| `updatedAt` | Date | Last update time |

---

### Database Relationships (ER Diagram)

```
User (1) ────────────────── (M) Bill (generatedBy)
Order (1) ──────────────── (M) Bill (orderId)
Order (M) ──────────────── (1) Menu (menuItemId in items)
Booking (1) ────────────── (1) Table (currentBooking)
Review (M) ─────────────── (1) Menu (menuItemId)
Review (M) ─────────────── (1) Order (orderId)
```

---

## 📡 API Endpoints

### 🌐 Public Endpoints (Authentication Nahi Chahiye)

| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/health` | Server health check |
| POST | `/api/auth/register` | User register karo |
| POST | `/api/auth/login` | User login karo |
| POST | `/api/admin/auth/login` | Admin login karo |
| GET | `/api/menu` | Saare menu items |
| GET | `/api/menu/:id` | Ek menu item |
| POST | `/api/orders` | Nayi order banao |
| GET | `/api/orders/:id` | Order details dekho |
| POST | `/api/bookings` | Table book karo |
| GET | `/api/reviews` | Reviews dekho |
| POST | `/api/reviews` | Review do |
| POST | `/api/payments/create-order` | Razorpay order banao |
| POST | `/api/payments/verify` | Payment verify karo |
| GET | `/api/hero-images` | Hero images |

### 🔒 Protected Endpoints (Admin/Staff Required)

#### Orders
| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/orders` | Saari orders |
| PUT | `/api/orders/:id/status` | Order status update karo |

#### Menu Management
| Method | Endpoint | Kya karta hai |
|---|---|---|
| POST | `/api/menu` | Nayi item add karo |
| PUT | `/api/menu/:id` | Item update karo |
| DELETE | `/api/menu/:id` | Item delete karo |

#### Booking Management
| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/bookings` | Saari bookings |
| PUT | `/api/bookings/:id` | Booking update karo |
| DELETE | `/api/bookings/:id` | Booking cancel karo |

#### Table Management
| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/tables` | Saari tables |
| POST | `/api/tables` | Nayi table add karo |
| PUT | `/api/tables/:id` | Table update karo |

#### Billing
| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/billing` | Saare bills |
| POST | `/api/billing` | Naiya bill banao |
| PUT | `/api/billing/:id` | Bill update karo |

#### Revenue
| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/revenue` | Revenue data |

#### Analytics
| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/analytics/dashboard` | Dashboard stats |
| GET | `/api/analytics/orders-per-hour` | Peak hours data |
| GET | `/api/analytics/top-selling` | Top selling items |
| GET | `/api/analytics/revenue` | Revenue summary |
| GET | `/api/analytics/repeat-customers` | Repeat customers |
| GET | `/api/analytics/bookings` | Booking statistics |

#### Users & Reviews
| Method | Endpoint | Kya karta hai |
|---|---|---|
| GET | `/api/users` | Saare users |
| GET | `/api/reviews` | Saare reviews (admin view) |
| PUT | `/api/reviews/:id` | Review verify karo |

#### Upload & Hero Images
| Method | Endpoint | Kya karta hai |
|---|---|---|
| POST | `/api/upload` | File/image upload karo |
| GET | `/api/hero-images` | Hero images list |
| POST | `/api/hero-images` | Hero image add karo |
| PUT | `/api/hero-images/:id` | Hero image update karo |
| DELETE | `/api/hero-images/:id` | Hero image delete karo |

---

## 📁 Project Structure

```
silver-plate/
│
├── frontend/                        # Next.js 14 App Router
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx             # Home page
│   │   │   ├── layout.tsx           # Root layout
│   │   │   ├── menu/                # Menu page
│   │   │   ├── cart/                # Cart page
│   │   │   ├── checkout/            # Checkout page
│   │   │   ├── booking/             # Table booking page
│   │   │   ├── about/               # About page
│   │   │   ├── contact/             # Contact page
│   │   │   ├── login/               # User login
│   │   │   ├── signup/              # User signup
│   │   │   └── admin/               # Admin panel
│   │   │       ├── layout.tsx       # Admin layout
│   │   │       ├── login/           # Admin login
│   │   │       ├── dashboard/       # Dashboard
│   │   │       ├── orders/          # Order management
│   │   │       ├── menu/            # Menu management
│   │   │       ├── bookings/        # Booking management
│   │   │       ├── billing/         # Billing system
│   │   │       ├── revenue/         # Revenue reports
│   │   │       ├── analytics/       # Analytics page
│   │   │       ├── customers/       # Customer list
│   │   │       ├── users/           # User management
│   │   │       ├── reviews/         # Review management
│   │   │       ├── hero-images/     # Hero image management
│   │   │       └── settings/        # Settings
│   │   ├── components/              # Reusable React components
│   │   ├── context/                 # Context API (state management)
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── services/                # API call services
│   │   ├── styles/                  # Global styles
│   │   └── utils/                   # Utility functions
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── backend/                         # Node.js + Express API
│   ├── src/
│   │   ├── app.ts                   # Express app setup
│   │   ├── config/
│   │   │   ├── db.ts                # MongoDB connection
│   │   │   ├── env.ts               # Environment config
│   │   │   └── razorpay.ts          # Razorpay setup
│   │   ├── models/                  # MongoDB/Mongoose models
│   │   │   ├── User.model.ts
│   │   │   ├── Menu.model.ts
│   │   │   ├── Order.model.ts
│   │   │   ├── Booking.model.ts
│   │   │   ├── Review.model.ts
│   │   │   ├── Bill.model.ts
│   │   │   ├── Table.model.ts
│   │   │   └── HeroImage.model.ts
│   │   ├── controllers/             # Business logic
│   │   │   ├── auth.controller.ts
│   │   │   ├── menu.controller.ts
│   │   │   ├── order.controller.ts
│   │   │   ├── booking.controller.ts
│   │   │   ├── payment.controller.ts
│   │   │   ├── billing.controller.ts
│   │   │   ├── analytics.controller.ts
│   │   │   ├── revenue.controller.ts
│   │   │   ├── review.controller.ts
│   │   │   ├── table.controller.ts
│   │   │   ├── heroImage.controller.ts
│   │   │   ├── upload.controller.ts
│   │   │   └── user.controller.ts
│   │   ├── routes/                  # API routes
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts   # JWT verify
│   │   │   ├── rateLimiter.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   ├── upload.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── requestLogger.middleware.ts
│   │   ├── services/
│   │   │   ├── order.service.ts
│   │   │   └── analytics.service.ts
│   │   └── utils/
│   │       ├── jwt.ts               # JWT helpers
│   │       ├── whatsapp.ts          # WhatsApp notifications
│   │       ├── email.ts             # Email utilities
│   │       ├── logger.ts            # Structured logging
│   │       └── booking.utils.ts     # Booking helpers
│   ├── uploads/                     # Uploaded images
│   ├── package.json
│   └── tsconfig.json
│
├── docker-compose.yml               # Full stack Docker setup
├── docker-compose.atlas.yml         # MongoDB Atlas Docker setup
├── ecosystem.config.cjs             # PM2 config
├── DOCKER.md                        # Docker guide
├── PRODUCTION.md                    # Production deployment guide
├── DEPLOYMENT.md                    # Deployment instructions
└── README.md
```

---

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB (local ya Atlas)
- npm

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# .env file edit karo apni values ke saath
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# .env.local file edit karo
npm run dev
```

### Dono Ek Saath Start Karo (Root se)

```bash
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/silverplet
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
JWT_SECRET=your_strong_jwt_secret
JWT_EXPIRES_IN=7d
ADMIN_PHONE=+91XXXXXXXXXX
WHATSAPP_API_URL=your_whatsapp_api_url
WHATSAPP_API_KEY=your_whatsapp_api_key
NODE_ENV=development
```

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🐳 Docker Setup

Poora stack Docker se ek command mein chalaao:

```bash
cp env.docker.example .env
# .env mein JWT_SECRET aur baaki values set karo
docker compose up -d --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000/api |
| MongoDB | localhost:27017 |

**MongoDB Atlas use karna ho to:**
```bash
docker compose -f docker-compose.atlas.yml up -d --build
```

Poori Docker guide ke liye dekho: **[DOCKER.md](./DOCKER.md)**

---

## 🚀 Production & Deployment

| Item | Details |
|---|---|
| **Server** | AWS EC2 |
| **Reverse Proxy** | Nginx |
| **SSL** | Let's Encrypt (Certbot) |
| **Process Manager** | PM2 |
| **CI/CD** | GitHub Actions |
| **Database** | MongoDB Atlas |
| **Container** | Docker + Docker Compose |

Poori production guide ke liye dekho: **[PRODUCTION.md](./PRODUCTION.md)**

### Quick Deploy Options

**Frontend — Vercel:**
1. GitHub pe push karo
2. Vercel mein import karo
3. Environment variables set karo
4. Deploy!

**Backend — VPS/EC2:**
1. GitHub pe push karo
2. SSH se server pe connect karo
3. Docker Compose se deploy karo

---

## 🔒 Security

| Feature | Description |
|---|---|
| JWT Authentication | Har protected route pe token verify hota hai |
| Password Hashing | bcrypt se passwords securely stored |
| API Rate Limiting | Spam/brute-force attacks se protection |
| Input Validation | Galat/malicious data reject hota hai |
| CORS Configuration | Sirf allowed origins se requests accept |
| MongoDB Injection Prevention | Mongoose se injection attacks blocked |
| Environment Secrets | Koi bhi secret code mein nahi, .env mein |
| Role-based Access | Admin routes sirf admin access kar sakta hai |

---

## 📊 Analytics Overview

Admin panel mein ye sab milta hai:

- **Aaj ke Orders** — Count aur total revenue
- **Pending Orders** — Abhi kitne orders pending hain
- **Online vs COD Ratio** — Payment method breakdown
- **Orders Per Hour** — Din mein kab rush hoti hai
- **Top Selling Items** — Sabse popular dishes
- **Revenue Summary** — Daily/weekly revenue trends
- **Repeat Customers** — Loyal customers ki list
- **Booking Statistics** — Reservation trends

---

## 📝 License

MIT License — freely use, modify, aur distribute kar sakte hain.

## 🤝 Contributing

Pull Requests welcome hain! Koi bug ho ya feature suggestion ho, issue create karo.

## 📧 Support

Email: support@silverplate.com  
Ya GitHub pe issue create karo.

---

> Built with ❤️ for modern restaurants — Silver Plate
