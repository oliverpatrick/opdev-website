// import { User } from "../types/api";

// export const canCreate = (user: User | null | undefined) => {
//   return user?.role === "ADMIN";
// };

// export const canDelete = (user: User | null | undefined, item: any) => {
//   if (user?.role === "ADMIN") {
//     return true;
//   }

//   if (user?.role === "USER" && item.author?.id === user.id) {
//     return true;
//   }

//   return false;
// };
