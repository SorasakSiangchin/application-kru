import { z } from "zod";

const loginValidate = z.object({
  email: z.string().min(1, "กรุณากรอกอีเมล").email({
    message: "รูปแบบอีเมลไม่ถูกต้อง",
  }),
  password: z
    .string({
      message: "กรุณากรอกรหัสผ่าน",
    })
    .min(6, "รหัสผ่านต้องมีความยาวมากกว่า 6 ตัวอักษร"),
});

export default loginValidate;
