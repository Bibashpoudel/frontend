import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import Experties from "../../components/components/Experties";
import Privacy from "../../components/components/Privacy";
import Service from "../../components/components/Service";
import Terms from "../../components/components/Terms";
import Testo from "../../components/components/Testo";
import Whywe from "../../components/components/Whywe";

export default function Settings() {
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);
  const [testo, setTesto] = useState(false);
  const [experties, setExperties] = useState(false);
  const [service, setService] = useState(false);
  const [we, setWe] = useState(false);
  const [menu, setMenu] = useState(true);
  const router = useRouter();
  let path = router.asPath.split("#");
  console.log("path", path[1]);

  if (path[1] == undefined) {
    console.log("bibash");
    path[1] = "";
  }

  const items: any = [
    { name: "Privacy & Policy", path: "" },
    { name: "Terms & Conditions", path: "terms&condition" },
    { name: "Testonominial", path: "testonominial" },
    { name: "Our Experties", path: "our-experties" },
    { name: "Our Service", path: "our-service" },
    { name: "Why We", path: "why-we" },
  ];

  return (
    <AdminLayout>
      <div className="container m-auto">
        <div className="sm:hidden">
          {menu ? (
            <div
              className="cursor-pointer cursor-pointer text-xl font-bold"
              onClick={() => setMenu(false)}
              style={{ color: "#0279b1" }}
            >
              X
            </div>
          ) : (
            <div
              className="cursor-pointer text-2xl font-bold animate-bounce"
              onClick={() => setMenu(true)}
              style={{ color: "#0279b1" }}
            >
              +
            </div>
          )}
        </div>

        {menu && (
          <div className="flex flex-wrap">
            {items.map((a: any, index: any) => (
              <div
                key={index}
                className={
                  path[1] != a.path
                    ? "p-2 cursor-pointer flex"
                    : "p-2 bg-primary cursor-pointer"
                }
                onClick={() => {
                  router.push(`#${items[index].path}`);
                }}
              >
                {a.name}
              </div>
            ))}
          </div>
        )}
        {path[1] == "" && <Privacy></Privacy>}
        {path[1] == "terms&condition" && <Terms></Terms>}
        {path[1] == "testonominial" && <Testo></Testo>}
        {path[1] == "our-experties" && <Experties></Experties>}
        {path[1] == "our-service" && <Service></Service>}
        {path[1] == "why-we" && <Whywe></Whywe>}
      </div>
    </AdminLayout>
  );
}
