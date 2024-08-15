import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  //   const handleCheckboxChange = (gender) => {
  //     setInputs(...inputs, gender);
  //   };
  const handleCheckboxChange = (gender) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      gender: gender,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-500">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Signup <span className="text-sky-200">BtChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2 text-white">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* Gender check-box */}
          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          to{" "}
          <button className="btn btn-sm btn-block mt-2 bg-blue-700 hover:bg-blue-800 text-white border-none">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
