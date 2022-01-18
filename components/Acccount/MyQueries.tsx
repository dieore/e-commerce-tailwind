import { useState } from "react";
import Modal from "../Modal";

const MyQueries: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <h1 className="text-right text-sm italic pb-1">Mis consultas</h1>
            <hr />
            <table className="w-full mt-4 font-light md:text-sm">
                <tr className="text-left text-green-800 text-sm">
                    <th>Fecha</th>
                    <th>Mensaje</th>
                    <th className="lg:hidden">Respuesta</th>
                </tr>
                <tr>
                    <td className="pt-2">{new Date().toLocaleDateString()}</td>
                    <td className="pt-2 lg:hidden">Este sería el mensaje en el que yo escribo mi consulta, debería verse hasta cierto punto...</td>
                    <td className="pt-2">En espera</td>
                </tr>
                <tr>
                    <td className="pt-2">{new Date().toLocaleDateString()}</td>
                    <td className="pt-2 lg:hidden">Este sería el mensaje en el que yo escribo mi consulta, debería verse hasta cierto punto...</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2 hover:underline cursor-pointer">Respondido</td>
                </tr>
            </table>
            <Modal
                open={isOpen}
                setStateFromComponent={setIsOpen}
            >
                <div className="absolute -left-2/4 -right-2/4 top-1/4 mx-auto w-2/3 md:w-full md:text-sm">
                    <div className="flex flex-col justify-center p-8 w-full bg-white">
                        <h1 className="text-green-900">PREGUNTA</h1>
                        <p>Este sería el mensaje en el que yo escribo mi consulta, debería verse hasta todo lo que escribí.</p>
                        <br/>
                        <h1 className="text-green-900">RESPUESTA</h1>
                        <p>
                            Esta sería la respuesta totalmente detallada.
                            Ha sido un gusto responderle. Esperemos que esté satisfecho con su consulta.
                            Saludos. El Equipo de TiendaMas.
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MyQueries;