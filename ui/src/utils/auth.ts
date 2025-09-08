// import { cookies } from "next/headers";

// export const AUTH_TOKEN_COOKIE_NAME = "react_app_token";

// export const getAuthTokenCookie = async () => {
//   if (typeof window !== "undefined") return "";
//   let cookieStore = await cookies();
//   return cookieStore.get(AUTH_TOKEN_COOKIE_NAME)?.value;
// };

// export const checkLoggedIn = async () => {
//   if (typeof window !== "undefined") return false;
//   let cookieStore = await cookies();
//   const isLoggedIn = !!cookieStore.get(AUTH_TOKEN_COOKIE_NAME);
//   return isLoggedIn;
// };
