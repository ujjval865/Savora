# 🍽️ Savora — Restaurant Website

Savora is a responsive restaurant website built with React.js and Tailwind CSS. It provides an interactive food browsing experience with category filtering, search, sorting, food details, and a functional shopping cart.

The project focuses on building practical React skills through reusable components, routing, state management, and interactive UI functionality.

## ✨ Features

- **Responsive Design** — Works across desktop, tablet, and mobile screens.
- **Home Page** — Hero section, food categories, featured dishes, special offers, testimonials, and CTA.
- **Menu Browsing** — Explore food items with category-based filtering.
- **Search Functionality** — Search for food items by name.
- **Sorting** — Sort menu items using available sorting options.
- **Vegetarian Filter** — Filter vegetarian food items.
- **Food Details** — View individual food details using dynamic routing.
- **Shopping Cart** — Add items, increase or decrease quantities, and remove items.
- **Dynamic Cart Total** — Automatically calculates the cart total and item count.
- **Cart Persistence** — Cart data is saved in localStorage and restored after refreshing the page.
- **Contact Form** — Includes input handling, validation, and a success message.
- **About Page** — Includes restaurant story, benefits, team members, and FAQs.
- **Reusable Components** — Organized UI components for easier maintenance.
- **Empty States** — Helpful UI when searches return no results or the cart is empty.

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- Context API
- React Hooks (`useState`, `useEffect`, `useContext`, `useParams`)
- Browser localStorage
- Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── menu/
│   │   ├── MenuHeader.jsx
│   │   ├── MenuSearch.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── MenuSort.jsx
│   │   ├── VegToggle.jsx
│   │   ├── FoodCard.jsx
│   │   └── EmptyState.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── restaurantData.js
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── FoodDetails.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Cart.jsx
├── App.jsx
└── main.jsx
```

*Note: Adjust the folder names above if your actual project structure differs.*

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd Savora
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## 🧠 What I Learned

While building Savora, I practiced:

- Breaking a website into reusable React components.
- Passing and managing data across components.
- Using React Context API for shared cart state.
- Implementing client-side routing and dynamic routes.
- Building search, filtering, and sorting functionality.
- Handling forms and validation.
- Persisting application data using localStorage.
- Creating responsive layouts with Tailwind CSS.
- Organizing a React project into maintainable modules.
- Debugging and testing interactive application features.

## 🔮 Future Improvements

- Integrate real authentication using Supabase Auth.
- Connect a database for dynamic restaurant and menu data.
- Add an order checkout flow.
- Integrate online payments.
- Add loading, error, and success states for API requests.
- Add automated tests and improve accessibility.

## ⚠️ Current Limitations

- Menu and restaurant data are currently managed on the frontend.
- The cart uses browser localStorage for persistence.
- The contact form currently displays a frontend success message; it does not send messages to a backend unless a service is connected.
- Authentication and payment processing are not part of the current working feature set.

## 👨‍💻 Author

**Ujjval Gahlout**

- GitHub: https://github.com/ujjval865
- LinkedIn: https://www.linkedin.com/in/ujjval-gahlot-484516406/

---

Built with ❤️ using React.js and Tailwind CSS.
