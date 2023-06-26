import React from "react";

const LoginInput = ({ label, type }) => {
  return (
    <>
      <div className="flex flex-col mt-5">
        <label className="font-medium">{label}</label>
        <input
          type={type}
          className="mt-2 bg-[#eaeaea] rounded-lg py-2 outline-none px-3 font-medium text-black text-sm"
        />
      </div>
    </>
  );
};

export default LoginInput;
