
export default function Header() {
    return (
      <header className="header">
        <h1>ShopTrend</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </header>
    );
  }