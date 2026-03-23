# 🛒 Cart Management App

A modern **React-based Cart Management Application** that allows users to browse products, add them to a cart, manage quantities, and view total pricing — built with clean UI and scalable architecture.

---

## 🚀 Features

* 🛍️ Browse products by category
* ➕ Add items to cart
* 🔁 Increase / decrease item quantity
* ❌ Remove items from cart
* 🧮 Dynamic total price calculation
* 🧭 Smooth category navigation (scroll-based)
* 🔢 Cart badge showing total items
* 💻 Responsive and clean UI

---

## 🧠 Concepts Used

* React Functional Components
* React Hooks (`useState`)
* React Router (`Routes`, `Route`, `Link`)
* State Management (Lifting State Up)
* Array Methods (`map`, `filter`, `reduce`, `find`)
* Conditional Rendering
* CSS (Flexbox, Grid, Responsive Design)

---

## 📁 Project Structure

```
src/
 ├── assets/
 │    └── product.json
 ├── components/
 │    └── NavBar.jsx
 ├── pages/
 │    ├── Home.jsx
 │    └── Cart.jsx
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

---

## 🌐 Live Demo

👉 https://cart-management-bice.vercel.app/

---

## 🧩 How It Works

1. Products are loaded from a JSON file
2. Users can add products to the cart
3. If product already exists → quantity increases
4. Cart state is managed in `App.jsx`
5. Data is passed to components via props
6. Total price is calculated dynamically

---
