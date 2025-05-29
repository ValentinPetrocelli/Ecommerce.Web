import z from "zod";

export const registerSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "The password must be at least 6 characters long"),
    confirmPassword: z.string(),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export type RegisterData = z.infer<typeof registerSchema>;