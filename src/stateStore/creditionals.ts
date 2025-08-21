import { create } from "zustand";

interface CredentialsState {
  email: string;
  setEmail: (email: string) => void;

  password: string;
  setPassword: (password: string) => void;

  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;

  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;

  userId: string;
  setUserId: (userId: string) => void;

  userName: string;
  setUserName: (userName: string) => void;
}

const useCredentialsStore = create<CredentialsState>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),

  password: "",
  setPassword: (password) => set({ password }),

  confirmPassword: "",
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),

  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),

  userId: "",
  setUserId: (userId) => set({ userId }),

  userName: "",
  setUserName: (userName) => set({ userName }),
}));

export default useCredentialsStore;
