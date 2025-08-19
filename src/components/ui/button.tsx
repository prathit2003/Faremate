import SearchIcon from "@mui/icons-material/Search";
import LocationPinIcon from "@mui/icons-material/LocationPin";
const Button = ({
  color,
  text,
  icon,
}: {
  color: string;
  text: string;
  icon: string;
}) => {
  return (
    <>
      {color === "primary" && icon === "search" && (
        <button className="bg-primary text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-3 rounded-lg md:rounded-xl flex items-center cursor-pointer hover:   scale-102 hover:bg-secondary transition-all duration-300">
          <SearchIcon
            className="mr-1 md:mr-2"
            sx={{ fontSize: { xs: 16, sm: 20, md: 28, lg: 36 } }}
          />

          <p className="text-xs md:text-sm lg:text-lg xl:text-xl md:-mt-1 mr-1 md:mr-0">
            {text}
          </p>
        </button>
      )}

      {color === "secondary" && icon === "pin" && (
        <button className="card px-2 py-1 sm:px-3 sm:py-1.5 md:px-6 md:py-3 rounded-lg md:rounded-xl flex items-center cursor-pointer hover:   scale-102 hover:bg-secondary transition-all duration-300">
          <LocationPinIcon
            className="mr-1 md:mr-2"
            sx={{ fontSize: { xs: 16, sm: 20, md: 28, lg: 36 } }}
          />
          <p className="text-xs md:text-sm lg:text-lg xl:text-xl md:-mt-1 mr-1 md:mr-0">
            {text}
          </p>
        </button>
      )}
    </>
  );
};

export default Button;
