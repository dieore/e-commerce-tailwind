type Props = {
    title: string;
    subtitle: string;
    image: StaticImageData;
    extra: string;
}

const Cards: React.FC<Props> = ({ title, subtitle, image, extra }): JSX.Element => {
    return (
        <div className="w-full bg-white h-48 flex flex-col text-center justify-evenly items-center shadow-md rounded">
            <img src={image.src} />
            <p className="text-lg lg:text-sm">{title}</p>
            <p className="font-light text-gray-500 lg:text-sm">{subtitle}</p>
            <p className="text-sm text-green-800 lg:text-sm">{extra}</p>
        </div>
    )
};

export default Cards;