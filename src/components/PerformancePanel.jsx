function PerformancePanel({ counter, onCounterChange, calculationCount }) {
    return (
        <section className="performance-panel">
            <div className="performance-header">
                <div>
                    <h2>Performance Monitor</h2>

                    <p>React memoization optimization</p>
                </div>

                <div className="optimization-badges">
                    <span className="optimized-badge">useMemo</span>

                    <span className="optimized-badge">useCallback</span>

                    <span className="optimized-badge">React.memo</span>
                </div>
            </div>

            <div className="performance-content">
                <div className="performance-stat">
                    <span>Unrelated Counter</span>
                    <strong>{counter}</strong>
                </div>

                <div className="performance-stat">
                    <span>Calculations</span>
                    <strong>{calculationCount}</strong>
                </div>

                <button
                    className="counter-button"
                    type="button"
                    onClick={onCounterChange}
                >
                    Change unrelated counter
                </button>
            </div>

            <div className="performance-info performance-info--optimized">
                <strong>Memoization is working</strong>

                <p>
                    useMemo prevents unnecessary product calculations,
                    useCallback keeps the callback reference stable, and
                    React.memo prevents unnecessary ProductList renders.
                </p>
            </div>
        </section>
    );
}

export default PerformancePanel;
