"use client";
import "@/public/assets/css/style.css";
import { useEffect, useState } from "react";
import BackToTop from "@/components/elements/BackToTop";
import Footer from "@/components/layout/Footer";
import FooterNewsletter from "@/components/layout/FooterNewsletter";
import Header1 from "@/components/layout/Header1";
import Header2 from "@/components/layout/Header2";
import HeaderNewsletter from "@/components/layout/HeaderNewsletter";
import PageHead from "@/components/layout/PageHead";
import Sidebar from "@/components/layout/Sidebar";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  children,
  topBarStyle,
}) {
  const [scroll, setScroll] = useState(0);

  const [openClass, setOpenClass] = useState("");

  const handleMobileMenuOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleMobileMenuClose = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });

    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=epilogue:400,500,600,700"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <PageHead headTitle={headTitle} />
          <div className="body-overlay-1" onClick={handleMobileMenuClose} />
          {!headerStyle && (
            <Header1
              topBarStyle={topBarStyle}
              scroll={scroll}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          )}
          {headerStyle == 1 && (
            <Header1
              topBarStyle={topBarStyle}
              scroll={scroll}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          )}
          {headerStyle == 2 && (
            <Header2
              topBarStyle={topBarStyle}
              scroll={scroll}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          )}
          {headerStyle == "newsletter" && (
            <HeaderNewsletter
              topBarStyle={topBarStyle}
              scroll={scroll}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          )}
          <Sidebar
            openClass={openClass}
            handleMobileMenuClose={handleMobileMenuClose}
          />
          <main className="main">{children}</main>

          {!footerStyle && <Footer />}
          {footerStyle == 1 && <Footer />}
          {footerStyle == "newsletter" && <FooterNewsletter />}

          <BackToTop />
        </>
      </body>
    </html>
  );
}
