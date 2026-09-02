import "./index.css";
import Link from "next/link";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h1>Fresh Tea,<br />Fresh Moments</h1>

        <p>
          Discover the finest handcrafted teas made
          with love and fresh ingredients.
        </p>

       <Link href="/customer/menu"><button className="hero-btn">
          Explore Menu
        </button></Link>

      </div>

      <div className="hero-image">

        <img
          src="https://t4.ftcdn.net/jpg/20/48/96/31/360_F_2048963114_yXOAXhqFb5dHEKYzY3WQMJXLfLKjJqpM.jpg"
          alt="Tea"
        />

      </div>

    </section>
  );
}

export default Hero;