import { useRef, useState } from "react";

import Header from "./components/Header";
import PerformancePanel from "./components/PerformancePanel";
import ProductFilters from "./components/ProductFilters";
import ProductList from "./components/ProductList";

import { products } from "./data/products";

import "./App.css";

function App() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [counter, setCounter] = useState(0);

    const calculationCount = useRef(0);

    console.log("App rendered");

    calculationCount.current += 1;

    console.log("Product calculation:", calculationCount.current);

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

    const handleCounterChange = () => {
        setCounter((currentCounter) => currentCounter + 1);
    };

    return (
        <div className="app">
            <Header />

            <main className="container">
                <section className="page-header">
                    <div>
                        <h2>Products Dashboard</h2>

                        <p>
                            Explore product data and React performance
                            optimization.
                        </p>
                    </div>
                </section>

                <PerformancePanel
                    counter={counter}
                    onCounterChange={handleCounterChange}
                    calculationCount={calculationCount.current}
                />

                <ProductFilters
                    search={search}
                    category={category}
                    onSearchChange={setSearch}
                    onCategoryChange={setCategory}
                />

                <section className="stats">
                    <div className="stat-card">
                        <span>Products</span>

                        <strong>{filteredProducts.length}</strong>
                    </div>

                    <div className="stat-card">
                        <span>Total Price</span>

                        <strong>${totalPrice.toLocaleString()}</strong>
                    </div>

                    <div className="stat-card">
                        <span>Category</span>

                        <strong>{category}</strong>
                    </div>
                </section>

                <section className="products-section">
                    <div className="section-title">
                        <div>
                            <h2>Product List</h2>

                            <p>Products matching the current filters</p>
                        </div>

                        <span>{filteredProducts.length} items</span>
                    </div>

                    <ProductList products={filteredProducts} />
                </section>
            </main>
        </div>
    );
}

export default App;
