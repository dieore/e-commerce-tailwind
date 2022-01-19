import { useState } from "react";
import Modal from "../Modal";

const MyShops: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const number = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });

    return (
        <>
            <h1 className="text-right text-sm italic pb-1">Mis compras</h1>
            <hr />
            <table className="w-2/4 md:w-full mt-4 font-light md:text-sm">
                <tr className="text-left text-green-800 text-sm">
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Detalles</th>
                </tr>
                <tr>
                    <td className="pt-2">{new Date().toLocaleDateString()}</td>
                    <td className="pt-2">{number.format(500)}</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2 hover:underline cursor-pointer">Ver</td>
                </tr>
                <tr>
                    <td className="pt-2">{new Date().toLocaleDateString()}</td>
                    <td className="pt-2">{number.format(500)}</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2 hover:underline cursor-pointer">Ver</td>
                </tr>
                <tr>
                    <td className="pt-2">{new Date().toLocaleDateString()}</td>
                    <td className="pt-2">{number.format(500)}</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2 hover:underline cursor-pointer">Ver</td>
                </tr>
            </table>
            <Modal
                open={isOpen}
                setStateFromComponent={setIsOpen}
            >
                <div className="absolute -left-2/4 -right-2/4 top-1/4 mx-auto w-2/3 md:w-full md:text-sm">
                    <div className="flex flex-col justify-center p-8 w-full bg-white">
                        <h1 className="text-green-900">RESPUESTA</h1>
                        Esta sería la compra totalmente detallada.
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MyShops;