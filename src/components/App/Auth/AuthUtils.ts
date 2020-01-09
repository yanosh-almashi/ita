import Cookies from "js-cookie";

export const createUserCoockies = (token:string, reToken: string, uid: string) => {
  Cookies.set("token", token, { expires: 1 / 24 });
  Cookies.set("refreshToken", reToken);
  Cookies.set("uid", uid);
}

export const deleteUserCookies = () => {
  Cookies.remove("token");
  Cookies.remove("refreshToken");
  Cookies.remove("uid");
}