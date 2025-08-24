"use client";

import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/navigation";
import MapPicker from "@/components/ui/mappicker";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";
import TuneIcon from "@mui/icons-material/Tune";
const Dashboard = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* header */}
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center space-x-2 md:space-x-3 p-2.5 md:p-4">
          <div className="card rounded-md md:rounded-xl p-2 md:p-3 w-fit">
            <TuneIcon
              className="text-secondary"
              sx={{ fontSize: { xs: 18, sm: 22, md: 28, lg: 32 } }}
            />
          </div>
          <div className="card flex items-center justify-between rounded-md md:rounded-xl p-2 md:p-3 w-[95%]">
            <div className="flex items-center justify-center md:space-x-1 cursor-pointer">
              <MapOutlinedIcon
                className="text-secondary"
                sx={{ fontSize: { xs: 18, sm: 22, md: 28, lg: 32 } }}
              />
              <span className="text-subheading  text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Fare
              </span>
            </div>
            <button
              onClick={() => router.back()}
              className="flex items-center cursor-pointer hover:underline hover:scale-101 transition-all mr-2"
            >
              <KeyboardBackspaceIcon
                className="text-secondary mr-0.5 md:mr-1"
                sx={{ fontSize: { xs: 14, sm: 18, md: 20, lg: 24 } }}
              />
              <span className="text-secondary  text-sm sm:text-base md:text-lg lg:text-xl">
                back
              </span>
            </button>
          </div>
        </div>
        {/* main */}
        <div className="w-[70vw] md:w-[60vw] flex flex-col items-center ">
          <h1 className="text-subheading text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-center mb-4 md:mb-6 lg:mb-8">
            Enter Your Route. Get the Safest, Fastest, and Cheapest Way to Go.
          </h1>
          <div className="flex items-center justify-center space-x-1 md:space-x-2 mb-2 md:mb-3 lg:mb-4">
            <MapPicker type={"current"} />
            <MapPicker type={"destination"} />
            <Select
              options={["Fastest Route", "Cheapest Route", "Mixed Route"]}
              first="Fastest Route"
            />
          </div>
          <Button color="primary" text="search" icon="search" />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
