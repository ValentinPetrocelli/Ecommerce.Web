import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth/loginForm";

const LoginPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-[30%]">
                <h2 className="mb-10 text-[2rem] text-center">Login</h2>

                <div>
                    <LoginForm />
                    <p className="text-[0.9rem] mt-2">¿No tenés cuenta? <Link to="/register" className="text-secondary-900 hover:underline">Registrate</Link></p>
                </div>
            </div>
        </div> 
    );
};

export default LoginPage;