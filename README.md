# React Memoization Demo

A React application that demonstrates performance optimization using memoization.

The project shows how `useMemo`, `useCallback`, and `React.memo` can prevent unnecessary calculations and component re-renders.

## Features

- Product list
- Product search
- Category filtering
- Product selection
- Product statistics
- Performance monitor
- Before / After memoization comparison
- Responsive design

## Memoization

The project demonstrates three React memoization techniques.

### useMemo

`useMemo` is used to cache filtered products and the total product price.

The calculation is repeated only when the search value or selected category changes.

```jsx
const productData = useMemo(() => {
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    const totalPrice = filteredProducts.reduce(
        (total, product) => total + product.price,
        0,
    );

    return {
        filteredProducts,
        totalPrice,
    };
}, [search, category]);
```

Changing unrelated state does not cause these calculations to run again.

### useCallback

`useCallback` is used to keep the product selection callback reference stable between renders.

```jsx
const handleSelectProduct = useCallback((id) => {
    setSelectedProductId(id);
}, []);
```

This is useful when the callback is passed to a memoized child component.

### React.memo

`ProductList` is wrapped with `React.memo`.

```jsx
export default memo(ProductList);
```

React can skip rendering `ProductList` when its props have not changed.

## Performance Demonstration

The application contains an unrelated counter that causes the main `App` component to render again.

Without memoization:

```text
Counter changes
      ↓
App renders
      ↓
Product calculations run again
      ↓
Callback is recreated
      ↓
ProductList renders again
```

With memoization:

```text
Counter changes
      ↓
App renders
      ↓
useMemo → cached data
      ↓
useCallback → stable callback
      ↓
React.memo → ProductList render skipped
```

The Performance Monitor allows this behavior to be tested directly in the application.

## Before vs After

| Behavior               | Without Memoization | With Memoization |
| ---------------------- | ------------------- | ---------------- |
| App re-renders         | Yes                 | Yes              |
| Product calculations   | Repeated            | Skipped          |
| Callback recreated     | Yes                 | No               |
| ProductList re-renders | Yes                 | Skipped          |

Memoization does not prevent the parent component from rendering. It prevents unnecessary calculations and child component renders when the relevant dependencies and props have not changed.

## Technologies

- React
- Vite
- JavaScript
- CSS
- React Hooks

## React APIs

- `useState`
- `useRef`
- `useMemo`
- `useCallback`
- `React.memo`

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── PerformanceComparison.jsx
│   ├── PerformancePanel.jsx
│   ├── ProductFilters.jsx
│   ├── ProductItem.jsx
│   └── ProductList.jsx
├── data/
│   └── products.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Production Build

Create a production build:

```bash
npm run build
```

## How to Test Memoization

1. Open the application.
2. Open the browser DevTools Console.
3. Click `Change unrelated counter` several times.
4. The `App` component renders again.
5. Product calculations are not repeated.
6. `ProductList` does not render again.
7. Change the search query or category.
8. Product calculations and `ProductList` update because their actual data has changed.

## Repository

https://github.com/mmf2003/Homework50.git
