import Link from "next/link";

export default function Pricing1() {
    return (
        <>
            <section className="section bg-grey-100 bg-choose-plan pt-110 pb-110">
                <div className="container">
                    <div className="text-center"><img className="mb-15" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                        <h2 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">Choose The Best Plan</h2>
                        <p className="font-lg color-gray-500 wow animate__animated animate__fadeIn">Pick your plan. Change
                            whenever you want.<br className="d-none d-lg-block" />No switching fees between packages</p>
                    </div>
                    <div className="row mt-50 align-items-center">
                        <div className="col-xl-4 col-lg-4 wow animate__animated animate__fadeIn">
                            <div className="card-plan hover-up">
                                <h3 className="color-brand-2 title-plan">Premium</h3>
                                <p className="font-md color-grey-500 desc-plan">Advanced features for pros who need more
                                    customization.</p>
                                <div className="item-price-plan">
                                    <div className="for-month display-month">
                                        <h3 className="color-brand-2 d-inline-block">$<span>125</span></h3><span className="color-grey-500 font-sm">/month</span>
                                    </div>
                                    <div className="for-year">
                                        <h3 className="color-brand-2 d-inline-block">$<span>1500</span></h3><span className="color-grey-500 font-sm">/year</span>
                                    </div>
                                </div>
                                <div className="line-border" />
                                <div className="mt-30 mb-30">
                                    <ul className="list-ticks list-ticks-2">
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>15-Days Shipping World Wide
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>1 Kg Weight Max /Package
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Free Bubble Warp
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>24/7 Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow animate__animated animate__fadeIn">
                            <div className="card-plan popular hover-up">
                                <h3 className="color-brand-2 title-plan">Essentials</h3>
                                <p className="font-md color-grey-500 desc-plan">All the basics for businesses that are just
                                    getting started.</p>
                                <div className="item-price-plan">
                                    <div className="for-month display-month">
                                        <h3 className="color-brand-2 d-inline-block">$<span>89</span></h3><span className="color-grey-500 font-sm">/month</span>
                                    </div>
                                    <div className="for-year">
                                        <h3 className="color-brand-2 d-inline-block">$<span>1068</span></h3><span className="color-grey-500 font-sm">/year</span>
                                    </div>
                                </div>
                                <div className="line-border" />
                                <div className="mt-30 mb-30">
                                    <ul className="list-ticks list-ticks-2">
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>7-Days Shipping World Wide
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>3 Kg Weight Max /Package
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Free Wood Crate
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Get in touch to discuss
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Use Personal And Commercial
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>24/7 Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow animate__animated animate__fadeIn">
                            <div className="card-plan hover-up">
                                <h3 className="color-brand-2 title-plan">Unlimited</h3>
                                <p className="font-md color-grey-500 desc-plan">Avvanced features for pros who need more
                                    customization.</p>
                                <div className="item-price-plan">
                                    <div className="for-month display-month">
                                        <h3 className="color-brand-2 d-inline-block">$<span>199</span></h3><span className="color-grey-500 font-sm">/month</span>
                                    </div>
                                    <div className="for-year">
                                        <h3 className="color-brand-2 d-inline-block">$<span>2388</span></h3><span className="color-grey-500 font-sm">/year</span>
                                    </div>
                                </div>
                                <div className="line-border" />
                                <div className="mt-30 mb-30">
                                    <ul className="list-ticks list-ticks-2">
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>4 -Days Shipping World Wide
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>1 Kg Weight Max /Package
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Free Bubble Warp
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>24/7 Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
