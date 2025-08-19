import Button from "../ui/button";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-18 sm:mt-20 md:mt-25">
      <img
        src="images/map.webp"
        alt="hero image showcasing searching a location on map"
        className="w-1/5 md:w-1/6 aspect-square mb-2 md:mb-4"
      />
      <h1 className="text-heading text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center mb-3 sm:mb-5 md:mb-8">
        Skip the Guesswork <br />
        Navigate Your City Better.
      </h1>
      <div className="flex items-center justify-between gap-4 w-full max-w-3xl mb-3 sm:mb-5 md:mb-8">
        <img
          src="images/skyline.webp"
          alt="image showcasing skyline of a city"
          className="w-1/8 md:w-1/6 aspect-square -mb-6 sm:-mb-9 md:-mb-12"
        />
        <p className="text-center text-body text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Find the fastest, cheapest, and most comfortable way to get around
          your city. whether it’s by Auto, Bus, or Metro.
        </p>
        <img
          src="images/skyline2.webp"
          alt="image showcasing skyline of a city"
          className="w-1/8 md:w-1/6 aspect-square -mb-6 sm:-mb-9 md:-mb-12"
        />
      </div>
      <Button color="primary" text="search on map" icon="search" />
    </div>
  );
};

export default Hero;
