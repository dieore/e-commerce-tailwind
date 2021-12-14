const CompanyDetails = () => {
    return (
        <div className="p-10 bg-green-900">
            <div className="flex w-4/12 justify-between lg:w-6/12 md:w-8/12 sm:w-full sm:justify-evenly">
                <p className="flex items-center text-white text-sm tracking-wide md:justify-center">
                    Inicio
                </p>
                <p className="flex items-center text-white text-sm tracking-wide md:justify-center">
                    Quienes somos
                </p>
                <p className="flex items-center text-white text-sm tracking-wide md:justify-center">
                    Preguntas frecuentes
                </p>
                <p className="flex items-center text-white text-sm tracking-wide md:justify-center">
                    Contacto
                </p>
            </div>
            <br /><hr className="row-start-2 w-full " /><br />
            <div className="grid grid-cols-3 md:grid-cols-1 md:h-32 md:items-center">
                <p className="col-start-1 flex items-center text-white text-sm tracking-wide md:justify-center">
                    2021 Tiendamas. Todos los derechos reservados.
                </p>
                <div className="flex col-start-3 justify-evenly md:col-start-1">
                    <img src="/img/faceIcon.png" className="h-8 cursor-pointer" />
                    <img src="/img/instaIcon.png" className="h-8 cursor-pointer" />
                    <img src="/img/faceIcon.png" className="h-8 cursor-pointer" />
                    <img src="/img/instaIcon.png" className="h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    )
};

export default CompanyDetails;