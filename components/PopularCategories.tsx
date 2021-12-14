import React from 'react';
import CategoryCard from './CategoryCard';

interface Category {
    nombre: string;
    _id: string;
}

type Props = {
    categories: Category[];
}

const PopularCategories: React.FC<Props> = ({ categories }) => {
    return (
        <>
            <h2 className="p-4 text-gray-600 text-2xl font-light">Categorias populares</h2>
            <div className="justify-items-center gap-2 p-4 grid xl:grid-cols-5 lg:grid-cols-4 lg:h-auto md:grid-cols-3 sm:grid-cols-2">
                {
                    categories.map(c => (
                        <CategoryCard key={c._id} category={c} />
                    ))
                }
            </div>
        </>
    )
};

export default PopularCategories;