import Brand1Slider from "@/components/slider/Brand1Slider";

export default function Brands1() {
    return (
        <>
            <div className="section bg-2 pt-65 pb-35">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 mb-30 text-center text-lg-start wow animate__animated animate__fadeIn">
                            <p className="font-2xl-bold color-brand-2">We are<span className="color-brand-1"> trusted</span> by
                                major global brands</p>
                        </div>
                        <div className="col-lg-9 mb-30">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-6 pb-0">
                                    <Brand1Slider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
