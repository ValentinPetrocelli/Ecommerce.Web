import { RegisterForm } from "../components/auth/registerForm";

const RegisterPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-[30%]">
                <h2 className="mb-10 text-[2rem] text-center">Registro</h2>

                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;