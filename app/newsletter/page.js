import NewsletterSlider from "@/components/slider/NewsletterSlider";
import Link from "next/link";
export default function Newsletter() {
    return (
        <>
                <section className="section d-block newsletter-style">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-1 swiper-banner-1">
                            <NewsletterSlider />
                        </div>
                    </div>
                </section>
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">What We Offer</h4>
                        <div className="row CardServiceStyleNewsletter">
                            <div className="col-sm-4">
                                <div className="card-offer card-offer-newsletter hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp" /></div>
                                    <div className="card-info">
                                        <h6 className="font-sm-bold color-brand-2 mb-10">Sea Forwarding</h6>
                                        <p className="font-xxs color-grey-700 mb-20">We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer"><a className="btn btn-link font-xxs color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card-offer card-offer-newsletter hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></div>
                                    <div className="card-info">
                                        <h6 className="font-sm-bold color-brand-2 mb-10">Air Freight Forwarding</h6>
                                        <p className="font-xxs color-grey-700 mb-20">We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer"><a className="btn btn-link font-xxs color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card-offer card-offer-newsletter hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></div>
                                    <div className="card-info">
                                        <h6 className="font-sm-bold color-brand-2 mb-10">Land Transportation</h6>
                                        <p className="font-xxs color-grey-700 mb-20">We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer"><a className="btn btn-link font-xxs color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 newsletter-style">
                    <div className="container-sub">
                        <div className="row align-items-center">
                            <div className="col-sm-6 mb-30">
                                <div className="box-images-pround-newsletter">
                                    <div className="box-images"> <img className="img-main" src="/assets/imgs/page/homepage1/img1.png" alt="transp" />
                                        <div className="image-2 shape-3"> <img src="/assets/imgs/page/homepage1/icon1.png" alt="transp" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-30">
                                <div className="box-info-pround-newsletter">
                                    <h6 className="font-md-bold color-brand-2 mb-10">Fast shipping with the most modern technology</h6>
                                    <p className="font-xs color-grey-500">Over the years, we have worked together to expand our network of partners to deliver reliability and consistency. </p>
                                    <div className="mt-20">
                                        <ul className="list-ticks">
                                            <li className="font-xxs">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Task tracking
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Create task dependencies
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Task visualization
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>hare files, discuss
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Meet deadlines faster
                                            </li>
                                            <li>
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>Track time spent
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-30 text-start d-flex"> <Link className="hover-up mr-10" href="#"> <img src="/assets/imgs/template/appstore-btn.png" alt="transp" /></Link><Link className="hover-up" href="#"> <img src="/assets/imgs/template/google-play-btn.png" alt="transp" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 newsletter-style">
                    <div className="container-sub">
                        <div className="row align-items-center">
                            <div className="col-sm-5"> <span className="btn btn-tag font-xxs">Get in touch</span>
                                <h3 className="color-brand-2 font-16-bold mb-10 mt-10">Proud to Deliver <br className="d-none d-lg-block" />Excellence Every Time</h3>
                                <p className="font-xxs color-grey-500 mb-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                <div className="mt-20"> <Link className="btn btn-brand-2 mr-20 font-xxs-medium" href="/contact">Contact Us</Link><Link className="btn btn-link-medium font-xxs-medium" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-sm-7 position-relative">
                                <div className="certified-icon"><img src="/assets/imgs/page/homepage3/certified.png" alt="transp" /></div>
                                <div className="row">
                                    <div className="col-sm-6 pl-5 pr-5"><img className="mt-50" src="/assets/imgs/page/homepage3/img-info-5.png" alt="transp" /></div>
                                    <div className="col-sm-6 pl-5 pr-5"> <img src="/assets/imgs/page/homepage3/img-info-5-2.png" alt="transp" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Why Choose Us</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/container.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Over 1200 couriers</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/24-hours.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Automatic courier</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/stopwatch.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Real-time alert</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/pallet.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-brand-2 mb-15">Email alerts</h5>
                                            <p className="font-sm color-grey-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo consectetur.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-55 bg-1 position-relative newsletter-style block-info-3">
                    <div className="container-sub position-relative">
                        <div className="row">
                            <div className="col-sm-6 pt-25 pb-25"> <span className="btn btn-tag">Get in touch</span>
                                <h6 className="color-brand-2 font-16-bold mb-15 mt-10">Proud to Deliver <br className="d-none d-lg-block" />Excellence Every Time</h6>
                                <p className="font-xxs color-grey-900 mb-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                <div className="row">
                                    <div className="col-lg-6 mb-20">
                                        <h6 className="chart-title font-xxs-bold color-grey-900">Boost your sale</h6>
                                        <p className="font-xxs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-20">
                                        <h6 className="feature-title font-xxs-bold color-grey-900">Introducing New Features</h6>
                                        <p className="font-xxs color-grey-900">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                                <div className="mt-0"> <Link className="btn btn-brand-2 font-xxs mr-20" href="/contact">Contact Us</Link><Link className="btn btn-link-medium font-xxs" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="box-image-touch" />
                </section>
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Meet Our Team</h4>
                        <div className="row">
                            <div className="col-sm-4 mb-50">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team1.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 mb-50">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team2.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Lori Stevens</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 mb-50">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team3.png" alt="transp" /></div>
                                    <div className="cardInfo">
                                        <h6 className="color-brand-2">Devon Lane</h6>
                                        <div className="info-bottom">
                                            <p className="color-grey-500">Founder / CEO</p>
                                            <p className="color-grey-500"><Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg></Link><Link href="#">
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z" fill="none" />
                                                    </svg></Link><Link href="#">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z" fill="none" />
                                                    </svg></Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Testimonials</h4>
                        <div className="row">
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Guy Hawkins</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between">
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author2.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Eleanor Pena</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between">
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author3.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Cody Fisher</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between">
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-30">
                                <div className="card-testimonial-grid">
                                    <div className="box-author mb-25"><Link href="#"><img src="/assets/imgs/page/homepage1/author3.png" alt="transp" /></Link>
                                        <div className="author-info"><Link href="#"><span className="font-xl-bold color-brand-2 author-name">Cody Fisher</span></Link><span className="font-sm color-grey-500 department">Bank of America</span></div>
                                    </div>
                                    <p className="font-md color-grey-700">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.</p>
                                    <div className="card-bottom-info justify-content-between">
                                        <div className="rating text-start"><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><img src="/assets/imgs/template/icons/star.svg" alt="transp" /><br /><span className="font-sm color-white">For customer support</span></div><span className="font-xs color-grey-500 rate-post text-end">Rate: 4.95 / 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-55 newsletter-style">
                    <div className="container-sub">
                        <div className="box-form-request-quote-2 box-form-request-quote-3">
                            <div className="box-form-contact-leading">
                                <h2 className="title-favicon color-brand-2 mb-15">Request a Quote</h2>
                                <p className="font-md color-grey-700 mb-25">Please fill="none" All Inquiry To Get Your Total Price.</p>
                                <div className="row align-items-center">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Your name *" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Your email *" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Number *" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value>Freight type</option>
                                                <option value="Service 1">Type 1</option>
                                                <option value="Service 2">Type 2</option>
                                                <option value="Service 3">Type 3</option>
                                                <option value="Service 4">Type 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Departure City" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Delivery City" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Weight" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Height" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows={5} placeholder="Message / Note" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group"> <strong className="font-sm-bold color-grey-900">Extra Services</strong>
                                            <div className="row mt-10 box-cb-form">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input className="cd-form" type="checkbox" />Express Delivery (+$40)
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input className="cd-form" type="checkbox" />Add Insurance (+$20)
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input className="cd-form" type="checkbox" />Packaging (+$15)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12"> <Link className="btn btn-brand-1-big mr-25" href="#">
                                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                        </svg>Cost Calculation</Link><Link className="btn btn-link-medium" href="/contact">Contact Us
                                            <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-60 newsletter-style">
                    <div className="container-sub">
                        <h4 className="title-favicon-newsletter color-brand-2 mb-25">Our Blog &amp; Insights</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-single"><img src="/assets/imgs/page/homepage2/news1.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-single">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image"><Link href="/blog-single"><img src="/assets/imgs/page/homepage2/news2.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                                    <div className="card-info"><Link href="/blog-single">
                                        <h5 className="color-brand-2">How to find reliable logistics company in China and Asia</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec risus.</p>
                                        <div className="line-border" />
                                        <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}