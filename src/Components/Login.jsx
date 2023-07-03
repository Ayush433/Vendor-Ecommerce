import { useState } from "react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { BiSolidShow } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: async (values, action) => {
      console.log(values); // Log form values to the console
      action.resetForm();
    },
  });

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100 p-9 ">
        <div className="w-full max-w-md">
          <div>
            <h1 className="text-center text-2xl font-bold mb-5 font-Roboto">
              Login To your account{" "}
            </h1>
          </div>

          <form
            className="bg-white shadow-md rounded px-8 pt-9 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <h1 className="text-pink-700">{formik.errors.email}</h1>
              ) : (
                ""
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"} // Toggle input type
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <span
                  className="absolute right-0 top-0 mt-3 mr-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <BiSolidShow size={20} />
                  ) : (
                    <AiFillEyeInvisible size={22} />
                  )}
                </span>
              </div>
              {formik.errors.password ? (
                <h1 className="text-red-700">{formik.errors.password} </h1>
              ) : (
                ""
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="">
                <label>Remember Me</label>
                <input type="checkbox" className="ml-3" />
              </div>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/forgot-password"
              >
                Forgot Password?
              </a>
            </div>
            <div className="w-full">
              <button
                className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <div className="flex mt-4 ">
                <h1>Not have any account ?</h1>
                <Link to="/signUp" className="ml-3 text-blue-800">
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="mt-7">
              <p className="text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} My App. All rights reserved.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
