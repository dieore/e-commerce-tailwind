import React, { useContext, useState } from "react";
import AppContext from "../AppContext";
import MyProfile from "../components/Acccount/MyProfile";
import MyShops from "../components/Acccount/MyShops";
import MyQueries from "../components/Acccount/MyQueries";
import News from "../components/Acccount/News";

const Account: React.FC = (): JSX.Element => {
    const [tab, setTab] = useState<number>(0);
    const { currentUser } = useContext<any>(AppContext);

    return (
        <div className="grid grid-cols-6">
            <div className="bg-green-800 h-screen pt-6">
                <ul className="flex flex-col md:items-center md:justify-between pl-5 md:pl-0 text-white font-light">
                    <li onMouseOver={() => setTab(0)} className="flex">
                        <img className="w-6" src="/img/shop.png" />
                        <p className="md:hidden pl-2">Mi perfil</p>
                    </li>
                    <li onMouseOver={() => setTab(1)} className="flex mt-4">
                        <img className="w-6" src="/img/shop.png" />
                        <p className="md:hidden pl-2">Compras</p>
                    </li>
                    <li onMouseOver={() => setTab(2)} className="flex mt-4">
                        <img className="w-6" src="/img/shop.png" />
                        <p className="md:hidden pl-2">Novedades</p>
                    </li>
                    <li onMouseOver={() => setTab(3)} className="flex mt-4">
                        <img className="w-6" src="/img/shop.png" />
                        <p className="md:hidden pl-2">Consultas</p>
                    </li>
                </ul>
            </div>
            <div className="col-span-5 h-screen bg-gray-200">
                <Tabs tab={tab}>
                    <MyProfile/>
                    <MyShops/>
                    <News/>
                    <MyQueries/>
                </Tabs>
            </div>
        </div>
    )
};

export default Account;

type Props = {
    children: JSX.Element[];
    tab: number;
}

const Tabs: React.FC<Props> = ({ children, tab }): JSX.Element => {
    return (
        <div className="bg-white p-10 m-6 rounded md:m-0 md:h-screen">
            {children[tab]}
        </div>
    )
}