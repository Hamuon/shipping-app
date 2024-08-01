import Link from "next/link";

export default function FooterNewsletter() {
    return (
        <>
            <footer className="footer footer-newsletter">
                <div className="footer-1">
                    <div className="container-sub">
                        <div className="row">
                            <div className="col-sm-6 mb-30">
                                <div className="mb-20"><img src="assets/imgs/template/logo-footer.svg" alt="transp" /></div>
                                <p className="font-xs mb-20 color-white">We fuse our global network with our depth of expertise in
                                    air freight, ocean freight, railway transportation, trucking, and multimode transportation,
                                    also we are providing sourcing, warehousing, E-commercial fulfillment, and value-added
                                    service to our customers including kitting, assembly, customized package and business
                                    inserts, etc.</p>
                                <h6 className="font-sm color-brand-1">Follow Us</h6>
                                <div className="mt-15"><Link className="icon-socials icon-facebook" href="#" /><Link className="icon-socials icon-instagram" href="#" /><Link className="icon-socials icon-twitter" href="#" /><Link className="icon-socials icon-youtube" href="#" /><Link className="icon-socials icon-skype" href="#" /></div>
                            </div>
                            <div className="col-sm-3 mb-30">
                                <h6 className="mb-10 color-brand-1">Company</h6>
                                <ul className="menu-footer">
                                    <li><Link href="/about">Mission &amp; Vision</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/career">Careers</Link></li>
                                    <li><Link href="#">Press &amp; Media</Link></li>
                                    <li><Link href="#">Advertising</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-3 mb-30">
                                <h6 className="mb-10 color-brand-1">Services</h6>
                                <ul className="menu-footer">
                                    <li><Link href="#">Air Freight</Link></li>
                                    <li><Link href="#">Ocean Freight</Link></li>
                                    <li><Link href="#">Railway Freight</Link></li>
                                    <li><Link href="#">Warehousing</Link></li>
                                    <li><Link href="#">Distribution</Link></li>
                                    <li><Link href="#">Value added</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container-sub">
                        <div className="footer-bottom">
                            <div className="row align-items-center">
                                <div className="col-sm-5 text-center text-sm-start"><span className="color-grey-300 font-xs">©Transp
                                    Official {new Date().getFullYear()}. All right reversed.</span></div>
                                <div className="col-sm-7 text-center text-sm-end">
                                    <ul className="menu-bottom">
                                        <li><Link className="font-xs color-grey-300" href="/term-conditions">Privacy policy</Link>
                                        </li>
                                        <li><Link className="font-xs color-grey-300" href="/term-conditions">Cookies</Link></li>
                                        <li><Link className="font-xs color-grey-300" href="/term-conditions">Terms of service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
