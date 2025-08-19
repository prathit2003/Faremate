import Button from "../ui/button";

const Cta = () => {
  return (
    <div className="flex items-center justify-between  rounded-xl card p-6 sm:p-8 md:p-10 lg:p-12 mb-6 sm:mb-8 md:mb-12 lg:mb-14 w-full">
      <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
        <h2 className="text-subheading heading text-xl sm:text-2xl md:text-4xl lg:text-5xl text-left">
          Plan Your Trip. Travel Smarter.
          <br /> Save Time.
        </h2>
        <p className="text-body text-base md:text-lg lg:text-xl xl:text-2xl text-left text-wrap">
          Find the fastest, cheapest, and most comfortable way to get around
          your city.
        </p>
        <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-6">
          <Button color="secondary" text="explore" icon="pin" />
          <Button color="primary" text="search" icon="search" />
        </div>
      </div>
      <img
        src="images/CTA.webp"
        alt="image showcasing world and pin locating live location"
        className="w-40 sm:w-50 md:w-60 lg:w-70 mb-2 md:mb-0"
      />
    </div>
  );
};
export default Cta;
