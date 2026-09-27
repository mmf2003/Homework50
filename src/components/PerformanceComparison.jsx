function PerformanceComparison() {
    return (
        <section className="comparison-section">
            <div className="comparison-header">
                <h2>Before vs After Memoization</h2>

                <p>
                    How memoization changes component behavior when unrelated
                    state updates.
                </p>
            </div>

            <div className="comparison-grid">
                <div className="comparison-card comparison-card--before">
                    <div className="comparison-card__header">
                        <span className="comparison-status comparison-status--before">
                            BEFORE
                        </span>

                        <h3>Without Memoization</h3>
                    </div>

                    <div className="comparison-list">
                        <div className="comparison-row">
                            <span>App re-renders</span>
                            <strong>Yes</strong>
                        </div>

                        <div className="comparison-row">
                            <span>Product calculations</span>
                            <strong className="comparison-bad">Repeated</strong>
                        </div>

                        <div className="comparison-row">
                            <span>Callback recreated</span>
                            <strong className="comparison-bad">Yes</strong>
                        </div>

                        <div className="comparison-row">
                            <span>ProductList re-renders</span>
                            <strong className="comparison-bad">Yes</strong>
                        </div>
                    </div>
                </div>

                <div className="comparison-card comparison-card--after">
                    <div className="comparison-card__header">
                        <span className="comparison-status comparison-status--after">
                            AFTER
                        </span>

                        <h3>With Memoization</h3>
                    </div>

                    <div className="comparison-list">
                        <div className="comparison-row">
                            <span>App re-renders</span>
                            <strong>Yes</strong>
                        </div>

                        <div className="comparison-row">
                            <span>Product calculations</span>
                            <strong className="comparison-good">Skipped</strong>
                        </div>

                        <div className="comparison-row">
                            <span>Callback recreated</span>
                            <strong className="comparison-good">No</strong>
                        </div>

                        <div className="comparison-row">
                            <span>ProductList re-renders</span>
                            <strong className="comparison-good">Skipped</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="memo-explanation">
                <div className="memo-explanation__item">
                    <span className="memo-number">1</span>

                    <div>
                        <h4>useMemo</h4>

                        <p>
                            Caches filtered products and total price until
                            search or category changes.
                        </p>
                    </div>
                </div>

                <div className="memo-explanation__item">
                    <span className="memo-number">2</span>

                    <div>
                        <h4>useCallback</h4>

                        <p>
                            Keeps the product selection callback reference
                            stable between renders.
                        </p>
                    </div>
                </div>

                <div className="memo-explanation__item">
                    <span className="memo-number">3</span>

                    <div>
                        <h4>React.memo</h4>

                        <p>
                            Skips ProductList rendering when its props have not
                            changed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PerformanceComparison;
