import ProductItem from "./ProductItem";

function ProductList({ products }) {
    if (products.length === 0) {
        return <div className="empty-state">No products found.</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
