import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();

  return (
    <>
      <ul className="main-menu">
        <li className="has-children">
          <Link className="active" href="/">
            Home
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/">Homepage - 1</Link>
            </li>
            <li>
              <Link href="/index-2">Homepage - 2</Link>
            </li>
            <li>
              <Link href="/index-3">Homepage - 3</Link>
            </li>
            <li>
              <Link href="/index-4">Homepage - 4</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li className="has-children">
          <Link href="#">Services</Link>
          <div className="sub-menu five-col">
            <div className="menu-col">
              <h6 className="color-brand-2 mb-15">Sea Forwarding</h6>
              <div className="menu-image">
                <img src="/assets/imgs/page/homepage1/menu1.png" alt="transp" />
              </div>
              <ul className="megamenu">
                <li>
                  <Link href="/services">Container Shipping</Link>
                </li>
                <li>
                  <Link href="/services">Bulk Shipping</Link>
                </li>
                <li>
                  <Link href="/services">Roll-on/Roll-off Shipping</Link>
                </li>
                <li>
                  <Link href="/services">Break Bulk Shipping</Link>
                </li>
                <li>
                  <Link href="/services">Project Cargo Shipping</Link>
                </li>
              </ul>
            </div>
            <div className="menu-col">
              <h6 className="color-brand-2 mb-15">Air Freight Forwarding</h6>
              <div className="menu-image">
                <img src="/assets/imgs/page/homepage1/menu2.png" alt="transp" />
              </div>
              <ul className="megamenu">
                <li>
                  <Link href="/services">General Cargo</Link>
                </li>
                <li>
                  <Link href="/services">Express Shipping</Link>
                </li>
                <li>
                  <Link href="/services">Dangerous Goods</Link>
                </li>
                <li>
                  <Link href="/services">Oversized Cargo</Link>
                </li>
                <li>
                  <Link href="/services">Perishable Goods</Link>
                </li>
              </ul>
            </div>
            <div className="menu-col">
              <h6 className="color-brand-2 mb-15">Land Transportation</h6>
              <div className="menu-image">
                <img src="/assets/imgs/page/homepage1/menu3.png" alt="transp" />
              </div>
              <ul className="megamenu">
                <li>
                  <Link href="/services">Road Freight</Link>
                </li>
                <li>
                  <Link href="/services">Rail Freight</Link>
                </li>
                <li>
                  <Link href="/services">Intermodal Transportation</Link>
                </li>
                <li>
                  <Link href="/services">
                    Less-than-Truckload (LTL) Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/services">Specialized Transportation</Link>
                </li>
              </ul>
            </div>
            <div className="menu-col">
              <h6 className="color-brand-2 mb-15">Railway Logistics</h6>
              <div className="menu-image">
                <img src="/assets/imgs/page/homepage1/menu4.png" alt="transp" />
              </div>
              <ul className="megamenu">
                <li>
                  <Link href="/services">Rail Freight Transportation</Link>
                </li>
                <li>
                  <Link href="/services">Rail Terminal Services</Link>
                </li>
                <li>
                  <Link href="/services">Rail Freight Forwarding</Link>
                </li>
                <li>
                  <Link href="/services">Intermodal Transportation</Link>
                </li>
                <li>
                  <Link href="/services">Rail Logistics Consulting</Link>
                </li>
              </ul>
            </div>
            <div className="menu-col">
              <h6 className="color-brand-2 mb-15">Warehouse</h6>
              <div className="menu-image">
                <img src="/assets/imgs/page/homepage1/menu5.png" alt="transp" />
              </div>
              <ul className="megamenu">
                <li>
                  <Link href="/services">Warehousing</Link>
                </li>
                <li>
                  <Link href="/services">Distribution Center Operations</Link>
                </li>
                <li>
                  <Link href="/services">E-Commerce Fulfillment</Link>
                </li>
                <li>
                  <Link href="/services">Reverse Logistics</Link>
                </li>
                <li>
                  <Link href="/services">Inventory Management</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="has-children">
          <Link href="#">Pages</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/service-detail">Service Detail</Link>
            </li>
            <li>
              <Link href="/trackyourparcel">Track Your Parcel</Link>
            </li>
            <li>
              <Link href="/workprocess">Work Process</Link>
            </li>
            <li>
              <Link href="/request-a-quote">Request a quote</Link>
            </li>
            <li>
              <Link href="/our-team">Our team</Link>
            </li>
            <li>
              <Link href="/faqs">FAQ's</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/comingsoon">Coming soon</Link>
            </li>
            <li>
              <Link href="/newsletter">Newsletter</Link>
            </li>
            <li>
              <Link href="/404">Error 404</Link>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <Link href="/blog">Blog</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/blog-single">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
