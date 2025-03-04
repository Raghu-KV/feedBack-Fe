import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";
function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" bg-blue-50 px-24 w-[700px] rounded-2xl py-14">
        <h1 className="font-bold text-3xl">Hi, Welcome !!</h1>
        <div>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={yup.object({
              username: yup.string().required("Username is required"),
              password: yup.string().required("Password is required"),
            })}
            onSubmit={(values, actions) => {
              console.log(values, "<--Value");
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className="flex flex-col text-gray-700 mt-6">
                  <label
                    htmlFor="chapterName"
                    className="font-semibold ml-1 mb-1"
                  >
                    Username *
                  </label>
                  <Field
                    type="string"
                    id="chapterName"
                    name="username"
                    className="border border-gray-400 px-2 py-3 rounded-xl w-full placeholder-slate-400 
                     focus:outline-none focus:border-appGreen focus:ring-1 focus:ring-appGreen"
                    placeholder="Username"
                  />
                  <ErrorMessage name="username">
                    {(errorMessage) => (
                      <p className="text-red-500 mr-1">{errorMessage}</p>
                    )}
                  </ErrorMessage>
                </div>

                <div className="flex flex-col text-gray-700 mt-6">
                  <label htmlFor="password" className="font-semibold ml-1 mb-1">
                    Password *
                  </label>
                  <Field
                    type="string"
                    id="password"
                    name="password"
                    className="border border-gray-400 px-2 py-3 rounded-xl w-full placeholder-slate-400 
                     focus:outline-none focus:border-appGreen focus:ring-1 focus:ring-appGreen"
                    placeholder="password"
                  />
                  <ErrorMessage name="password">
                    {(errorMessage) => (
                      <p className="text-red-500 mr-1">{errorMessage}</p>
                    )}
                  </ErrorMessage>
                </div>
                <button
                  className="cursor-pointer w-full bg-blue-500  mt-6 text-white px-2 py-3 rounded-xl hover:bg-blue-600 duration-200"
                  type="submit"
                  disabled={props.isSubmitting}
                >
                  {console.log(props.isSubmitting, "ddd")}
                  {props.isSubmitting ? "Loading..." : "Submit"}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
