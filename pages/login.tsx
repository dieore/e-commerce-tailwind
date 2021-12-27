import { NextPage } from "next";
import AuthCard from "../components/Authcard";

const Login: NextPage = (): JSX.Element => (
    <AuthCard
        title="¡Bienvenido!"
        buttonTitle="Iniciar sesión"
        buttonSubtitle="Crear cuenta"
        route="/register"
        action={() => console.log("Click")}
    />
)

export default Login;