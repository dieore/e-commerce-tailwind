import { NextPage } from "next";
import Link from "next/link";

type Props = {
    title: string;
    buttonTitle: string;
    buttonSubtitle: string;
    route: string;
    action: () => void;
}

const AuthCard: NextPage<Props> = ({ title, buttonSubtitle, buttonTitle, route, action }): JSX.Element => {
    return (
        <div className="h-screen bg-gray-200">
            <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-16 sm:p-8 flex flex-col items-center justify-between bg-white rounded shadow-lg">
                <h1 className="text-2xl text-green-900 tracking-wide font-medium text-center">{title}</h1>
                <br />
                <div className="flex flex-col h-32 justify-evenly">
                    <input placeholder="Email" className="placeholder-green-700 text-sm outline-none focus:border-green-600 border border-green-700 p-2 text-green-700 rounded hover:opacity-95" />
                    <input placeholder="Contraseña" className="placeholder-green-700 text-sm outline-none focus:border-green-600 border border-green-700 p-2 text-green-700 rounded hover:opacity-95" />
                </div>
                <div className="flex flex-col h-32 w-full justify-evenly">
                    <button onClick={() => action()} className="border p-2 bg-green-700 text-white rounded hover:opacity-95">{buttonTitle}</button>
                    <Link href={route}>
                        <a className="text-green-900 text-center">{buttonSubtitle}</a>
                    </Link>
                </div>
            </div>
            <div className="h-2/6 bg-green-700" />
        </div>
    )
};

export default AuthCard;