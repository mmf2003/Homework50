function ProductFilters({
    search,
    category,
    onSearchChange,
    onCategoryChange,
}) {
    return (
        <section className="filters">
            <div className="filter-group">
                <label htmlFor="search">Search products</label>

                <input
                    id="search"
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(event) => onSearchChange(event.target.value)}
                />
            </div>

            <div className="filter-group">
                <label htmlFor="category">Category</label>

                <select
                    id="category"
                    value={category}
                    onChange={(event) => onCategoryChange(event.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Audio">Audio</option>
                </select>
            </div>
        </section>
    );
}

export default ProductFilters;
