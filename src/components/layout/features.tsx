import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full px-4">
      <h2 className="text-subheading text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-16 lg:mb-20 max-w-[50%]">
        Your Ultimate Companion for Smart and Seamless City Travel
      </h2>

      <div className="grid w-full max-w-6xl grid-cols-2 gap-2  md:gap-4 lg:gap-6">
        {/* card */}
        {[
          {
            title: "Real Time Travel Data",
            subtitle: "Always Up to Date",
            text: "Live fare updates, metro timings, and bus schedules so you’re never caught off guard.",
            img: "images/clock.webp",
          },
          {
            title: "Direct Booking Links",
            subtitle: "Book Without the Hassle",
            text: "Jump directly to Ola, Uber, Rapido, or Metro booking portals with your route pre-filled.",
            img: "images/booking.webp",
          },
          {
            title: "Multi Mode Comparison",
            subtitle: "All Options in One Place",
            text: "Compare fares for Auto, Bus, and Metro in seconds to find the most cost-effective choice.",
            img: "images/fare.webp",
          },
          {
            title: "Smart Route Planning",
            subtitle: "Fastest & Easiest Paths",
            text: "Get up to 3 best routes for your journey, combining different modes to save time and money.",
            img: "images/smartRoute.webp",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="card rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-start justify-between shadow-md"
          >
            <div className="card rounded-full p-1 md:px-3 md:py-1 mb-1 md:mb-2">
              <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm text-subheading">
                {item.subtitle}
              </p>
            </div>
            <h3 className="text-subheading text-sm sm:text-base md:text-2xl lg:text-3xl mb-1 md:mb-2">
              {item.title}
            </h3>
            <p className="text-body text-xs sm:text-sm md:text-lg lg:text-xl mb-2  md:mb-4 max-w-prose">
              {item.text}
            </p>
            <div className="w-full flex items-start justify-between pr-2 md:pr-4 mt-1 md:mt-2">
              <a className="text-subheading hover:underline text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl cursor-pointer hover:text-primary hover:scale-102 transition-all md:mt-2">
                Let’s get started{" "}
                <ArrowRightAltIcon
                  className="text-secondary"
                  sx={{ fontSize: { xs: 6, sm: 12, md: 18, lg: 24 } }}
                />
              </a>
              <img
                src={item.img}
                alt={item.title}
                className="w-16 sm:w-20 md:w-24 lg:w-28"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
