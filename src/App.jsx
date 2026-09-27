import { useCallback, useMemo, useRef, useState } from "react";

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
    const [selectedProductId, setSelectedProductId] = useState(null);

    const calculationCount = useRef(0);

    console.log("App rendered");

    const productData = useMemo(() => {
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

        return {
            filteredProducts,
            totalPrice,
        };
    }, [search, category]);

    const handleSelectProduct = useCallback((id) => {
        setSelectedProductId(id);
    }, []);

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

                        <strong>{productData.filteredProducts.length}</strong>
                    </div>

                    <div className="stat-card">
                        <span>Total Price</span>

                        <strong>
                            ${productData.totalPrice.toLocaleString()}
                        </strong>
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

                            <p>Click a product to select it</p>
                        </div>

                        <span>{productData.filteredProducts.length} items</span>
                    </div>

                    <ProductList
                        products={productData.filteredProducts}
                        selectedProductId={selectedProductId}
                        onSelectProduct={handleSelectProduct}
                    />
                </section>
            </main>
        </div>
    );
}

export default App;
