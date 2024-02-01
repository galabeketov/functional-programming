import { forwardRef, useImperativeHandle, useState } from "react";

const CustomInput = (props, ref) => {
  const [value, setValue] = useState("");
  useImperativeHandle(
    ref,
    () => {
      return {
        value,
      };
    },
    [value]
  );
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="text-input"
        {...props}
      />
    </>
  );
};

export const Input = forwardRef(CustomInput);
