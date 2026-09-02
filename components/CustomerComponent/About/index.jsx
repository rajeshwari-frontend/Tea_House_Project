import "./index.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="/image.png"
          alt="Tea House"
        />
      </div>

      <div className="about-content">

        <h1>About Us</h1>

        <h3>Welcome to Tea House</h3>

        <p>
          We believe every cup of tea tells a story.
          Our tea is crafted using fresh ingredients,
          premium tea leaves, and traditional recipes
          to give you the perfect experience.
        </p>

        <ul>
          <li> @ Premium Tea Leaves</li>
          <li> @ Organic Ingredients</li>
          <li> @ Freshly Brewed Every Day</li>
          <li> @ Cozy & Peaceful Ambience</li>
        </ul>

       
      </div>

    </section>
  );
}

export default About;