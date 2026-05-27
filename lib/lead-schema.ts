import { z } from "zod";
import { serviceTypes } from "./site-data";

const optionalText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength, `Не больше ${maxLength} символов`)
    .optional()
    .or(z.literal(""));

export const leadFormSchema = z.object({
  name: optionalText(80),
  phone: z
    .string()
    .trim()
    .min(1, "Укажите телефон")
    .max(40, "Телефон слишком длинный")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Укажите корректный телефон"),
  car: optionalText(120),
  serviceType: z.enum(serviceTypes, {
    message: "Выберите тип обращения",
  }),
  preferredTime: optionalText(120),
  message: optionalText(1000),
  consent: z.boolean().refine((value) => value === true, {
    message: "Нужно согласие на обработку персональных данных",
  }),
  source: optionalText(80),
  createdAt: optionalText(80),
  honeypot: optionalText(120),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
