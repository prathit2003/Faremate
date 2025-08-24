import { create } from "zustand";

interface LocationState {
  currentLocation: string;
  destination: string;
  setCurrentLocation: (location: string) => void;
  setDestination: (destination: string) => void;
}

const useLocationStore = create<LocationState>((set) => ({
  currentLocation: "",
  destination: "",
  setCurrentLocation: (location) => set({ currentLocation: location }),
  setDestination: (destination) => set({ destination }),
}));

export default useLocationStore;
