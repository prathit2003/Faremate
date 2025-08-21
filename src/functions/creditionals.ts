import creditionalsStore from "@/stateStore/creditionals";

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
  const { email, password, confirmPassword, userName } =
    creditionalsStore.getState();
};
