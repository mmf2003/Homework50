function ProductItem({ product }) {
    return (
        <div className="product-item">
            <div>
                <h3>{product.name}</h3>
                <span className="category-badge">{product.category}</span>
            </div>

            <div className="product-rating">★ {product.rating}</div>

            <div className="product-price">${product.price}</div>
        </div>
    );
}

export default ProductItem;
