import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import router from "next/router";
import { AuthService } from "../services/AuthService";
import AppContext from "../AppContext";


interface Form {
    name: string;
    lastname: string;
    email: string;
    password: string;
}

const Register = () => {
    const [form, setForm] = useState<Form>({
        name: "",
        lastname: "",
        email: "",
        password: ""
    })
    const { currentUser } = useContext<any>(AppContext);

    useEffect(() => {
        if (currentUser) {
            router.push("/")
        }
    }, [currentUser])

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div className="font-light h-screen bg-gray-200">
            <div className="w-7/12 md:w-5/6 absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-16 bg-white rounded shadow-lg">
                <h1 className="text-3xl text-green-900 tracking-wide text-center">Registro</h1>
                <br />
                <div className="flex flex-col">
                    <input
                        name="name"
                        onChange={handleForm}
                        placeholder="Nombre"
                        className="m-2 placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                    />
                    <input
                        name="lastname"
                        onChange={handleForm}
                        placeholder="Apellido"
                        className="m-2 placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                    />
                    <input
                        name="email"
                        onChange={handleForm}
                        placeholder="Email"
                        className="m-2 placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                    />
                    <input
                        name="password"
                        onChange={handleForm}
                        placeholder="Contraseña"
                        className="m-2 placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                    />
                </div>
                <div className="flex flex-col h-32 w-full justify-evenly">
                    <button onClick={() => AuthService.createUser("die_ore@hotmail.com", "123456")} className="border p-2 bg-green-700 text-white rounded hover:opacity-95">Continuar</button>
                    <Link href="/login">
                        <a className="text-green-900 text-center p-2 border-green-700 rounded">Ya tengo una cuenta</a>
                    </Link>
                </div>
            </div>
            <div className="h-2/6 bg-green-700" />
        </div>
    )
}

export default Register;