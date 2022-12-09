import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

export default function Settings() {
  const [privacy, setPrivacy] = useState(true);
  const [terms, setTerms] = useState(false);
  const [testo, setTesto] = useState(false);
  const [experties, setExperties] = useState(false);
  const [service, setService] = useState(false);
  const [we, setWe] = useState(false);
  const router = useRouter();
  const path = router.asPath.split("#");
  //
  console.log(path.length, path[1]);
  //   useEffect(() => {
  //     router.push("/admin/settings#privacy&policy");
  //   });
  const items: any = [
    { name: "Privacy & Policy", path: "" },
    { name: "Terms & Conditions", path: "terms&condition" },
  ];
  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between">
          {items.map((a: any, index: any) => (
            <div
              key={index}
              className={
                (path.length == 2 ? path[1] == `${a.path} ` : true)
                  ? "p-1 bg-primary cursor-pointer"
                  : "p-1 cursor-pointer"
              }
              onClick={() => {
                console.log(path.length == 2 ? path[1] == `${a.path} ` : true);
                router.push(`#${items[index].path}`);
              }}
            >
              {a.name}
            </div>
          ))}
          <div
            className={privacy ? "p-1 bg-primary" : "p-1"}
            onClick={() => {
              setPrivacy(true);
              setTerms(false);
              setTesto(false);
              setExperties(false);
              setService(false);
              setWe(false);
            }}
          >
            {" "}
            Privacy & Policy
          </div>
          <div
            className={terms ? "p-1 bg-primary" : "p-1"}
            onClick={() => {
              setPrivacy(false);
              setTerms(true);
              setTesto(false);
              setExperties(false);
              setService(false);
              setWe(false);
            }}
          >
            {" "}
            Terms & Conditions
          </div>
          <div
            className={testo ? "p-1 bg-primary" : "p-1"}
            onClick={() => {
              setPrivacy(false);
              setTerms(false);
              setTesto(true);
              setExperties(false);
              setService(false);
              setWe(false);
            }}
          >
            {" "}
            Testonominial
          </div>
          <div
            className={experties ? "p-1 bg-primary" : "p-1"}
            onClick={() => {
              setPrivacy(false);
              setTerms(false);
              setTesto(false);
              setExperties(true);
              setService(false);
              setWe(false);
            }}
          >
            {" "}
            Our Experties
          </div>
          <div
            className={service ? "p-1 bg-primary" : "p-1"}
            onClick={() => {
              setPrivacy(false);
              setTerms(false);
              setTesto(false);
              setExperties(false);
              setService(true);
              setWe(false);
            }}
          >
            {" "}
            Our service
          </div>
          <div
            className={we ? "p-1 bg-primary" : "p-1"}
            onClick={() => {
              setPrivacy(false);
              setTerms(false);
              setTesto(false);
              setExperties(false);
              setService(false);
              setWe(true);
            }}
          >
            {" "}
            why we
          </div>
        </div>
        {privacy && <div className=""> for privacy and policy</div>}
        {terms && <div className=""> for terms and condition</div>}
        {testo && <div className=""> for privacy and policy</div>}
        {experties && <div className=""> for terms and condition</div>}
        {service && <div className=""> for privacy and policy</div>}
        {we && <div className=""> for privacy and policy</div>}
      </div>
    </AdminLayout>
  );
}
