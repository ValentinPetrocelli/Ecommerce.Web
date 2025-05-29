import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('../pages/loginPage'));
const RegisterPage = lazy(() => import('../pages/registerPage'))

const AppRouter = () => {
    return (
        <Suspense fallback={<div className="w-screen h-screen justify-center items-center">
                                <span>Cargando...</span>
                            </div>}>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;