# 🛍️ Frontend Shop React App

A modern, responsive e-commerce web application built with React and Vite, featuring a clean UI, shopping cart functionality, and seamless user experience.

## 🌟 Overview

This is a full-featured online shopping platform that allows users to browse products, search by title or category, view detailed product information, add items to cart, and manage their orders. The application integrates with the Fake Store API to provide a realistic shopping experience with real product data.

## ✨ Features

### 🛒 Core Shopping Features

- **Product Catalog**: Browse a comprehensive collection of products from various categories
- **Advanced Search**: Search products by title with real-time filtering
- **Category Filtering**: Filter products by categories (electronics, clothing, jewelry, etc.)
- **Product Details**: View detailed product information in an elegant modal
- **Shopping Cart**: Add/remove items with real-time cart updates
- **Order Management**: Track and view order history
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 User Experience

- **Modern UI**: Clean, professional design with smooth animations
- **Gradient Aesthetics**: Beautiful gradient titles and modern styling
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Proper loading indicators for better UX
- **Error Handling**: Graceful error handling with user-friendly messages

### 🚀 Technical Features

- **Single Page Application**: Fast navigation with React Router
- **Context API**: Centralized state management
- **Custom Hooks**: Reusable logic for page titles and metadata
- **Responsive Grid**: Adaptive product grid layout
- **Modern CSS**: Tailwind CSS for utility-first styling
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend Framework

- **React 18.2.0** - Modern React with hooks and functional components
- **React Router DOM 6.22.1** - Client-side routing and navigation

### Styling & UI

- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Heroicons React 2.1.1** - Beautiful SVG icons
- **PostCSS 8.4.35** - CSS processing and optimization
- **Custom CSS** - Additional styling for specific components

### Build Tools & Development

- **Vite 5.1.4** - Fast build tool and development server
- **ESLint 8.56.0** - Code linting and quality assurance
- **Autoprefixer 10.4.17** - CSS vendor prefixing

### API Integration

- **Fake Store API** - External API for product data
- **Fetch API** - Native JavaScript for HTTP requests

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/VictorWKey/fronted-shop-react-app.git
   cd fronted-shop-react-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```text
src/
├── Components/          # Reusable UI components
│   ├── Card/           # Product card component
│   ├── CheckoutSideMenu/ # Shopping cart sidebar
│   ├── Layout/         # Page layout wrapper
│   ├── NavBar/         # Navigation header
│   ├── OrderCard/      # Order item component
│   ├── OrdersCard/     # Order summary card
│   └── ProductDetail/  # Product detail modal
├── Context/            # React Context for state management
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── App/           # Main application component
│   ├── Home/          # Product catalog page
│   ├── MyAccount/     # User account page
│   ├── MyOrder/       # Individual order page
│   ├── MyOrders/      # Order history page
│   ├── NotFound/      # 404 error page
│   └── SingIn/        # Sign in page
└── utils/             # Utility functions and helpers
```

## 🔧 Configuration

### Tailwind CSS

The application uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### Vite Configuration

Build and development settings are configured in `vite.config.js`.

### PostCSS

CSS processing configuration is in `postcss.config.js`.

## 🌐 API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) to fetch product data:

- **Products Endpoint**: `https://fakestoreapi.com/products`
- **Categories**: Electronics, Jewelry, Men's Clothing, Women's Clothing
- **Data Format**: JSON with product details including title, price, description, image, and category

## 🎯 Key Components

### Shopping Context

Centralized state management handling:

- Product catalog and filtering
- Shopping cart operations
- Order management
- UI state (modals, sidebars)

### Product Card

Displays product information with:

- Product image and title
- Price formatting
- Add to cart functionality
- Quick view options

### Checkout Side Menu

Shopping cart interface featuring:

- Cart item management
- Price calculations
- Checkout process
- Order confirmation

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built application will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload the `dist` folder to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

### Victor W. Key

- GitHub: [@VictorWKey](https://github.com/VictorWKey)

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing the product data
- [Heroicons](https://heroicons.com/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!
