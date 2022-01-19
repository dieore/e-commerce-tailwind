import { useContext } from "react";
import AppContext from "../../AppContext";

const MyProfile: React.FC = (): JSX.Element => {
    const { currentUser } = useContext<any>(AppContext);
    console.log(currentUser)
    return (
        <>
            <h1 className="text-right text-sm italic pb-1">Mi perfil</h1>
            <hr />
            <div className="grid grid-cols-3 lg:grid-cols-1 py-3 gap-5 my-3">
                <div className="flex justify-between items-baseline lg:flex-col text-left">
                    <label className="text-xs">Nombre</label>
                    <input
                        name="name"
                        className="placeholder-green-700 w-52 lg:w-full outline-none focus:border-green-600 border border-green-700 text-green-700"
                        value={currentUser?.displayName.split(" ")[0]}
                    />
                </div>
                <div className="flex justify-between items-baseline lg:flex-col text-left">
                    <label className="text-xs">Apellido</label>
                    <input
                        name="lastname"
                        className="placeholder-green-700 w-52 lg:w-full outline-none focus:border-green-600 border border-green-700 text-green-700"
                        value={currentUser?.displayName.split(" ")[1]}
                    />
                </div>
                <div className="flex justify-between items-baseline lg:flex-col text-left">
                    <label className="text-xs">Email</label>
                    <input
                        name="email"
                        className="placeholder-green-700 w-52 lg:w-full outline-none focus:border-green-600 border border-green-700 text-green-700"
                        value={currentUser?.email}
                    />
                </div>
                <div className="flex justify-between items-baseline lg:flex-col text-left">
                    <label className="text-xs">Dirección</label>
                    <input
                        name="email"
                        className="placeholder-green-700 w-52 lg:w-full outline-none focus:border-green-600 border border-green-700 text-green-700"
                        value=""
                    />
                </div>
                <div className="flex justify-between items-baseline lg:flex-col text-left">
                    <label className="text-xs">Teléfono</label>
                    <input
                        name="email"
                        className="placeholder-green-700 w-52 lg:w-full outline-none focus:border-green-600 border border-green-700 text-green-700"
                        value=""
                    />
                </div>
                <div className="flex justify-between items-baseline lg:flex-col text-left">
                    <label className="text-xs">Celular</label>
                    <input
                        name="email"
                        className="placeholder-green-700 w-52 lg:w-full outline-none focus:border-green-600 border border-green-700 text-green-700"
                        value=""
                    />
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <button onClick={() => console.log("click")}
                    className="border p-2 text-sm uppercase bg-green-700 text-white rounded hover:opacity-95"
                >
                    Actualizar
                </button>
            </div>
        </>
    )
}

export default MyProfile;