import Hero2Slider from "@/components/slider/Hero2Slider";
import Link from "next/link";

export default function Hero2() {
    return (
        <>
            <section className="section d-block">
                <div className="box-banner-homepage2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7"><span className="font-md-bold color-brand-2 wow animate__animated animate__fadeIn">Full
                                Sustainable Cargo Solutions</span>
                                <h1 className="color-brand-2 mb-25 mt-15 wow animate__animated animate__fadeIn">Taking Logistics
                                    to Another Level</h1>
                                <p className="font-md color-brand-2 mb-20 wow animate__animated animate__fadeIn">Representative
                                    logistics operator providing full range of service in the sphere of<br className="d-none d-lg-block" />customs clearance and transportation worldwide.</p>
                                <div className="mt-45 text-start"><Link className="hover-up mr-10 wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/template/appstore-btn.png" alt="transp" /></Link><Link className="hover-up wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/template/google-play-btn.png" alt="transp" /></Link></div>
                            </div>
                        </div>
                        <div className="box-slider-homepage2">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-3-style-2 swiper-group-3-slider">
                                    <Hero2Slider />
                                </div>
                                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-style-2 wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-style-2 wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-image-home2" />
                </div>
            </section>
        </>

    )
}
