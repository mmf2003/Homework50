function PerformancePanel({ counter, onCounterChange, calculationCount }) {
    return (
        <section className="performance-panel">
            <div className="performance-header">
                <div>
                    <h2>Performance Monitor</h2>
                    <p>Demonstration before memoization</p>
                </div>

                <span className="before-badge">BEFORE</span>
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

            <div className="performance-info">
                <strong>What happens?</strong>

                <p>
                    Changing this counter does not affect products, but App
                    renders again and product calculations run again.
                </p>
            </div>
        </section>
    );
}

export default PerformancePanel;
