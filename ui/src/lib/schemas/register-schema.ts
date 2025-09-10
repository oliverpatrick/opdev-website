import { INVALID_INPUT_REGEX } from "@/utils/constants/constants";
import z from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .transform(str => str.replace(INVALID_INPUT_REGEX, "")),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .transform(str => str.replace(INVALID_INPUT_REGEX, "")),
    dateOfBirth: z.iso.datetime("Invalid date format"),
    email: z.email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(25, "Password must be at most 25 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters")
      .max(25, "Confirm Password must be at most 25 characters"),
    rememberMe: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["password", "confirmPassword"],
      });
    }
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
