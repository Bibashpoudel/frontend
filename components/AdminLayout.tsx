import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";
import getSession from "../utils/getSession";
import { Logout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { signout } from "../redux/actions/user.action";
import { USER_SIGNOUT } from "../redux/constant/user.constants";
import getLocal from "../utils/getlocal";

export default function AdminLayout({
  title,
  description,
  children,
  loading,
}: any) {
  const [sidebar, setSideBar] = useState(true);
  const router = useRouter();
  const path = router.pathname.split("#");

  const local = getLocal();

  useEffect(() => {
    if (!local) {
      router.push("/admin/login");
    }
  }, [!local]);
  const dispatch = useDispatch();
  function logout(path: any) {
    if (path == "/admin/login") {
      dispatch(signout() as any);
      dispatch({
        type: USER_SIGNOUT,
      });
    }
    router.push(`${path}`);
  }

  return (
    <>
      <Head>
        <title>{title ? title + " - Pace Code" : "Pace Code"}</title>

        <meta
          content="Gurzu"
          name="author"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          content="enterprise solution, product development, develop software, apps developer, agile for software development, create software, software coding, companies software development, application software developers, custom-developed software, app developer software, custom software development companies, process development software, software developing companies, app build software, methodology software development, software outsourcing, custom software, engineering software development, app create software, building software, website software, agile methodologies for software development, software company, Node, nodejs, Nextjs, nextjs, nestjs, nest, react, reactjs, reactnative, flutter, iOS development, android development,   python, django framework, django, restAPI, RESTAPI, restapi, nodejs, vue js, typescript,  digital signage, display network, building your own website, digital experience, customer software management, javascript, outsourcing business, team augmentation, pace code, pace, code, pacecode"
          name="keywords"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          name="description"
          content={description ? description : ""}
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          httpEquiv="x-ua-compatible"
          content="ie=edge"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          httpEquiv="Cache-control"
          content="private"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          style={{ userSelect: "text" }}
        ></meta>

        <link rel="icon" href="/images/logo.png" type="image/x-icon"></link>
      </Head>
      {loading && (
        <div className="c-loading h-full overflow-hidden w-full bg-gray-100 opacity-95  flex items-center justify-center">
          <span className="opacity-100 text-black"> loading..</span>
        </div>
      )}
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex ">
          <nav
            className={"shadow-md  admin-sidebar w-96  max-sm:w-16"}
            style={
              sidebar ? { height: "100vh" } : { height: "100vh", width: "4rem" }
            }
          >
            <div className="flex justify-center">
              <Image
                src={"/images/logo.png"}
                width={100}
                height={100}
                alt="logo"
              />{" "}
            </div>
            <div className="">
              <ul>
                {
                  [
                    {
                      name: "Dashboard",
                      path: "/admin",
                    },
                    {
                      name: " User",
                      path: "/admin/users",
                    },
                    {
                      name: "Inquire",
                      path: "/admin/inquire",
                    },
                    {
                      name: "settings ",
                      path: "/admin/settings",
                    },
                    {
                      name: "blog",
                      path: "/admin/blog",
                    },
                    {
                      name: "Jobs",
                      path: "/admin/add-jobs",
                    },
                    {
                      name: "Applied Job",
                      path: "/admin/applied-jobs",
                    },
                    {
                      name: "Log out ",
                      path: "/admin/login",
                    },
                  ].map((a: any, index: any) => (
                    <>
                      {sidebar ? (
                        <li
                          className={
                            router.pathname == `${a.path}`
                              ? "pl-10 p-2 bg-primary cursor-pointer max-sm:hidden"
                              : "pl-10 p-2 cursor-pointer max-sm:hidden"
                          }
                          key={index}
                          onClick={() => logout(a.path)}
                        >
                          {a.name}
                        </li>
                      ) : (
                        <li key={index} className="text-red-500"></li>
                      )}
                    </>
                  )) as any
                }
              </ul>
            </div>
          </nav>
          <div className="flex flex-col w-full">
            <header className="flex w-full h-12 bg-white shadow-md items-center">
              <div className=" ">
                {sidebar ? (
                  <div onClick={() => setSideBar(false)}>hide bar</div>
                ) : (
                  <div onClick={() => setSideBar(true)}>show bar</div>
                )}
              </div>
            </header>
            <main className="p-4 overflow-y-scroll" style={{ height: "93vh" }}>
              {" "}
              {children}
            </main>
          </div>
        </div>
        <footer>
          <div className=" flex h-10  justify-center items-center shadow-inner">
            <div>Copyright &#169; 2022 Pace Code</div>
          </div>
        </footer>
      </div>
    </>
  );
}
