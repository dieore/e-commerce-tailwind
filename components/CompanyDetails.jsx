const CompanyDetails = () => {
    return (
        <div className="p-10 bg-green-900">
            <div className="flex w-5/12 justify-between lg:w-4/6 sm:flex-col">
                <p className=" hover:underline p-0.5  text-white text-sm tracking-wide md:justify-center">
                    Inicio
                </p>
                <p className=" hover:underline p-0.5  text-white text-sm tracking-wide md:justify-center">
                    Quienes somos
                </p>
                <p className=" hover:underline p-0.5  text-white text-sm tracking-wide md:justify-center">
                    Preguntas frecuentes
                </p>
                <p className=" hover:underline p-0.5  text-white text-sm tracking-wide md:justify-center">
                    Contacto
                </p>
            </div>
            <br /><hr className="row-start-2 w-full" /><br />
            <div className="grid grid-cols-4 md:grid-cols-2 md:h-32 md:items-center sm:grid-cols-1">
                <p className="col-span-2 text-white text-sm tracking-wide">
                    2021 Tiendamas. Todos los derechos reservados.
                </p>
                <div className="flex col-start-4 md:col-start-1 justify-between">
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