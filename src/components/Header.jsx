function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div>
                    <h1>Product Analytics</h1>
                    <p>React Memoization Demo</p>
                </div>

                <div className="memo-badge">
                    useMemo • useCallback • React.memo
                </div>
            </div>
        </header>
    );
}

export default Header;
