import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import slideImage from "../utils/imageslider";
import Footer from "./footer";
import SideBar from "./SideMenu";
import Slider from "./Slider";
import { NextSeo } from "next-seo";

import { WhatsApp, Telegram } from "@mui/icons-material";

export default function Layout({
  title,
  children,
  description,
  ogTitle,
  image,
  shortDesc,
  loading,
}: any) {
  const [open, setOpen] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const router = useRouter();

  const dragRef: any = useRef(null);

  const isClicked = useRef<boolean>(false);

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    // const drag = dragRef.current;
    // const onMouseDown = () => {
    //   isClicked.current = true;
    // };

    // const onMouseup = () => {
    //   isClicked.current = false;
    // };

    // const mouseMove = (e: MouseEvent) => {
    //   if (!isClicked.current) return;

    //   drag.style.top = `${e.clientY}px`;
    //   drag.style.left = `${e.clientX}px`;
    // };
    // drag?.addEventListener("mousedown", onMouseDown);
    // drag?.addEventListener("mouseup", onMouseup);
    // drag?.addEventListener("mousemove", mouseMove);

    // const clean = () => {
    //   drag?.removeEventListener("mousedown", onMouseDown);
    //   drag?.removeEventListener("mouseup", onMouseup);
    //   drag?.removeEventListener("mousemove", mouseMove);
    //   console.log("clean");
    // };

    const navbar: any = document.getElementById("top-nav");

    const btnNav: any = document.getElementById("c-nav");

    window.onscroll = function () {
      let scrollTop = window.pageYOffset;
      if (lastScroll > scrollTop) {
        navbar.style.top = "0px";
        btnNav.style.marginTop = "";
      } else {
        navbar.style.top = "-1.5rem";
      }
      lastScroll = scrollTop;
    };

    // return clean;
  }, []);

  const nav = [
    {
      path: "/",
      title: "Home",
    },
    // {
    //   path: "/our-services",
    //   title: "Our Service",
    // },
    // {
    //   path: "/about-us",
    //   title: "About Us",
    // },
    {
      path: "/careers",
      title: "Careers",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ];

  return (
    <>
      <Head>
        <title>{title ? title : "Pace Code"}</title>
        <meta name="msvalidate.01" content="C43EC445421B3EB12F4F4699ACFC8609" />
        <meta property="og:title" content={ogTitle ? ogTitle : "Pace Code"} />
        <meta
          content="Pace Code"
          name="author"
          style={{ userSelect: "text" }}
        ></meta>
        <meta
          content="enterprise solution, product development, develop software, apps developer, agile for software development, create software, software coding, companies software development, application software developers, custom-developed software, app developer software, custom software development companies, process development software, software developing companies, app build software, methodology software development, software outsourcing, offshore, pwa, custom software, cybersecurity, cyber security, cyber, security, engineering software development, app create software, building software, website software, agile methodologies for software development, software company, Node, nodejs, Nextjs, nextjs, nestjs, nest, react, reactjs, reactnative, flutter, iOS development, android development,   python, django framework, django, restAPI, RESTAPI, restapi, nodejs, vue js, typescript,  digital signage, display network, building your own website, digital experience, customer software management, javascript, outsourcing business, team augmentation, pace code, pace, code, pacecode, gamedevelopment, game development, game, wordpress, wordpress development, wordpress design, phaser, threejs, three js, 2d game development, 2d, 2d game, 3d game development, 3d, 3d game"
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
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content={`default-src 'self'; img-src https://*; child-src 'none';`}
        /> */}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          style={{ userSelect: "text" }}
        ></meta>

        <link rel="icon" href="/header.png" type="image/x-icon"></link>

        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}
        h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HJID},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </Head>
      {loading && (
        <>
          <section className="bg-gray-200 relative place-items-center grid h-screen w-screen gap-4">
            <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

            <Image
              src="/header.png"
              style={{ height: "2rem" }}
              height={100}
              width={100}
              alt="Loading..."
            ></Image>
          </section>
        </>
      )}

      <div>
        <div className="flex  min-h-screen flex-col justify-between">
          <header className="sticky top-0 z-50 bg-white shadow-md text-white">
            <div
              id="top-nav"
              className="top-nav flex pbg-color "
              style={{ height: "1.5rem" }}
            >
              <div className="pr-4 pl-4 c-icon">
                {" "}
                <Link target="_blank" href="https://wa.me/9779748307013">
                  <WhatsApp
                    style={{ height: "1rem", color: "#25D366" }}
                  ></WhatsApp>
                </Link>
              </div>
              <div className="pr-4 pl-4 c-icon">
                {" "}
                <Link target="_blank" href="https://t.me/pacecode">
                  <Telegram
                    style={{ height: "1rem", color: "#fff" }}
                  ></Telegram>
                </Link>
              </div>
              {/* <div className="pr-4 pl-4">
                {" "}
                <Link target="_blank" href="">
                  wechat
                </Link>
              </div> */}
            </div>
            <nav
              id="c-nav"
              className=" container pl-2 pr-2  m-auto flex h-14 items-center justify-between px-1 "
            >
              <div className="flex flex-start text-black items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 hidden max-md:block"
                  onClick={() => setOpen(true)}
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link href="/">
                  <Image
                    alt={"Pace Code"}
                    src="/images/logo.png"
                    style={{ width: "7rem ", height: "3.5rem" }}
                    width={100}
                    height={100}
                  />
                </Link>
              </div>

              <div className="flex">
                <div className="flex max-md:hidden">
                  {nav.map((item: any, id: any) => (
                    <div
                      className="pt-4 pl-2 pr-2 pb-4 text-black font-bold text-md "
                      key={id}
                    >
                      <Link
                        href={item.path}
                        className={
                          router.pathname == `${item.path}` ? "c-active" : ""
                        }
                      >
                        {item.title.charAt(0).toUpperCase() +
                          item.title.slice(1)}
                      </Link>
                    </div>
                  ))}
                </div>
                {/* <div className="md:pt-4 ">
                <Link
                  target="_blank"
                  href="https://calendly.com/pacecode/30min"
                >
                  <span className="p-3 button-primary">Lets talk</span>
                </Link>
              </div> */}
                <div className="md:pt-4">
                  <Link href="/contact-us">
                    <span className="button-primary p-3 ml-2"> Contact Us</span>
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <SideBar
            open={open}
            setOpen={setOpen}
            setopenModal={setopenModal}
            item={nav}
          ></SideBar>
          {image && (
            <Carousel>
              {slideImage.map((item: any, id: any) => (
                <Slider
                  image={item}
                  key={id}
                  customImg={image ? image : null}
                  shortDesc={shortDesc}
                ></Slider>
              ))}
            </Carousel>
          )}

          <main className="">
            <div
              className="container "
              style={{
                position: "fixed",
                zIndex: "100",
                display: "flex",
                justifyContent: "end",
                right: 1,
              }}
              ref={dragRef}
            >
              {/* <Link href="/contact-us">
                <span className="button-primary p-3 ml-2"> Contact Us</span>
              </Link> */}
            </div>
            {children}
          </main>
          <footer>
            <div className=" bg-gray-200 text-black shadow-inner h-auto ">
              <div className="container pl-2 pr-2  m-auto flex justify-between px-1">
                <Footer nav={nav}></Footer>
              </div>
            </div>
            <div className=" flex h-10  justify-center items-center shadow-inner px-1">
              <div>Copyright &#169; 2023 Pace Code</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
