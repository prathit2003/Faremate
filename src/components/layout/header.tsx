import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Header = () => {
  return (
    <>
      <div className="fixed top-2 left-0 right-0 z-50 card rounded-xl flex items-center justify-between py-1 px-2 md:py-2 md:px-4 mx-4 md:mx-6">
        <div className="flex items-center justify-center md:space-x-1 cursor-pointer">
          <MapOutlinedIcon
            className="text-secondary"
            sx={{ fontSize: { xs: 18, sm: 22, md: 28, lg: 32 } }}
          />
          <span className="text-subheading !font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Fare
          </span>
        </div>
        <div className="flex items-center justify-center space-x-1 md:space-x-2">
          <a
            href="/signup"
            className="text-subheading hover:underline text-[12px] sm:text-sm md:text-lg lg:text-xl hover:text-primary hover:scale-102 transition-all duration-300"
          >
            Signup
          </a>
          <span className="text-primary">|</span>
          <a
            href="/signin"
            className="text-subheading hover:underline text-[12px] sm:text-sm md:text-lg lg:text-xl  hover:text-primary hover:scale-102 transition-all duration-300"
          >
            Login{" "}
            <ArrowRightAltIcon
              className="text-secondary"
              sx={{ fontSize: { xs: 12, sm: 16, md: 24, lg: 28 } }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
