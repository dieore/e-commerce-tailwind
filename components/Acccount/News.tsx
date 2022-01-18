import { useState } from "react";
import Modal from "../Modal";

const News: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <h1 className="text-right text-sm italic pb-1">Novedades</h1>
            <hr />
            <table className="w-full mt-4 font-light">
                <tr className="text-left text-green-800 text-sm">
                    <th>Fecha</th>
                    <th>Mensaje</th>
                </tr>
                <tr>
                    <td className="pt-2">{new Date().toLocaleDateString()}</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2 lg:hidden hover:underline cursor-pointer">Este sería la noticia que deberia tener un cierto largo...</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2 hidden lg:flex hover:underline cursor-pointer">Ver</td>
                </tr>
                <tr>
                    <td className="pt-2">{new Date().toLocaleDateString()}</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2 lg:hidden hover:underline cursor-pointer">Este sería la noticia que deberia tener un cierto largo...</td>
                    <td onClick={() => setIsOpen(true)} className="pt-2  hidden lg:flex hover:underline cursor-pointer">Ver</td>
                </tr>
            </table>
            <Modal
                open={isOpen}
                setStateFromComponent={setIsOpen}
            >
                <div className="absolute -left-2/4 -right-2/4 top-1/4 mx-auto w-2/3">
                    <div className="flex flex-col justify-center h-64 p-8 w-full bg-white">
                        <h1 className="text-green-900">NOTICIA</h1>
                        <p>
                            Esta sería la noticia totalmente detallada.
                            Ha sido un gusto contarle los detalles. Esperemos que esté satisfecho con el servicio.
                            Saludos. El Equipo de TiendaMas.
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default News;