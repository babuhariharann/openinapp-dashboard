import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import { DiApple, FcGoogle } from "../assets/icons/index";
import { LoginInput } from "../components";
import { auth, provider } from "../auth/config.js";

const Login = ({ setIsLoggedIn }) => {
  // Navigation

  const navigate = useNavigate();

  // State for email

  const [email, setEmail] = useState("");

  // handle signin

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userEmail = result.user.email;
        localStorage.setItem("email", userEmail);
        setEmail(userEmail);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Use effect for local storage

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    setEmail(userEmail);
  }, []);

  return (
    <>
      {email ? (
        navigate("/")
      ) : (
        <div className="flex relative w-screen h-screen overflow-hidden ">
          {/* Name sidebar */}
          <div className="xl:w-[1000px] w-1/4 md:w-[500px] bg-black text-slate-100 h-full flex justify-center items-center transition-all duration-500">
            <h1 className="text-6xl font-bold -rotate-90 md:rotate-0 transition-all duration-500">
              Board.
            </h1>
          </div>

          {/* Sign in container */}
          <div className="flex items-center justify-center h-screen w-full bg-[#f5f5f5]">
            <div className="flex flex-col px-5">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <p className="text-md font-medium mt-1">Sign to your account</p>

              {/* Sign in with google and apple */}

              <div className="flex flex-col md:flex-row mt-5 gap-3">
                {/* Sign in with google */}

                <button
                  className="flex items-center bg-white px-3 gap-3 w-[200px] rounded-lg py-1 cursor-pointer"
                  onClick={handleSignIn}
                >
                  <FcGoogle className="text-lg" />
                  <h1 className="text-gray-400 font-medium text-sm">
                    Sign in with Google
                  </h1>
                </button>
                <button className="flex items-center bg-white px-3 gap-3 w-[200px] rounded-lg py-1 cursor-pointer">
                  <DiApple className="text-lg text-gray-500" />
                  <h1 className="text-gray-400 font-medium text-sm">
                    Sign in with Apple
                  </h1>
                </button>
              </div>

              {/* Input Box */}

              <div className="mt-8 px-8 py-8 bg-white rounded-3xl">
                {/* Inside container */}

                <div className="flex flex-col -mt-5 ">
                  <LoginInput label="Email" type="text" />
                  <LoginInput label="Password" type="password" />

                  <div className="mt-5">
                    <button className="text-[#346BD4] font-medium ">
                      Forget Password ?
                    </button>
                  </div>

                  <button className="mt-5 bg-black rounded-lg text-white py-2 font-medium ">
                    Sign In
                  </button>
                </div>
              </div>
              <p className="text-center mt-5 text-gray-500">
                Don't have an account ?
                <button className="text-[#346BD4] font-medium ml-1">
                  Register Here
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
