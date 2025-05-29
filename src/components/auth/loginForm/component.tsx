import { useForm } from "react-hook-form";
import { loginSchema, type LoginData } from "../../../validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../../../services/authService";
import { toast } from "react-toastify";
import { SfButton, SfInput, SfLoaderCircular } from "@storefront-ui/react";
import { useState } from "react";

export const LoginForm = () => {
    //Hooks
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur"
    });

    // Actions
    const onSubmit = async (data: LoginData) => {
        setIsLoading(true);

        try { 
          await loginUser(data);

          toast.success("¡Successful login!");
        } catch (error: any) {
          const problem = error.problemDetails;
    
          if (problem) {
            toast.error(`${problem.title}: ${problem.detail}`);
          } else {
            toast.error("Server error occurred");
          }
        } finally {
            setIsLoading(false);
        }
    };

    // Render
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Email */}
                <div className="mb-4">
                        <SfInput
                        {...register('email')}
                        type="email"
                        placeholder="Email"
                        invalid={!!errors.email}
                    />
                    <p className="text-sm text-negative-600 min-h-[1.25rem]">
                        {errors.email?.message}
                    </p>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <SfInput
                        {...register('password')}
                        type="password"
                        placeholder="Password"
                        invalid={!!errors.password}
                    />
                    <p className="text-sm text-negative-600 min-h-[1.25rem]">
                        {errors.password?.message}
                    </p>
                </div>

                <SfButton 
                    type="submit"
                    size="base"
                    className="w-[100%]"
                >
                    <span className={`transition-opacity duration-200 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                        Login
                    </span>
                    {isLoading && (
                        <SfLoaderCircular
                            size="base"
                            className="absolute animate-spin"
                        />
                    )}
                </SfButton>
            </form>
        </>
    );
};