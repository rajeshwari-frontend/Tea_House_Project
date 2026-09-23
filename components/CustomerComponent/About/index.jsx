import Image from "next/image";
function About() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between
      gap-8 md:gap-15 bg-black px-5 py-10 md:px-18 md:py-15
      scroll-mt-20"
      id="about"
    >
      {/* Image Section */}
      <div className="flex-1">
       <Image
  src="/image.png"
  alt="Tea House"
  width={550}
  height={400}
  className="w-full max-w-137.5 rounded-[20px] mx-auto"
/>
      </div>

      {/* Content Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-orange-500 text-[40px] md:text-[25px] mb-3">
          About Us
        </h1>

        <h3 className="text-[28px] md:text-[30px] text-gray-400 mb-5">
          Welcome to Tea House
        </h3>

        <p className="text-gray-400 leading-[1.8] mb-5">
          We believe every cup of tea tells a story.
          Our tea is crafted using fresh ingredients,
          premium tea leaves, and traditional recipes
          to give you the perfect experience.
        </p>

        <ul className="list-none mb-8">
          <li className="text-gray-400 text-lg mb-3">
            @ Premium Tea Leaves
          </li>

          <li className="text-gray-400 text-lg mb-3">
            @ Organic Ingredients
          </li>

          <li className="text-gray-400 text-lg mb-3">
            @ Freshly Brewed Every Day
          </li>

          <li className="text-gray-400 text-lg mb-3">
            @ Cozy & Peaceful Ambience
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;