import { useState } from "react";
import data from "../assets/product.json";

const { products } = data;

const grouped = products.reduce((acc, product) => {
  const cat = product.category;
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(product);
  return acc;
}, {});

const categories = Object.keys(grouped);

function Home({ addToCart, cartItems }) {
  const [active, setActive] = useState(categories[0]);

  const getQty = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  const scrollTo = (category) => {
    setActive(category);
    document.getElementById(category)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="home">
      <aside className="filter-bar">
        <p className="filter-bar-heading">Categories</p>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${active === category ? "filter-btn-active" : ""}`}
            onClick={() => scrollTo(category)}
          >
            {category}
          </button>
        ))}
      </aside>

      <div className="products-area">
        {categories.map((category) => (
          <section key={category} id={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="product-grid">
              {grouped[category].map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button
                    className="btn-add-cart"
                    onClick={() => addToCart(product)}
                  >
                    {getQty(product.id) > 0
                      ? `In Cart (${getQty(product.id)})`
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;
