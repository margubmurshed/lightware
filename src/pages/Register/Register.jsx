/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaUserAlt } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="mt-36">
        <div className="w-4/5 mx-auto mb-2">
          <h1 className="text-[#181b23] text-lg">Your Personal Details</h1>
          <div className="divider h-px bg-slate-200"></div>
        </div>
      </div>
      <form className="w-4/5  mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 items-center   justify-end  my-2">
          <p className="text-[#5a6069]">
            {" "}
            <span className="text-red-600">*</span>First Name
          </p>
          <input
            className="border  basis-4/5 pl-3 py-1 mt-1  rounded-md "
            name="first-name"
            placeholder="First Name"
            {...register("first-name")}
          />
        </div>
        <div className="flex gap-5 items-center justify-end my-2">
          <p className="text-[#5a6069]  ">
            {" "}
            <span className="text-red-600">*</span>Last Name
          </p>
          <input
            className="border basis-4/5  pl-3 py-1 mt-1  rounded-md "
            name="last-name"
            placeholder="Last Name"
            {...register("last-name")}
          />
        </div>
        <div className="flex gap-5 items-center justify-end my-2">
          <p className="text-[#5a6069]  ">
            {" "}
            <span className="text-red-600">*</span>Email
          </p>
          <input
            className="border basis-4/5  pl-3 py-1 mt-1  rounded-md "
            name="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="flex  gap-5 items-center justify-end my-2">
          <p className="text-[#5a6069]  ">
            {" "}
            <span className="text-red-600">*</span>Password
          </p>
          <input
            className="border basis-4/5  pl-3 py-1 mt-1  rounded-md "
            name="password"
            placeholder="password"
            {...register("password")}
          />
        </div>

        <div className=" mb-20">
          <button
            className="btn py-4 uppercase bg-black text-white hover:bg-[#994a47] text-xs px-[30px] rounded-[30px] "
            type="submit"
          >
            <FaUserAlt className="inline "></FaUserAlt> create
          </button>
          <p className="inline ml-5">or Return to Store</p>
        </div>
      </form>
    </div>
  );
};

export default Register;
