import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { link } from "fs";
const Info = () => {
  const cards = [
    {
      title: "Taxi And Cabs",
      text1: "On-demand rides available 24/7.",
      text2: "Direct pick-up and drop-off at your location.",
      text3: "Comfortable and private travel.",
      link: "Book a taxi",
      img: "images/cab.webp",
    },
    {
      title: "City Bus",
      text1: "Affordable fares for daily commuting.",
      text2: "Multiple stops along the route.",
      text3: "Eco-friendly and fuel-efficient travel.",
      link: "Get a City Bus",
      img: "images/bus.webp",
    },
    {
      title: "Metro And Transit",
      text1: "Fast and reliable long-distance travel.",
      text2: "Spacious seating with  facilities.",
      text3: "Fixed schedules for easy planning.",
      link: "Book a Metro ticket",
      img: "images/train.webp",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <h2 className="text-subheading text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-16 lg:mb-20 max-w-[50%]">
        Discover all modes of transport and chose the best for you
      </h2>
      <div className="grid w-full max-w-6xl grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {cards.map((item, i) => (
          <div
            key={i}
            className="card sm:col-span-1 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-start justify-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 sm:w-20 md:w-28 lg:w-32"
            />
            <h2 className="text-subheading text-sm sm:text-base md:text-2xl lg:text-3xl mb-2 md:mb-4">
              {item.title}
            </h2>
            <p className="text-body text-[8px] sm:text-xs md:text-lg lg:text-xl mb-0.5 md:mb-1 max-w-prose">
              {item.text1}
            </p>
            <p className="text-body text-[8px] sm:text-xs md:text-lg lg:text-xl mb-0.5 md:mb-1 max-w-prose">
              {item.text2}
            </p>
            <p className="text-body text-[8px] sm:text-xs md:text-lg lg:text-xl mb-1 md:mb-2 max-w-prose">
              {item.text3}
            </p>
            <a className="text-subheading hover:underline text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl cursor-pointer hover:text-primary hover:scale-102 transition-all md:mt-2">
              {item.link}{" "}
              <ArrowRightAltIcon
                className="text-secondary"
                sx={{ fontSize: { xs: 10, sm: 14, md: 20, lg: 24 } }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
