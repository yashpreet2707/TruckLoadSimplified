import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-1/2 mx-auto py-5">
      <div>

        <div>
          <h2 className="text-2xl font-semibold text-center mb-2">Log in</h2>
          <p className="text-center text-gray-600 mb-6">
            to continue to your DAT account
          </p>
        </div>

        <div className="w-2/3 mx-auto">
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="username" >Username/Email</label>
            <input type="text" id="username" placeholder="Username/Email *" className="w-full px-3 py-2 border border-red-500 text-black rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
            <p className="text-red-500 text-sm mt-1">Required field. Enter a valid email address.</p>
          </div>

          <div className="flex justify-between mb-4">
            <Link to="" className="text-sm text-blue-500 hover:underline">Forgot your username?</Link>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password *" className="w-full px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>

          <div className="flex justify-between mb-6">
            <Link to="" className="text-sm text-blue-500 hover:underline">Reset password</Link>
          </div>

          <button type="submit" className="w-full bg-gray-300 text-gray-500 cursor-not-allowed py-2 rounded-lg font-semibold">LOG IN</button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Need an account?{" "}
              <Link to="/sign-up"className="text-blue-500 font-semibold hover:underline">Create account</Link>
            </p>
          </div>
        </form>
        </div>

        <div className="text-center mt-6 text-gray-500 text-xs">
          <p>By continuing you agree to our <a href="#" className="text-blue-500 hover:underline">terms and conditions</a>.</p>
          <p className="mt-4">&copy; 2024 DAT Solutions, LLC. All rights reserved.</p>
          <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
        </div>


      </div>
    </div>
  );
};

export default LogIn;
