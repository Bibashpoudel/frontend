import { useRouter } from "next/router";

export default function checkUrl() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = origin?.split("/");
  const URL2 = URL[2].split(":");

  let URL1: any;
  if (URL2[0] == "localhost") {
    URL1 = process.env.NEXT_PUBLIC_LOCAL_URL;
  } else {
    URL1 = process.env.NEXT_PUBLIC_SERVER_URL;
  }

  return URL1;
}
