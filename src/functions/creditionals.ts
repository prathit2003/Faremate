import creditionalsStore from "@/stateStore/creditionals";
import axios from "axios";
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
    case "userName":
      setUserName(value);
      break;
    default:
      break;
  }
};

export const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const { email, password } = creditionalsStore.getState();
};

export const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const { email, password, confirmPassword, userName } =
    creditionalsStore.getState();
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  const signup = async () => {
    const response = await axios.post("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, userName, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      return;
    }
  };
};
