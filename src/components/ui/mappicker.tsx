import useLocationStore from "@/stateStore/locations";
import MyLocationIcon from "@mui/icons-material/MyLocation";
const MapPicker = ({ type }: { type: string }) => {
  const { currentLocation, destination } = useLocationStore();
  return (
    <div className="card flex items-center rounded-md md:rounded-xl w-fit px-1.5 py-1 md:px-4 md:py-2 text-base sm:text-lg md:text-xl lg:text-2xl text-secondary">
      {type === "current" ? (
        <span>{currentLocation === "" ? "My Location" : currentLocation}</span>
      ) : (
        <span>{destination === "" ? "Destination" : destination}</span>
      )}
      <MyLocationIcon
        className="text-secondary ml-2 md:ml-3"
        sx={{ fontSize: { xs: 8, sm: 12, md: 16, lg: 20 } }}
      />
    </div>
  );
};
export default MapPicker;
