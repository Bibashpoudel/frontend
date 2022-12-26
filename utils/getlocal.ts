export default function getLocal() {
  let localUser = null;
  if (typeof localStorage !== "undefined") {
    localUser = localStorage.getItem("userInfo");
    if (localUser) {
      localUser = JSON.parse(localUser);
    }
  }
  return localUser;
}
