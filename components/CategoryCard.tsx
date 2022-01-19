interface Category {
    nombre: string;
    _id: string;
}

type Props = {
    category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }): JSX.Element => {
    const { nombre, _id } = category;
    return (
        <div className="grid place-items-center place-content-evenly text-center text-sm capitalize w-full cursor-pointer text-green-800 bg-white h-48 shadow-md rounded hover:bg-green-800 hover:text-white md:text-xs">
            <img src="/img/gaming.svg" className=" hover:border-white border-2 bg-gradient-to-l bg-green-900 rounded-full p-4" />
            <p>{nombre}</p>
        </div>
    )
};

export default CategoryCard;