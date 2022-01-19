import React, { useEffect, useRef, useState } from 'react';

interface Props {
    images: string[]
}

const Slider: React.FC<Props> = ({ images }): JSX.Element => {
    const [image, setImage] = useState<string>(images[0]);
    const auto = useRef<boolean>(true);

    const sliderOn = (): void => {
        setTimeout(() => {
            if (image === images[images.length - 1]) {
                setImage(images[0]);
            } else {
                setImage(images[images.indexOf(image) + 1]);
            }
        }, 4000)
    };

    useEffect(() => {
        if (auto.current) sliderOn();
    }, [image])

    let active = "w-2 h-2 border-2 rounded-full bg-green-800 scale-150 transform cursor-pointer";
    let inactive = "w-2 h-2 border-2 rounded-full hover:bg-green-800 hover:scale-150 transform cursor-pointer";

    return (
        <div className="grid grid-cols-3 h-80 w-full">
            <div className="absolute h-80 w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${image})` }}/>
            <div className="flex w-full justify-evenly col-start-2 self-end p-8 md:p-4">
                {
                    images && images.map(i => (
                        <div
                            className={i === image ? active : inactive}
                            onClick={() => {
                                auto.current = false;
                                setImage(i);
                            }}
                        />
                    ))
                }
            </div>
        </div >
    )
};

export default Slider;