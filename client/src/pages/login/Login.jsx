import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-blue-500">
        <h1 className="text-3xl text-center font-semibold text-gray-300">
          Login <span className="text-sky-200">BtChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <button className="btn btn-sm btn-block mt-2 bg-sky-500 hover:bg-blue-600 text-white border-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
