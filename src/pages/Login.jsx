// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// function Login() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   console.log(JSON.parse(localStorage.getItem("isLoggedIn")));
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = JSON.parse(localStorage.getItem("userData"));
//     if (data.email && email !== data.email) {
//       setEmailError("Please enter the valid email");
//       return;
//     }
//     setEmailError("");
//     if (data.name && name !== data.name) {
//       setNameError("Please enter the valid name");
//       return;
//     }
//     setEmailError("");
//     if (data.password && password !== data.password) {
//       setPasswordError("please enter the valid password");
//       return;
//     }
//     setPasswordError("");
//    localStorage.setItem("userData", JSON.stringify(data));

//     setEmail("");
//     setName("");
//     setPassword("");

//     navigate("/");
// window.location.reload();
//   };

//   return (
//     <div className="container mx-auto min-h-screen bg-gray-50 px-4 py-12 sm:px-6">
//       <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Welcome Back! Please Log In to Your Account
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Name
//             </label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               id="name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your name"
//             />
//             {nameError && (
//               <p className="mt-1 text-sm text-red-500">{nameError}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//             {emailError && (
//               <p className="mt-1 text-sm text-red-500">{emailError}</p>
//             )}
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Password
//             </label>

//             <div className="relative">
//               <input
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <i className="fa-regular fa-eye"></i>
//                 ) : (
//                   <i className="fa-regular fa-eye-slash"></i>
//                 )}
//               </button>
//               {passwordError && (
//                 <p className="mt-1 text-sm text-red-500">{passwordError}</p>
//               )}
//             </div>
//           </div>

//           <div className="mb-4 text-right"></div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Log In
//           </button>
//           <p className="mt-4 text-center text-gray-600">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-blue-500 hover:underline">
//               Sign up
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear old errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    // Get registered user
    const storedUser = localStorage.getItem("userData");

    if (!storedUser) {
      setLoginError("No account found. Please sign up first.");
      return;
    }

    const userData = JSON.parse(storedUser);

    // Name validation
    if (name.trim() !== userData.name) {
      setNameError("Please enter the correct name");
      return;
    }

    // Email validation
    if (email.trim() !== userData.email) {
      setEmailError("Please enter the correct email");
      return;
    }

    // Password validation
    if (password !== userData.password) {
      setPasswordError("Please enter the correct password");
      return;
    }

    // Login successful
    localStorage.setItem("isLoggedIn", "true");

    // Go to main website
    navigate("/");
  };

  return (
    <div className="container mx-auto min-h-screen bg-gray-50 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome Back!
        </h2>

        {loginError && (
          <p className="mb-4 rounded-md bg-red-50 p-3 text-center text-sm text-red-500">
            {loginError}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-gray-700"
            >
              Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {nameError && (
              <p className="mt-1 text-sm text-red-500">{nameError}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-700"
            >
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {emailError && (
              <p className="mt-1 text-sm text-red-500">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-gray-300 px-4 py-2 pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>

            {passwordError && (
              <p className="mt-1 text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Log In
          </button>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;