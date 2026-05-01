# Professional Data Science Portfolio

A high-performance, responsive portfolio website built with React, Vite, and Tailwind CSS. Featuring smooth animations, a modern bento-style layout, and an integrated contact system.

## 🚀 Features

- **Modern UI/UX**: Sleek, high-contrast design with glassmorphism effects.
- **Bento Grid Layout**: Optimized for showcasing projects and skills effectively.
- **Interactive Elements**: Custom cursor, smooth scroll animations (Framer Motion), and hover effects.
- **Contact System**: Fully functional contact form integrated with **EmailJS** for direct email delivery.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Performance Optimized**: Built with Vite for lightning-fast load times.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Email Service**: EmailJS

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### 📧 Setting Up Email Notifications

This portfolio uses **EmailJS** to handle contact form submissions. To make it work:

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (connect your Gmail).
3. Create an **Email Template** with the following variables:
   - `{{subject}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{reply_to}}`
   - `{{phone_number}}`
   - `{{message}}`
4. Update your keys in `src/components/ContactModal.jsx`:
   ```javascript
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const PUBLIC_KEY = 'your_public_key';
   ```

## 📂 Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components (Hero, Projects, Contact, etc.)
├── App.jsx          # Main application component
├── index.css        # Global styles and Tailwind imports
└── main.jsx         # Entry point
```

## 📜 License

This project is licensed under the MIT License.

---

Created by [KK Gurudev](https://github.com/gurudev-1113)
