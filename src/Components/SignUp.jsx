import { useState } from "react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { BiSolidShow } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserSignupMutation } from "../ReduxToolkit/UserApi/authapi";
import { toast } from "react-toastify";
const SignUp = () => {
  const nav = useNavigate();
  const [userSignup, { isError, isLoading, err }] = useUserSignupMutation();
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [avatar, setAvatar] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullName: "",
      avatar: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is Required"),
      fullName: Yup.string().required("Required"),
      avatar: Yup.mixed().test(
        "fileSize",
        "File size is too large",
        (value) => {
          if (value) {
            const maxSize = 5242880; // 5MB
            return value.size <= maxSize;
          }
          return true;
        }
      ),
    }),
    onSubmit: async (values, action) => {
      try {
        const user = {
          email: values.email,
          password: values.password,
          fullName: values.fullName,
          // avatar: values.avatar,
        };
        const response = await userSignup(user).unwrap();
        console.log(response);
        toast.success("Successfully Registered ");
        nav("/login");
      } catch (error) {
        console.log(error);
        toast.error(error.data.message);
        action.resetForm();
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileEventChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    formik.setFieldValue("avatar", file);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100 p-9 ">
        <div className="w-full max-w-md">
          <div>
            <h1 className="text-center text-2xl font-bold mb-5 font-Roboto">
              Register a New Account
            </h1>
          </div>

          <form
            className="bg-white shadow-md rounded px-8 pt-9 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-600"
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your Full Name"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <div className="text-red-500">{formik.errors.fullName}</div>
              )}
            </div>
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
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email}</div>
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
                  type={showPassword ? "text" : "password"}
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
              {formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>

            <div className="items-center justify-between">
              <div>
                <label
                  htmlFor="file-input"
                  className="block text-sm font-medium text-gray-700"
                >
                  Avatar
                </label>
                <div className="mt-2 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className=" h-8 w-8 " />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border-gray-400 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50 font-medium border-2"
                  >
                    <span>Upload a File</span>
                    <input
                      type="file"
                      className="sr-only"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileEventChange}
                    />
                  </label>
                </div>
                {formik.touched.avatar && formik.errors.avatar && (
                  <div className="text-red-500">{formik.errors.avatar}</div>
                )}
              </div>
            </div>
            <div className="w-full">
              <button
                className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <div className="flex mt-4 ">
                <h1>Already have an account?</h1>
                <Link to="/login" className="ml-3 text-blue-800">
                  Sign In
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

export default SignUp;
