import React, { useEffect, useState } from 'react';

interface Props {
    images: string[]
}

const Slider: React.FC<Props> = ({ images }) => {
    const [image, setImage] = useState<string>(images[0]);
    const [autoImage, setAutoImage] = useState<string>(images[0]);
    const [auto, setAuto] = useState<boolean>(true);
    const [isActive, setIsActive] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            if (auto) {
                if (images.indexOf(autoImage) + 1 === images.length) {
                    setAutoImage(images[0]);
                    setIsActive(0);
                } else {
                    setAutoImage(images[images.indexOf(autoImage) + 1]);
                    setIsActive(images.indexOf(autoImage) + 1)
                }
            }
        }, 4000)
    }, [autoImage])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 310) {
                if (!auto) {
                    setAuto(true);
                    setAutoImage(image);
                };
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [])

    const onChangeSlider = (direction: string): void => {
        setAuto(false);

        if (images.indexOf(image) + 1 === images.length && direction === "forward") {
            setImage(images[0]);
            setIsActive(0);
        } else if (direction === "forward") {
            setImage(images[images.indexOf(image) + 1]);
            setIsActive(images.indexOf(image) + 1);
        } else if (images.indexOf(image) === 0 && direction === "back") {
            setImage(images[images.length - 1]);
            setIsActive(images.length - 1);
        } else if (direction === "back") {
            setImage(images[images.indexOf(image) - 1]);
            setIsActive(images.indexOf(image) - 1);
        }
    };

    return (
        <div className="grid grid-cols-9 justify-items-center bg-center bg-no-repeat bg-cover h-72 items-center" style={{ backgroundImage: `url(${auto ? autoImage : image})` }}>
            <button className="col-start-1 rounded-full w-8 h-8 bg-white" onClick={() => onChangeSlider("back")}>{""}</button>
            <div className="flex col-start-5 self-end m-4">
                {
                    images.length > 0 ? (
                        images.map((i, idx) => (
                            <div className={`w-3 h-3 m-2 rounded-full bg-green-800 ${idx === isActive ? "border-2" : null}`} />
                        ))
                    ) : null
                }
            </div>
            <button className="col-start-9 border border-1 border-solid rounded-full w-8 h-8 bg-white" onClick={() => onChangeSlider("forward")}>{""}</button>
        </div >
    )
};

export default Slider;