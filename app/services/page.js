"use client";
import { useEffect, useState } from "react";
import CountUp from "@/components/elements/CounterUp";
import Accordion from "@/components/elements/Accordion";
import Pricing2 from "@/components/sections/homepage2/Pricing2";
import Link from "next/link";

export default function Service() {
  const [isOpen, setOpen] = useState(false);
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("counterUp");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="box-pageheader-1 box-pageheader-services text-center">
            <span className="btn btn-tag wow animate__animated animate__fadeIn">
              What we offer
            </span>
            <h2 className="color-brand-2 mt-15 mb-10 wow animate__animated animate__fadeIn">
              Our Services
            </h2>
            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
              We have been pioneering the industry in Europe for 20 years, and
              delivering value
              <br className="d-none d-lg-block" />
              products within given timeframe, every single time.
            </p>
          </div>
        </div>
      </section>
      <section className="section mt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
              <div className="cardService">
                <div className="cardImage">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage3/service1.png"
                      alt="transp"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage1/delivery.png"
                      alt="transp"
                    />
                    <h6 className="color-brand-2">Sea Forwarding</h6>
                    <p className="font-xs color-grey-900">
                      We offer specialized departments for continental
                      transports.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
              <div className="cardService">
                <div className="cardImage">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage3/service2.png"
                      alt="transp"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage3/plane.png"
                      alt="transp"
                    />
                    <h6 className="color-brand-2">Air Freight Forwarding</h6>
                    <p className="font-xs color-grey-900">
                      We offer specialized departments for continental
                      transports.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
              <div className="cardService">
                <div className="cardImage">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage3/service3.png"
                      alt="transp"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage1/delivery.png"
                      alt="transp"
                    />
                    <h6 className="color-brand-2">Land Transportation</h6>
                    <p className="font-xs color-grey-900">
                      We offer specialized departments for continental
                      transports.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
              <div className="cardService">
                <div className="cardImage">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage3/service4.png"
                      alt="transp"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage1/train.png"
                      alt="transp"
                    />
                    <h6 className="color-brand-2">Railway Logistics</h6>
                    <p className="font-xs color-grey-900">
                      We offer specialized departments for continental
                      transports.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-50 wow animate__animated animate__fadeIn">
              <div className="cardService">
                <div className="cardImage">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/services/warehouse.png"
                      alt="transp"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage4/pallet.png"
                      alt="transp"
                    />
                    <h6 className="color-brand-2">
                      Warehouse &amp; Distribution
                    </h6>
                    <p className="font-xs color-grey-900">
                      We offer specialized departments for continental
                      transports.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-50 wow animate__animated animate__fadeIn">
              <div className="cardService">
                <div className="cardImage">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/services/train.png"
                      alt="transp"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage1/worldwide.png"
                      alt="transp"
                    />
                    <h6 className="color-brand-2">Cross Border</h6>
                    <p className="font-xs color-grey-900">
                      We offer specialized departments for continental
                      transports.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-50 wow animate__animated animate__fadeIn">
              <div className="cardService">
                <div className="cardImage">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/services/ship.png"
                      alt="transp"
                    />
                  </Link>
                </div>
                <div className="cardInfo">
                  {" "}
                  <Link href="/service-detail">
                    <img
                      src="/assets/imgs/page/homepage1/order.png"
                      alt="transp"
                    />
                    <h6 className="color-brand-2">Customs Brokerages</h6>
                    <p className="font-xs color-grey-900">
                      We offer specialized departments for continental
                      transports.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-50" />
      <section className="section pt-20 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="btn btn-tag wow animate__animated animate__fadeIn">
                Get in touch
              </span>
              <h3 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">
                Proud to Deliver
                <br className="d-none d-lg-block" />
                Excellence Every Time
              </h3>
              <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit laborum — semper quis lectus nulla.
                Interactively transform magnetic growth strategies whereas
                prospective "outside the box" thinking.
              </p>
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                    Boost your sale
                  </h6>
                  <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
                <div className="col-lg-6 mb-30">
                  <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                    Introducing New Features
                  </h6>
                  <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">
                    The latest design trends meet hand-crafted templates.
                  </p>
                </div>
              </div>
              <div className="mt-20">
                <Link
                  className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn"
                  href="/contact"
                >
                  Contact Us
                </Link>
                <Link
                  className="btn btn-link-medium wow animate__animated animate__fadeIn"
                  href="#"
                >
                  Learn More
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="certified-icon wow animate__animated animate__fadeIn">
                <img
                  src="/assets/imgs/page/homepage3/certified.png"
                  alt="transp"
                />
              </div>
              <div className="row">
                <div className="col-md-6 wow animate__animated animate__fadeIn">
                  <img
                    className="mt-90"
                    src="/assets/imgs/page/homepage3/img-info-5.png"
                    alt="transp"
                  />
                </div>
                <div className="col-md-6 wow animate__animated animate__fadeIn">
                  <img
                    src="/assets/imgs/page/homepage3/img-info-5-2.png"
                    alt="transp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-60 pb-65 bg-whychooseus-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1" />
            <div className="col-lg-5 mb-30">
              <img
                className="mb-20"
                src="/assets/imgs/template/icons/favicon.svg"
                alt="transp"
              />
              <h2 className="color-white mb-50 wow animate__animated animate__fadeIn">
                We take care about
                <span className="color-brand-1">transportation</span>for your
                business
              </h2>
              <Link
                className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn"
                href="#"
              >
                <svg
                  className="mr-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                View All Projects
              </Link>
            </div>
            <div className="col-lg-5 mb-30">
              <div className="row">
                <div className="col-sm-6">
                  <div className="box-item-number box-item-number-white mb-30">
                    <div className="item-number">
                      <h2 className="color-brand-1">
                        <span className="counterUp count">
                          {inViewport && <CountUp end={165} duration={10} />}
                        </span>
                      </h2>
                      <h6 className="color-brand-1">Delivered packages.</h6>
                    </div>
                  </div>
                  <div className="box-item-number box-item-number-2 mb-30">
                    <div className="item-number">
                      <h2 className="color-white">
                        <span className="count">
                          {inViewport && <CountUp end={345} duration={10} />}
                        </span>
                      </h2>
                      <h6 className="color-white">Countries covered</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box-item-number box-item-number-3 mt-30 mb-30">
                    <div className="item-number">
                      <h2 className="color-white">
                        <span className="count">
                          {inViewport && <CountUp end={245} duration={10} />}
                        </span>
                      </h2>
                      <h6 className="color-white">Satisfied Clients</h6>
                    </div>
                  </div>
                  <div className="box-item-number box-item-number-4 mb-30">
                    <div className="item-number">
                      <h2 className="color-white">
                        <span className="count">
                          {inViewport && <CountUp end={546} duration={10} />}
                        </span>
                      </h2>
                      <h6 className="color-white">Tons of goods</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mt-200 bg-2 bg-request-quote-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-form-request-quote-2 box-form-request-quote-3">
                <div className="box-form-contact-leading">
                  <h2 className="title-favicon color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                    Request a Quote
                  </h2>
                  <p className="font-md color-grey-700 mb-25 wow animate__animated animate__fadeIn">
                    Please fill="none" All Inquiry To Get Your Total Price.
                  </p>
                  <div className="row align-items-center wow animate__animated animate__fadeIn">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your name *"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your email *"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Number *"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Departure City"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Delivery City"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Weight"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Height"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Message / Note"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <strong className="font-sm-bold color-grey-900">
                          Extra Services
                        </strong>
                        <div className="row mt-10 box-cb-form">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <input className="cd-form" type="checkbox" />
                              Express Delivery (+$40)
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <input className="cd-form" type="checkbox" />
                              Add Insurance (+$20)
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <input className="cd-form" type="checkbox" />
                              Packaging (+$15)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <Link className="btn btn-brand-1-big mr-25" href="#">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                          />
                        </svg>
                        Cost Calculation
                      </Link>
                      <Link className="btn btn-link-medium" href="/contact">
                        Contact Us
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list-how-works">
                <li className="wow animate__animated animate__fadeIn">
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/order.png"
                        alt="transp"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2">Customer places order</h5>
                    <p className="font-md color-grey-700">
                      Inspection and quality check of goods
                    </p>
                  </div>
                </li>
                <li className="wow animate__animated animate__fadeIn">
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/payment.png"
                        alt="transp"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2">Payment successful</h5>
                    <p className="font-md color-grey-700">
                      Payoneer, Paypal, or Visa master card
                    </p>
                  </div>
                </li>
                <li className="wow animate__animated animate__fadeIn">
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/warehouse.png"
                        alt="transp"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2">Warehouse receives order</h5>
                    <p className="font-md color-grey-700">
                      Check the accuracy of the goods.
                    </p>
                  </div>
                </li>
                <li className="wow animate__animated animate__fadeIn">
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/picked.png"
                        alt="transp"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2">
                      Item picked, packed &amp; shipped
                    </h5>
                    <p className="font-md color-grey-700">
                      Ship the goods to a local carrier
                    </p>
                  </div>
                </li>
                <li className="wow animate__animated animate__fadeIn">
                  <div className="image-how">
                    <span className="img">
                      <img
                        src="/assets/imgs/page/homepage1/delivery.png"
                        alt="transp"
                      />
                    </span>
                  </div>
                  <div className="info-how">
                    <h5 className="color-brand-2">
                      Delivered &amp; Measure success
                    </h5>
                    <p className="font-md color-grey-700">
                      Update order status on the system
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Pricing2 />
      <div className="line-border" />
      <section className="section pt-80 mb-70 bg-faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-faqs-left">
                <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">
                  FAQs
                </h2>
                <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">
                  Feeling inquisitive? Have a read through some of our FAQs or
                  contact our supporters for help
                </p>
                <div className="box-gallery-faqs">
                  <div className="image-top">
                    <img
                      src="/assets/imgs/page/homepage1/img-faq1.png"
                      alt="transp"
                    />
                  </div>
                  <div className="image-bottom">
                    <div className="image-faq-1">
                      <img
                        src="/assets/imgs/page/homepage1/img-faq2.png"
                        alt="transp"
                      />
                    </div>
                    <div className="image-faq-2">
                      <img
                        src="/assets/imgs/page/homepage1/img-faq3.png"
                        alt="transp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-accordion">
                <Accordion />
                <div className="line-border mt-50 mb-50" />
                <h3 className="color-brand-2 wow animate__animated animate__fadeIn">
                  Nead more help?
                </h3>
                <div className="mt-20">
                  <Link
                    className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                  <Link
                    className="btn btn-link-medium wow animate__animated animate__fadeIn"
                    href="#"
                  >
                    Learn More
                    <svg
                      className="w-6 h-6 icon-16 ml-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section bg-map d-block">
        <div className="container">
          <div className="box-newsletter">
            <h3 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">
              Get in Touch
            </h3>
            <div className="row">
              <div className="col-lg-5 mb-30">
                <div className="form-newsletter wow animate__animated animate__fadeIn">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Your name *"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Your email *"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Weight"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Height"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message / Note"
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          className="btn btn-brand-1-big"
                          type="submit"
                          defaultValue="Submit Now"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-7 mb-30">
                <div className="d-flex box-newsletter-right">
                  <div className="box-map-2 wow animate__animated animate__fadeIn">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s"
                      height={242}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <ul className="list-info-footer">
                    <li className="wow animate__animated animate__fadeIn">
                      <div className="cardImage">
                        <span className="icon-brand-1">
                          <img
                            src="/assets/imgs/page/homepage2/address.svg"
                            alt="transp"
                          />
                        </span>
                      </div>
                      <div className="cardInfo">
                        <h6 className="font-sm-bold color-grey-900">Address</h6>
                        <p className="font-sm color-grey-900">
                          65 Allerton Street 901 N Pitt Str, USA
                        </p>
                      </div>
                    </li>
                    <li className="wow animate__animated animate__fadeIn">
                      <div className="cardImage">
                        <span className="icon-brand-1">
                          <img
                            src="/assets/imgs/page/homepage2/email.svg"
                            alt="transp"
                          />
                        </span>
                      </div>
                      <div className="cardInfo">
                        <h6 className="font-sm-bold color-grey-900">Email</h6>
                        <p className="font-sm color-grey-900">
                          contact@transp.com
                        </p>
                      </div>
                    </li>
                    <li className="wow animate__animated animate__fadeIn">
                      <div className="cardImage">
                        <span className="icon-brand-1">
                          <img
                            src="/assets/imgs/page/homepage2/phone.svg"
                            alt="transp"
                          />
                        </span>
                      </div>
                      <div className="cardInfo">
                        <h6 className="font-sm-bold color-grey-900">
                          Telephone
                        </h6>
                        <p className="font-sm color-grey-900">
                          (+380) 50 318 47 07 - (+182) 50 318 47 07
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
  );
}
