export default function getSession() {
  let sessionUser = null;
  if (typeof sessionStorage !== "undefined") {
    sessionUser = sessionStorage.getItem("userInfo");
    if (sessionUser) {
      sessionUser = JSON.parse(sessionUser);
    }
  }
  return sessionUser;
}
