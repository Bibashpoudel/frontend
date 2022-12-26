export default function abc() {
  localStorage.removeItem("userInfo");
  sessionStorage.removeItem("userInfo");
  return "/admin/login";
}
