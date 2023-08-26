"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  let [FormObj, setFormObj] = useState({
    fname: "",
    email: "",
    website: "",
    message: "",
  });
  const inputOnChange = (property, value) => {
    setFormObj((preObj) => ({
      ...preObj,
      [property]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!FormObj.email) {
      toast("Please Fill the Form");
      return;
    } else {
      toast("Your Message Have Sent successfully");
      console.log(FormObj);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <div className="h-96 w-full">
        <div className="w-full flex items-center justify-center my-12">
          <div className="absolute top-24 bg-white shadow rounded py-12 lg:px-28 px-8 dark:bg-gray-300">
            <form onSubmit={formSubmit}>
              <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Contact Page
              </p>
              <div className="md:flex items-center mt-12">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Full Name
                  </label>
                  <input
                    value={FormObj.fname}
                    onChange={(e) => {
                      inputOnChange("fname", e.target.value);
                    }}
                    tabIndex={0}
                    arial-label="Please input name"
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input  name"
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Email Address
                  </label>
                  <input
                    value={FormObj.email}
                    onChange={(e) => {
                      inputOnChange("email", e.target.value);
                    }}
                    tabIndex={0}
                    arial-label="Please input email address"
                    type="email"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    placeholder="Please input email address"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-8">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Website
                  </label>
                  <input
                    value={FormObj.website}
                    onChange={(e) => {
                      inputOnChange("website", e.target.value);
                    }}
                    tabIndex={0}
                    role="input"
                    arial-label="Please input company name"
                    type="url"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                    placeholder="Please input company name"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Message
                  </label>
                  <textarea
                    value={FormObj.message}
                    onChange={(e) => {
                      inputOnChange("message", e.target.value);
                    }}
                    tabIndex={0}
                    aria-label="leave a message"
                    role="textbox"
                    className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
