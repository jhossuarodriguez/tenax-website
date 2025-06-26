import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IMAGES } from "../consts/Images"

export default () => {
    const [loaded, setLoaded] = React.useState([])
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const [sliderRef] = useKeenSlider({
        animationEnded(s) {
            setCurrentSlide(s.track.details.rel)
        },
        loop: true,
        initial: 0,
    })

    React.useEffect(() => {
        const new_loaded = [...loaded]
        new_loaded[currentSlide] = true
        setLoaded(new_loaded)
    }, [currentSlide])

    return (
        <div ref={sliderRef} className="keen-slider">
            {IMAGES.map((src, idx) => (
                <div key={idx} className="keen-slider__slide lazy__slide">
                    <img src={loaded[idx] ? src : ""} />
                </div>
            ))}
        </div>
    )
}
