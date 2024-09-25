const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Show Now</button>
          <button className="secondary-btn" >Category</button>
        </div>

        <div className="Shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/public/amazon.png" alt="amazon-logo" />
            <img src="/public/flipkart.png" alt="flipkart-logo" />
          </div>

        </div>
      </div>

      <div className="hero-image">
        <img src="/public/hero-image.png" alt="hero-img" />
      </div>

    </main>
  );
};

export default Hero;