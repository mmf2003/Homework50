function ProductItem({ product, isSelected, onSelectProduct }) {
    return (
        <button
            type="button"
            className={
                isSelected
                    ? "product-item product-item--selected"
                    : "product-item"
            }
            onClick={() => onSelectProduct(product.id)}
        >
            <div className="product-main">
                <h3>{product.name}</h3>

                <span className="category-badge">{product.category}</span>
            </div>

            <div className="product-rating">★ {product.rating}</div>

            <div className="product-price">${product.price}</div>
        </button>
    );
}

export default ProductItem;
