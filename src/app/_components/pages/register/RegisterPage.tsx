"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, IconButton, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import registerValidate from "./registerValidate";

const RegisterPage = () => {
  const router = useRouter();
  const [isHidePass, setIsHidePass] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
    },

    resolver: zodResolver(registerValidate),
  });

  const onSubmit = handleSubmit((value) => {
    console.log("value : ", value);
  });

  return (
    <div className="max-w-[30rem] m-auto">
      <p className="text-center text-3xl font-bold my-2">Register</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.firstName}
              helperText={errors.firstName?.message ?? ""}
              label="ชื่อ"
              variant="outlined"
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.lastName}
              helperText={errors.lastName?.message ?? ""}
              label="นามสกุล"
              variant="outlined"
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message ?? ""}
              label="อีเมล"
              variant="outlined"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.password}
              helperText={errors.password?.message ?? ""}
              label="รหัสผ่าน"
              type={isHidePass ? "text" : "password"}
              variant="outlined"
              slotProps={{
                input: {
                  endAdornment: (
                    <IconButton onClick={() => setIsHidePass(!isHidePass)}>
                      {isHidePass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  ),
                },
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.age}
              type="number"
              helperText={errors.age?.message ?? ""}
              label="อายุ"
              variant="outlined"
            />
          )}
        />

        <div className="flex justify-end gap-2">
          <Button
            variant="contained"
            color="inherit"
            onClick={() => router.push("/login")}
          >
            กลับ
          </Button>
          <Button variant="contained" type="submit" disabled={!isValid}>
            ตกลง
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
