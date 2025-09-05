// import { cookies } from "next/headers";
// import { NextRequest } from "next/server";
// import { getHostname } from "./request.helper";

// const cookieHeaderName = "Cookie";
// const cookieName = "__session";
// const cookieDefaultSecret = "default-secret";

// type SessionData = {
//   mounted: boolean;
//   visitTime: string;
// };

// type SessionFlashData = {
//   error: string;
// };

// export type SessionManager = Awaited<ReturnType<typeof getSessionManager>>;

// export async function getSessionManager(request: NextRequest) {
//   const { getSession, commitSession, destroySession } =
//     await initialiseCookieSessionStorage(request);
//   const session = await getSession(request.headers.get(cookieHeaderName));

//   return {
//     getSession: () => session,
//     mountSession: async (mounted: boolean, visitTime: string) => {
//       session.set("mounted", mounted);
//       session.set("visitTime", visitTime);

//       return await commitSession(session);
//     },
//     unmountSession: () => destroySession(session),
//     isSessionMounted: () => isSessionMounted(session),
//     isSessionAuthenticated: () => isSessionAuthenticated(session),
//   };
// }

// async function initialiseCookieSessionStorage(request: NextRequest) {
//   const hostname = getHostname(request);

//   const secret =
//     process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
//       ? process.env.COOKIE_SECRET || cookieDefaultSecret
//       : await getCookieSecretValue();

//   return createCookieSessionStorage<SessionData, SessionFlashData>({
//     cookie: {
//       name: cookieName,
//       domain: hostname,
//       httpOnly: true,
//       sameSite: "lax",
//       secret: [secret],
//       secure: process.env.NODE_ENV === "production",
//     },
//   });
// }

// function isSessionMounted(session: Session<SessionData, SessionFlashData>) {
//   return session.has("mounted");
// }
