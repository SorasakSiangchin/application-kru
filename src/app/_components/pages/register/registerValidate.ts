import { z } from "zod";

const registerValidate = z.object({
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  age: z.string().min(1, "กรุณากรอกอายุ"),
  email: z.string().min(1, "กรุณากรอกอีเมล").email({
    message: "รูปแบบอีเมลไม่ถูกต้อง",
  }),
  password: z
    .string({
      message: "กรุณากรอกรหัสผ่าน",
    })
    .min(6, "รหัสผ่านต้องมีความยาวมากกว่า 6 ตัวอักษร"),
});

export default registerValidate;
