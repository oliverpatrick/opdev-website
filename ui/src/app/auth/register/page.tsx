"use client";

import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/form/checkbox";
import ReturnButton from "@/components/ui/return-button/return-button";
import { registerSchema, RegisterSchema } from "@/lib/schemas/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function RegisterPage() {
  const { control } = useForm<RegisterSchema>({
    mode: "all",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: new Date().toISOString().split("T")[0],
      rememberMe: false,
    },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-8 text-2xl font-bold">Register</h1>
      <form className="w-full max-w-md space-y-6 bg-white p-8 shadow-md rounded mx-auto">
        <div className="form-group form-group-mandatory">
          <Controller
            control={control}
            name="firstName"
            render={({ field, fieldState }) => (
              <Input
                name="firstName"
                value={field.value}
                onChange={e => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                autoComplete="off"
                placeholder="John"
                label={"First Name"}
                error={fieldState.error}
              />
            )}
          />
        </div>
        <div className="form-group form-group-mandatory">
          <Controller
            control={control}
            name="lastName"
            render={({ field, fieldState }) => (
              <Input
                name="lastName"
                value={field.value}
                onChange={e => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                autoComplete="off"
                placeholder="Doe"
                label={"Last Name"}
                error={fieldState.error}
              />
            )}
          />
        </div>

        <div className="form-group form-group-mandatory">
          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field }) => (
              <Input
                type="date"
                name="dateOfBirth"
                value={field.value}
                onChange={e => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                autoComplete="off"
                placeholder="DD/MM/YYYY"
                label="Date of Birth"
              />
            )}
          />
        </div>

        <div className="form-group form-group-mandatory">
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                name="password"
                type="password"
                value={field.value}
                onChange={e => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                autoComplete="off"
                placeholder="Password"
                label={"Password"}
                error={fieldState.error}
              />
            )}
          />
        </div>

        <div className="form-group form-group-mandatory">
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <Input
                name="confirmPassword"
                type="password"
                value={field.value}
                onChange={e => field.onChange(e.target.value)}
                onBlur={field.onBlur}
                autoComplete="off"
                placeholder="********"
                label={"Confirm Password"}
                error={fieldState.error}
              />
            )}
          />
        </div>

        <div className="form-group form-group-mandatory">
          <Controller
            control={control}
            name="rememberMe"
            render={({ field, fieldState }) => (
              <Checkbox
                name="rememberMe"
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                label={"Remember Me"}
                error={fieldState.error}
              />
            )}
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <Button type="submit">Register</Button>
        </div>
      </form>
      <ReturnButton />
    </div>
  );
}

export default RegisterPage;
