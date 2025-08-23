import creditionalsStore from "@/stateStore/creditionals";
import axios from "axios";
import { signIn } from "next-auth/react";
export const handleOnchange = (
  e: React.ChangeEvent<HTMLInputElement>,
  id: string
) => {
  const { setConfirmPassword, setEmail, setPassword, setUserName } =
    creditionalsStore.getState();
  if (!id) return;
  const { value } = e.target;

  switch (id) {
    case "email":
      setEmail(value);
      break;
    case "password":
      setPassword(value);
      break;
    case "confirmPassword":
      setConfirmPassword(value);
      break;
    case "username":
      setUserName(value);
      break;
    default:
      break;
  }
};

export const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const { email, password } = creditionalsStore.getState();
  const result = await signIn("credentials", {
    redirect: true,
    email,
    password,
    callbackUrl: "/dashboard",
  });
  if (result?.status !== 200) {
    alert("Invalid credentials");
    return;
  }
};

export const handleSignup = async (e: React.MouseEvent) => {
  const { email, password, confirmPassword, userName } =
    creditionalsStore.getState();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    // Call your signup API
    const response = await axios.post("/api/signup", {
      email,
      username: userName,
      password,
    });

    if (response.status === 200) {
      await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: "/dashboard",
      });
    }
  } catch (error: any) {
    console.error("Signup failed:", error);
    alert(error.response?.data?.error || "Signup failed");
  }
};
