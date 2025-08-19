const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  card rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="m-4 w-[70vw] flex flex-col items-center">
        {" "}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 sm:mb-6 md:mb-12 lg:mb-16 w-full">
          <div className="md:space-y-4 mb-4 md:mb-0">
            <h2 className="text-subheading text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
              About us
            </h2>
            <h3 className="text-subheading text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left">
              Travel Made Simple
            </h3>
          </div>
          <img
            src="images/path.webp"
            alt="image shocasing a path from one point to another point"
            className="w-20 sm:w-25 md:w-35 lg:w-40 mb-2 md:mb-0"
          />
        </div>
        <p className="text-body text-base sm:text-lg md:text-xl lg:text-2xl mb-0.5 md:mb-1 w-full text-center">
          Fare is your all in one travel companion, bringing taxis, buses, and
          trains together on a single platform.Easily book your ride, compare
          fares, and track trips in real time whether it’s a quick taxi across
          town, a bus to the next city, or a train for your weekend getaway.
          With secure integration with online services and a simple interface,
          Fare makes every journey smarter, faster, and more convenient.
        </p>
      </div>
    </div>
  );
};

export default About;
