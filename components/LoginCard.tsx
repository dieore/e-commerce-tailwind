import { UserCredential } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";

interface Form {
    email: string;
    password: string;
}

type Props = {
    title: string;
    buttonTitle: string;
    buttonSubtitle: string;
    route: string;
    login: (email: string, password: string) => Promise<UserCredential>;
    loginWithGoogle: () => Promise<UserCredential>
}

const LoginCard: React.FC<Props> = ({ title, buttonSubtitle, buttonTitle, route, login, loginWithGoogle }): JSX.Element => {
    const [form, setForm] = useState<Form>({
        email: "",
        password: ""
    })

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    //check this out, it doesn't work with async await
    // https://stackoverflow.com/questions/61930133/firebase-auth-signinwithemailandpassword-using-try-catch-async-await-uncaught

    const handleAction = async () => {
        await login(form.email, form.password)
            .then(res => console.log("Éxito, desde login card"))
            .catch(err => {
                console.log(err.message)
                switch (err.message) {
                    case "Firebase: Error (auth/wrong-password).":
                        alert("Contraseña incorrecta")
                        break;
                    case "Firebase: Error (auth/invalid-email).":
                        console.log("El email no es válido")
                        break;
                    case "Firebase: Error (auth/invalid-password).":
                        console.log("Contraseña inválida")
                        break;
                    case "Firebase: Error (auth/user-not-found).":
                        console.log("El usuario no fue encontrado")
                        break;
                    case "Firebase: Error (auth/missing-email).": {
                        console.log("Ingrese email")
                        break;
                    }
                    default:
                        break;
                }
            })
    }

    return (
        <div className="font-light h-screen bg-gray-200">
            <div className="absolute sm:relative sm:h-screen left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-20 flex flex-col items-center justify-between sm:justify-center bg-white rounded shadow-lg">
                <h1 className="text-3xl text-green-900 tracking-wide text-center pb-5">{title}</h1>
                <div className="w-full flex flex-col h-32 justify-evenly sm:text-sm">
                    <input
                        name="email"
                        placeholder="Email"
                        className="placeholder-green-700 outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                        value={form.email}
                        onChange={handleForm}
                    />
                    <input
                        name="password"
                        placeholder="Contraseña"
                        className="placeholder-green-700 outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                        value={form.password}
                        onChange={handleForm}
                    />
                </div>
                <div className="flex flex-col h-48 w-full justify-evenly sm:text-sm">
                    <button onClick={handleAction}
                        className="border p-2 bg-green-700 text-white rounded hover:opacity-95"
                    >
                        {buttonTitle}
                    </button>
                    <button onClick={() => loginWithGoogle()}
                        className="border border-green-800 p-2 text-green-800 rounded hover:opacity-95"
                    >
                        Ingresar con Google
                    </button>
                    <Link href={route}>
                        <a className="text-green-900 text-center p-2 border-green-700 rounded">{buttonSubtitle}</a>
                    </Link>
                </div>
            </div>
            <div className="h-2/6 bg-green-700" />
        </div>
    )
};

export default LoginCard;