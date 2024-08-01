
export default function Newsletter1() {
    return (
        <>
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
                                            <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="transp" /></span>
                                            </div>
                                            <div className="cardInfo">
                                                <h6 className="font-sm-bold color-grey-900">Address</h6>
                                                <p className="font-sm color-grey-900">65 Allerton Street 901 N Pitt Str, USA</p>
                                            </div>
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span>
                                            </div>
                                            <div className="cardInfo">
                                                <h6 className="font-sm-bold color-grey-900">Email</h6>
                                                <p className="font-sm color-grey-900">contact@transp.com</p>
                                            </div>
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span>
                                            </div>
                                            <div className="cardInfo">
                                                <h6 className="font-sm-bold color-grey-900">Telephone</h6>
                                                <p className="font-sm color-grey-900">(+380) 50 318 47 07 - (+182) 50 318 47 07
                                                </p>
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
