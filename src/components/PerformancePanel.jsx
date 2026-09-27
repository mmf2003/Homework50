function PerformancePanel({ counter, onCounterChange, calculationCount }) {
    return (
        <section className="performance-panel">
            <div className="performance-header">
                <div>
                    <h2>Performance Monitor</h2>

                    <p>useMemo optimization enabled</p>
                </div>

                <span className="optimized-badge">useMemo</span>
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
                <strong>useMemo is working</strong>

                <p>
                    Changing the unrelated counter renders App again, but
                    product calculations are not repeated because search and
                    category have not changed.
                </p>
            </div>
        </section>
    );
}

export default PerformancePanel;
