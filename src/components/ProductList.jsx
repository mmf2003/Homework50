import { memo } from "react";

import ProductItem from "./ProductItem";

function ProductList({ products, selectedProductId, onSelectProduct }) {
    console.log("ProductList rendered");

    if (products.length === 0) {
        return <div className="empty-state">No products found.</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    isSelected={selectedProductId === product.id}
                    onSelectProduct={onSelectProduct}
                />
            ))}
        </div>
    );
}

export default memo(ProductList);
