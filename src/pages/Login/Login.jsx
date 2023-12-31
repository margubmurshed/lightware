/** @format */

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { logIn } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password).then((result) => {
      navigate(from, { replace: true });
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };
  return (
    <div className=" mb-16 mt-40  ">
      <h1 className="font-medium text-4xl text-[#181b23] mt-5 mb-3 ml-24">
        Account
      </h1>
      <div className="  flex gap-8 justify-center items-start mb-16">
        <div className="w-2/5  border pl-6 rounded-sm ">
          <h1 className="font-medium text-2xl text-[#181b23] mt-10 mb-2">
            New Customer
          </h1>
          <p className="font-bold text-xs mb-2 text-[#5a6069]">
            Register Account
          </p>
          <p className="text-[#5a6069] mb-6 ">
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <button className="btn py-4 mb-6 bg-black text-white hover:bg-[#994a47] text-xs px-[30px] rounded-[30px] ">
            <Link to="/register">continue</Link>
          </button>
        </div>
        <div className="w-2/5 pl-6  border mb-4  rounded-sm">
          <div>
            <h1 className="font-medium text-2xl text-[#181b23] mt-10 mb-2">
              Returning Customer
            </h1>
            <p className="font-bold text-xs mb-2 text-[#5a6069]">
              I am a returning customer
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-11/12 mb-3">
              <label className="text-[#5a6069]">Email</label>
              <br />
              <input
                className="border w-full pl-3 py-1 mt-1 rounded-md "
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className=" w-11/12 mb-3 ">
              <label className="text-[#5a6069]">Password</label>
              <br />
              <input
                className="border w-full pl-3 py-1 mt-1 rounded-md hover:border-[#cbcccd]"
                name="password"
                placeholder="Password"
                {...register("password", { register: true })}
              />
              <span className="text-[#5a6069]">Forgot your password?</span>
            </div>
            <div className="mb-6">
              <button
                className="btn py-4  bg-black text-white hover:bg-[#994a47] text-xs px-[30px] rounded-[30px] "
                type="submit"
              >
                sign in
              </button>
              <sup className=" ">
                <span className="text-[#5a6069]"> or</span>

                <Link className="text-[#994a47]  ml-1">Return to Store</Link>
              </sup>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
