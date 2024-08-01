import Accordion from "@/components/elements/Accordion";
import Link from "next/link";

export default function Faqs1() {
    return (
        <>
            <section className="section pt-80 mb-70 bg-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-faqs-left">
                                <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">FAQs</h2>
                                <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">Feeling
                                    inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                <div className="box-gallery-faqs">
                                    <div className="image-top"><img src="/assets/imgs/page/homepage1/img-faq1.png" alt="transp" />
                                    </div>
                                    <div className="image-bottom">
                                        <div className="image-faq-1"><img src="/assets/imgs/page/homepage1/img-faq2.png" alt="transp" /></div>
                                        <div className="image-faq-2"><img src="/assets/imgs/page/homepage1/img-faq3.png" alt="transp" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-accordion">
                                <Accordion />
                                <div className="line-border mt-50 mb-50" />
                                <h3 className="color-brand-2 wow animate__animated animate__fadeIn">Nead more help?</h3>
                                <div className="mt-20"><Link className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="/contact">Contact Us</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn
                                    More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
