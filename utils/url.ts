function checkUrl() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = origin?.split("/");

  const URL2: any = URL[2]?.split(":");
  console.log("url 2", URL2, URL);
  let check: any;
  let URL1: any;

  if (URL2) {
    check = URL2[0];
  }
  console.log("url 2", URL2, check);

  if (check == "localhost") {
    console.log("test009");
    URL1 = process.env.NEXT_PUBLIC_LOCAL_URL;
  } else {
    URL1 = process.env.NEXT_PUBLIC_SERVER_URL;
  }
  return URL1;
}

function checkImageUrl() {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = origin?.split("/");

  const URL2: any = URL[2]?.split(":");
  console.log("url 2", URL2, URL);
  let check: any;
  let URL1: any;

  if (URL2) {
    check = URL2[0];
  }
  console.log("url 2", URL2, check);

  if (check == "localhost") {
    URL1 = process.env.NEXT_PUBLIC_LOCAL_CV_URL;
  } else {
    URL1 = process.env.NEXT_PUBLIC_SERVER_CV_URL;
  }
  return URL1;
}
export { checkImageUrl, checkUrl };
