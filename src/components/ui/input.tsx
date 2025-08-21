import { handleOnchange } from "@/functions/creditionals";

const Input = ({
  type,
  labal,
  placeholder,
  id,
}: {
  type: string;
  labal: string;
  placeholder: string;
  id: string;
}) => {
  return (
    <>
      {labal !== "" && (
        <label className="text-xs sm:text-sm md:text-base lg:text-lg   text-subheading mb-0 md:mb-1">
          {labal}
        </label>
      )}
      <input
        id={id}
        type={type}
        required={true}
        className="card w-full text-[10px] sm:text-xs md:text-sm lg:text-base  py-1 md:py-2 pl-2 rounded-lg md:rounded-xl text-subheading outline-none focus:border focus:border-secondary transition-all duration-300"
        placeholder={placeholder}
        onChange={(e) => handleOnchange(e, id)}
      />
    </>
  );
};

export default Input;
