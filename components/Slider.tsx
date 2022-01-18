import React, { useEffect, useRef, useState } from 'react';

interface Props {
    images: string[]
}

const Slider: React.FC<Props> = ({ images }): JSX.Element => {
    const [image, setImage] = useState<string>(images[0]);
    const auto = useRef(true);

    const sliderOn = () => {
        setTimeout(() => {
            if (image === images[images.length - 1]) {
                setImage(images[0])
            } else {
                setImage(images[images.indexOf(image) + 1])
            }
        }, 2000)
    };

    useEffect(() => {
        if (auto.current) sliderOn();
    }, [image])

    return (
        <div className="grid grid-cols-3 h-80 bg-center bg-no-repeat bg-cover w-full" style={{ backgroundImage: `url(${image})` }}>
            {/* <button className="col-start-1 justify-self-start p-3 self-center bg-gray-400 rounded h-20"></button> */}
            <div className="flex w-full justify-evenly col-start-2 self-end p-8 md:p-4">
                {
                    images && images.map(i => (
                        <div onClick={() => {
                            auto.current = false;
                            setImage(i);
                        }} className="w-2 h-2 bg-gray-600 border rounded-full hover:bg-green-800 hover:scale-150 transform cursor-pointer" />
                    ))
                }
            </div>
            {/* <button className="col-start-3 justify-self-end p-3 self-center bg-gray-400 rounded h-20"></button> */}
        </div >
    )
};

export default Slider;