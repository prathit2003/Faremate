import SearchIcon from "@mui/icons-material/Search";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
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
        <button className="bg-primary text-white px-1.5 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl flex items-center cursor-pointer hover:scale-102 hover:bg-secondary transition-all duration-300 w-fit">
          <SearchIcon
            className="mr-1 md:mr-2"
            sx={{ fontSize: { xs: 10, sm: 25, md: 25, lg: 30 } }}
          />

          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl md:-mt-1 mr-1 md:mr-0">
            {text}
          </p>
        </button>
      )}

      {color === "secondary" && icon !== "" && (
        <button
          className={`card  py-1  md:py-1.5 px-2 md:px-4 rounded-lg md:rounded-xl flex items-center justify-center cursor-pointer hover:scale-102 hover:bg-secondary transition-all duration-300 ${
            icon === "pin" ? "w-fit" : "w-full"
          }`}
        >
          {icon === "pin" && (
            <LocationPinIcon
              className="mr-1 md:mr-2"
              sx={{ fontSize: { xs: 12, sm: 25, md: 25, lg: 30 } }}
            />
          )}
          {icon === "google" && (
            <GoogleIcon
              className="mr-1 md:mr-2"
              sx={{ fontSize: { xs: 10, sm: 15, md: 20, lg: 25 } }}
            />
          )}
          {icon === "github" && (
            <GitHubIcon
              className="mr-1 md:mr-2"
              sx={{ fontSize: { xs: 10, sm: 15, md: 20, lg: 25 } }}
            />
          )}
          <p className="text-xs md:text-sm lg:text-base">{text}</p>
        </button>
      )}
    </>
  );
};

export default Button;
