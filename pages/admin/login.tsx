import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Signin } from "../../redux/actions/user.action";
import { RootState } from "../../utils/store";
import { useCookies } from "react-cookie";
import { Router } from "@mui/icons-material";
import { useRouter } from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import getLocal from "../../utils/getlocal";

export default function Login() {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm();

  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { loading, error, userInfo }: any = userSignin;
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const [cookie, setCookie] = useCookies();

  const router = useRouter();
  const local = getLocal();

  const login = ({ email, password }: any) => {
    dispatch(Signin(email, password) as any);
  };
  useEffect(() => {
    if (local) {
      router.push("/admin");
    }
  }, [local]);

  return (
    <div>
      <div className="container m-auto   min-h-screen ">
        <div className="flex  flex-col justify-center mt-16  items-center">
          <div className="flex justify-center">
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              alt="logo"
            ></Image>
          </div>
          {loading && <div></div>}
          {error && (
            <div className="flex items-center justify-center p-2 shadow text-red-500">
              {error}
            </div>
          )}
          <form
            onSubmit={handleSubmit(login)}
            className="w-1/2 max-sm:w-full max-md:w-3/4 "
          >
            <div className="mb-4">
              <div>Email</div>
              <input
                type="email"
                {...register("email", {
                  required: "Please enter your email",
                })}
                placeholder="Enter your email"
                autoComplete="off"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        text-black
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />

              {errors.email && (
                <div className="text-red-500">
                  {(errors.title as any).message}
                </div>
              )}
            </div>
            <div className="mb-4 relative">
              <div>Password</div>
              <input
                type={isVisible ? "text" : "password"}
                {...register("password", {
                  required: "Please enter your password",
                })}
                placeholder="Enter your password"
                autoComplete="off"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        text-black
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
              />
              {isVisible ? (
                <VisibilityOffIcon
                  className="absolute cursor-pointer"
                  style={{ top: "50%", left: "90%" }}
                  onClick={() => setIsVisible(false)}
                ></VisibilityOffIcon>
              ) : (
                <VisibilityIcon
                  className="absolute cursor-pointer"
                  style={{ top: "50%", left: "90%" }}
                  onClick={() => setIsVisible(true)}
                ></VisibilityIcon>
              )}

              {errors.password && (
                <div className="text-red-500">
                  {(errors.password as any).message}
                </div>
              )}
            </div>
            <div className="mb-10">
              <input
                type="submit"
                value="Add"
                className="
                                  w-full
                                  rounded-md
                                  border
                                  py-3
                                  button-primary
                                  text-base 
                                  cursor-pointer
                                  transition
                        "
              />
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div className=" flex h-10  justify-center items-center shadow-inner">
          <div>Copyright &#169; 2022 Pace Code</div>
        </div>
      </footer>
    </div>
  );
}
