import { useEffect, useState } from "react";

type Props = {
    children: JSX.Element;
    open: boolean;
    setStateFromComponent: Function;
}

const Modal: React.FC<Props> = ({ children, open, setStateFromComponent }): JSX.Element => {
    const [show, setShow] = useState<boolean>(open);

    const handleEscape = (e: KeyboardEvent): void => {
        if (e && e.key === "Escape") {
            setShow(false);
            setStateFromComponent(false);
        };
    };

    useEffect((): any => {
        window.addEventListener("keydown", (e) => handleEscape(e))
        return (e) => handleEscape(e);
    }, [])

    return (
        <>
            {
                open && (
                    <div className="overflow-auto fixed w-screen h-screen bg-black bg-opacity-60 top-0 left-0 z-50">
                        <button onClick={() => {
                            setShow(false);
                            setStateFromComponent(false)
                        }}
                            className="hover:bg-opacity-80 outline-none fixed rounded bottom-10 right-10 p-3 z-50 bg-green-900 text-white"
                        >
                            CERRAR
                        </button>
                        <>
                            {children}
                        </>
                    </div>
                )
            }
        </>
    )
};

export default Modal;