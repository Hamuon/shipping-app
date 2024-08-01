import Link from "next/link"
export default function Contact() {

    return (
        <>
                <div className="section d-block">
                    <div className="box-map-contact wow animate__animated animate__fadeIn">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                <div className="mt-110" />
                <section className="section">
                    <div className="container position-relative">
                        <div className="box-cover-contactform">
                            <div className="row align-items-center">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="box-contactform-left">
                                        <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">Still have question?</h3>
                                        <p className="font-md color-grey-900 mb-50 wow animate__animated animate__fadeIn">Can’t find the answer you are looking for? Please chat to our friendly team.</p>
                                        <form action="#">
                                            <div className="row wow animate__animated animate__fadeIn">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={8} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 position-relative">
                                    <div className="box-contactform-right">
                                        <h5 className="color-brand-2 mb-35 wow animate__animated animate__fadeIn">Headquarters</h5>
                                        <div className="map-info"><img className="mb-25 wow animate__animated animate__fadeIn" src="/assets/imgs/template/logo.svg" alt="transp" />
                                            <p className="color-grey-700 mb-25 wow animate__animated animate__fadeIn">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                            <p className="color-grey-700 mb-10 wow animate__animated animate__fadeIn">
                                                <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>Phone: +01-246-357 (Any time 24/7)
                                            </p>
                                            <p className="color-grey-700 mb-30 wow animate__animated animate__fadeIn">
                                                <svg className="icon-16 mr-10 color-brand-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>Email: contact@transp.eu.com
                                            </p>
                                            <div className="line-border mb-25" />
                                            <p className="color-grey-700 font-md-bold wow animate__animated animate__fadeIn">Hours: 8:00 - 17:00, Mon - Sat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-100">
                    <div className="container">
                        <h2 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">We have branches in many<br className="d-none d-lg-block" />regions of the world</h2>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 mb-30">
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">We has experience in handling the formalities and documentation required for your imports and exports. We work with all international station to guarantee that your load will safely reach without any delays.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="/request-a-quote">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>Get a quote</Link></div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch1.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Transp Shipping Co. USA</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>123 Main Street, Suite 500, New York, NY 10001, USA</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+1-555-555-5555</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>contact@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch2.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Shipping Co. Europe</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>25 Avenue des Champs-Élysées, Paris, France</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+33 1 55 73 70 00</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>contact.eu@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch3.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Shipping Co. Asia Pacific</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>1-2-1 Otemachi, Chiyoda-ku, Tokyo, Japan</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+81 3 5251 5300</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>contact.jp@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-50">
                                <div className="cardService">
                                    <div className="cardImage wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/contact/branch4.png" alt="transp" /></div>
                                    <div className="cardInfo wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" />
                                        <h6 className="color-brand-2 mb-15">Shipping Co. Middle East</h6>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Address:</strong>Dubai Logistics City, Building B, Office 203, Dubai, UAE</p>
                                        <p className="font-xs color-grey-900 mb-10"><strong className="color-brand-2">Phone Number:</strong>+971 4 887 8000</p>
                                        <p className="font-xs color-grey-900"><strong className="color-brand-2">Email:</strong>contact@transp.eu.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-110 pb-100">
                    <div className="container">
                        <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Meet Our Team</h2>
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-30">
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Welcome to our tranporation services agency. We are<br className="d-none d-lg-block" />the best at our trans-portation service ever.</p>
                            </div>
                            <div className="col-md-6 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="/request-a-quote">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>Get a quote</Link></div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
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
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
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
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
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
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/homepage2/team4.png" alt="transp" /></div>
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
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team5.png" alt="transp" /></div>
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
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team6.png" alt="transp" /></div>
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
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team7.png" alt="transp" /></div>
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
                            <div className="col-xl-3 col-sm-6 mb-50 wow animate__animated animate__fadeIn">
                                <div className="cardTeam">
                                    <div className="cardImage"> <img src="/assets/imgs/page/about/team8.png" alt="transp" /></div>
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
                <div className="mt-20" />
                <div className="section bg-map d-block">
                    <div className="container">
                        <div className="box-newsletter">
                            <h3 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">Get in Touch</h3>
                            <div className="row">
                                <div className="col-lg-5 mb-30">
                                    <div className="form-newsletter wow animate__animated animate__fadeIn">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Weight" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Height" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-7 mb-30">
                                    <div className="d-flex box-newsletter-right">
                                        <div className="box-map-2 wow animate__animated animate__fadeIn">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={242} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <ul className="list-info-footer">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Address</h6>
                                                    <p className="font-sm color-grey-900">65 Allerton Street 901 N Pitt Str, USA</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Email</h6>
                                                    <p className="font-sm color-grey-900">contact@transp.com</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                                                    <p className="font-sm color-grey-900">(+380) 50 318 47 07 - (+182) 50 318 47 07</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}