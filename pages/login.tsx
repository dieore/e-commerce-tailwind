import { NextPage } from "next";
import router from "next/router";
import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import LoginCard from "../components/LoginCard";
import { AuthService } from "../services/AuthService";

const Login: NextPage = (): JSX.Element => {
    const { currentUser } = useContext<any>(AppContext);

    useEffect(() => {
        if (currentUser) {
            router.push("/")
        }
    }, [currentUser])

    return (
        <LoginCard
            title="¡Bienvenido!"
            buttonTitle="Iniciar sesión"
            buttonSubtitle="Crear cuenta"
            route="/register"
            login={AuthService.login}
            loginWithGoogle={AuthService.loginWithGoogle}
        />
    )

}

export default Login;