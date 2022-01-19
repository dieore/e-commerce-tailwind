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
        <div className="font-light bg-gray-200 py-12 md:py-0">
            <div className="relative z-10 w-3/6 sm:w-full m-auto p-16 sm:p-8 md:w-full bg-white rounded shadow-lg">
                <h1 className="text-3xl text-green-900 tracking-wide text-center">Registro</h1>
                <br />
                <input
                    name="name"
                    onChange={handleForm}
                    placeholder="Nombre"
                    className="my-2 w-full placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                />
                <input
                    name="lastname"
                    onChange={handleForm}
                    placeholder="Apellido"
                    className="my-2 w-full placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                />
                <input
                    name="email"
                    onChange={handleForm}
                    placeholder="Email"
                    className="my-2 w-full placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                />
                <input
                    name="password"
                    onChange={handleForm}
                    placeholder="Contraseña"
                    className="my-2 w-full placeholder-green-700 text-sm outline-none focus:border-green-600 border-b border-green-700 p-2 text-green-700"
                />
                <div className="flex flex-col h-32 w-full justify-evenly">
                    <button onClick={() => AuthService.createUser("die_ore@hotmail.com", "123456")} className="border p-2 bg-green-700 text-white rounded hover:opacity-95">Continuar</button>
                    <Link href="/login">
                        <a className="text-green-900 text-center border-green-700 rounded">Ya tengo una cuenta</a>
                    </Link>
                </div>
            </div>
            <div className="z-0 absolute w-full top-0 h-1/2 bg-green-700"/>
        </div>
    )
}

export default Register;