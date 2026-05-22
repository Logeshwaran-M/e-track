import React, { useEffect, useState } from "react";
import useScrollAnimations from "../useScrollAnimations.js";
import ImgAbout from "../assets/images/2 Residential House.jpg";

export default function TitleSearchCompanyInUsa() {
  // Activate scroll animations
  useScrollAnimations();

  // Scroll to top on load and set page SEO metadata from DOCX
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set dynamic SEO Title: Meta Title: Professional Title Services in United States | eTrack
    const originalTitle = document.title;
    document.title = "Professional Title Services in United States | eTrack";

    // Set dynamic SEO Description: Meta Description : eTrack Title Services Inc. offers dependable title services across the United States with accurate property research, lien checks, and nationwide title support.
    let metaDescription = document.querySelector('meta[name="description"]');
    let originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "eTrack Title Services Inc. offers dependable title services across the United States with accurate property research, lien checks, and nationwide title support."
    );

    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        if (originalDescription) {
          metaDescription.setAttribute("content", originalDescription);
        } else {
          metaDescription.remove();
        }
      }
    };
  }, []);

  // Accordion state for FAQs
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Nationwide Services (All 6 strictly from docx)
  const nationwideServices = [
    {
      title: "Current Owner Search",
      desc: "Verify present property ownership records while identifying easements, restrictions, encumbrances, and other title-related concerns associated with the property.",
      icon: "bi-person-badge",
    },
    {
      title: "Two-Owner Search",
      desc: "Detailed review of the two latest ownership transfers, including chain-of-title validation and historical ownership documentation.",
      icon: "bi-people",
    },
    {
      title: "30/40/60-Year Full Title Search",
      desc: "Comprehensive historical title examination designed for long-term ownership verification, due diligence, and property risk assessment.",
      icon: "bi-clock-history",
    },
    {
      title: "Lien & Judgment Search",
      desc: "Identify active mortgages, federal or state tax liens, judgments, unpaid obligations, and financial claims that may affect property ownership.",
      icon: "bi-shield-exclamation",
    },
    {
      title: "Tax Search",
      desc: "Examine current property taxes, unpaid amounts, assessments, and delinquent tax obligations tied to the property.",
      icon: "bi-calculator",
    },
    {
      title: "Document Retrieval & Recording",
      desc: "Access essential property documents including deeds, mortgages, assignments, releases, and public land records for compliance and verification purposes.",
      icon: "bi-file-earmark-arrow-down",
    },
  ];

  // Offshore Title Support Services (strictly from docx)
  const offshoreServices = [
    {
      title: "Scalable Title Production",
      desc: "Dependable assistance for both single title orders and high-volume title production projects with consistent turnaround times and reliable quality.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Commitment Typing & Data Entry",
      desc: "Professional title commitment typing and organized data entry services supporting title production and mortgage processing workflows.",
      icon: "bi-keyboard",
    },
    {
      title: "Quality Review & Verification",
      desc: "Multi-level quality control procedures developed to improve data accuracy, maintain compliance, and minimize operational mistakes.",
      icon: "bi-check2-circle",
    },
    {
      title: "Cost-Effective Title Operations",
      desc: "Lower operational expenses while maintaining dependable title search quality and efficient processing performance.",
      icon: "bi-cash-stack",
    },
  ];

  // Why Choose Items (strictly from docx)
  const whyChooseItems = [
    {
      title: "Experienced Title Specialists",
      desc: "Our skilled team brings extensive expertise in title examination, property research, public records analysis, and mortgage support solutions.",
      icon: "bi-patch-check",
    },
    {
      title: "Customized Service Solutions",
      desc: "Flexible workflows and tailored service models created to meet the requirements of title companies, lenders, law firms, and real estate organizations.",
      icon: "bi-sliders",
    },
    {
      title: "Technology-Driven Processes",
      desc: "We utilize advanced automation tools, intelligent processing systems, and modern workflows to enhance turnaround times, consistency, and accuracy.",
      icon: "bi-cpu",
    },
    {
      title: "Dedicated Customer Support",
      desc: "Responsive communication, seamless onboarding, and dependable assistance ensure a smooth and professional service experience.",
      icon: "bi-headset",
    },
  ];

  // Frequently Asked Questions (strictly from docx)
  const faqs = [
    {
      q: "1. What is a title search?",
      a: "A title search is a detailed review of public property records conducted to confirm ownership history and uncover legal or financial issues connected to a property.",
    },
    {
      q: "2. What is the standard turnaround time for a title search?",
      a: "Completion timelines vary depending on the search type and county record availability, but most searches are completed efficiently through streamlined digital systems.",
    },
    {
      q: "3. What details are included in a complete title search?",
      a: "A complete title search commonly includes ownership history, liens, judgments, mortgages, tax records, and recorded property documents.",
    },
    {
      q: "4. Why are lien and judgment searches necessary?",
      a: "These searches help uncover unpaid debts, legal claims, and financial liabilities that could impact property ownership or real estate transactions.",
    },
    {
      q: "5. Does eTrack manage bulk title processing projects?",
      a: "Yes. eTrack Title Services Inc. offers scalable offshore title support capable of handling large-volume title processing requirements while maintaining strict quality standards.",
    },
    {
      q: "6. How does eTrack maintain title search accuracy?",
      a: "We combine experienced title professionals, advanced verification systems, and multiple quality review processes to provide accurate and reliable results.",
    },
    {
      q: "7. Do you provide title search coverage across the United States?",
      a: "Yes. eTrack Title Services Inc. delivers nationwide title search services across counties and jurisdictions throughout the United States.",
    },
    {
      q: "8. Who commonly uses title search services?",
      a: "Our services are frequently utilized by lenders, title companies, attorneys, investors, real estate professionals, and mortgage servicing organizations.",
    },
  ];

  return (
    <div className="title-search-landing-page">
      {/* --- HERO SECTION (strictly docx page contents) --- */}
      <section
        className="bg-gradient-blue text-center text-white position-relative overflow-hidden"
        style={{
          padding: "160px 0 120px 0",
          backgroundImage: "linear-gradient(90deg, var(--brand-blue-mid) 0%, var(--brand-blue-dark) 100%)",
        }}
      >
        <div
          className="position-absolute"
          style={{
            inset: 0,
            opacity: 0.15,
            background: "radial-gradient(circle at 30% 30%, var(--brand-sky-accent) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Title Services in United States */}
              <h1
                className="display-3 fw-bold mb-3 reveal fade-bottom"
                style={{
                  textShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                  letterSpacing: "-0.5px",
                }}
              >
                Title Services in United States
              </h1>
              
              {/* Trusted Title Search Services Across the United States */}
              <h2
                className="h3 fw-semibold mb-4 reveal fade-bottom"
                style={{ color: "var(--brand-sky-accent)", opacity: 0.95 }}
              >
                Trusted Title Search Services Across the United States
              </h2>
              
              {/* Tagline & Lead Paragraph: Nationwide Title Solutions for Real Estate... */}
              <p
                className="lead mb-5 reveal fade-bottom mx-auto"
                style={{
                  maxWidth: "850px",
                  fontSize: "1.25rem",
                  lineHeight: "1.7",
                  opacity: 0.9,
                }}
              >
                <strong>Nationwide Title Solutions for Real Estate and Mortgage Professionals.</strong> eTrack Title Services Inc. provides dependable nationwide title search services for lenders, attorneys, real estate agencies, investors, mortgage companies, and title professionals seeking fast, precise, and reliable property title information throughout the United States.
              </p>
              
              <div className="reveal fade-bottom">
                <a href="#contact-us" className="brand-btn text-decoration-none px-5 py-3 fs-5">
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION (strictly docx page contents) --- */}
      <section className="section-padding-lg bg-light-section" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal slide-left">
              <h2
                className="mb-4 fw-bold text-lg-start"
                style={{
                  color: "var(--brand-blue-dark)",
                  fontSize: "2.5rem",
                  position: "relative",
                  paddingBottom: "15px",
                }}
              >
                About eTrack Title Services Inc.
                <span
                  className="position-absolute start-0 bottom-0"
                  style={{
                    width: "60px",
                    height: "4px",
                    background: "var(--brand-sky-accent)",
                    borderRadius: "2px",
                  }}
                ></span>
              </h2>
              <p
                className="mb-4 text-muted"
                style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
              >
                eTrack Title Services Inc. is a reliable provider of title research and offshore title support solutions specializing in ownership verification, lien investigations, document retrieval, and comprehensive title examination services. Our goal is to assist real estate and mortgage professionals in simplifying title operations, reducing risks, and improving transaction efficiency.
              </p>
              <p
                className="text-muted mb-0"
                style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
              >
                Backed by experienced title researchers, technology-driven systems, and streamlined workflows, we deliver compliant, scalable, and high-quality title support services nationwide.
              </p>
            </div>
            <div className="col-lg-6 text-center reveal slide-right">
              <div className="position-relative d-inline-block">
                <div
                  className="position-absolute rounded-3"
                  style={{
                    inset: "15px -15px -15px 15px",
                    border: "3px solid var(--brand-sky-accent)",
                    zIndex: 0,
                  }}
                ></div>
                <img
                  src={ImgAbout}
                  alt="eTrack About Us"
                  className="img-fluid rounded-3 shadow-lg position-relative"
                  style={{
                    maxHeight: "450px",
                    width: "100%",
                    objectFit: "cover",
                    zIndex: 1,
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTIONS (strictly docx page contents: all 6 search types) --- */}
      <section className="section-padding-lg bg-white" id="nationwide-services">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 mb-3">Our Nationwide Title Search Services</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {nationwideServices.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 reveal fade-zoom"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="service-card p-4 h-100 d-flex flex-column"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    borderBottom: "5px solid var(--brand-sky-accent)",
                    boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 24px",
                    transition: "all 0.4s ease-in-out",
                  }}
                >
                  <div
                    className="icon-wrapper mb-4 d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(90, 217, 249, 0.12)",
                    }}
                  >
                    <i
                      className={`bi ${item.icon} fs-3`}
                      style={{ color: "var(--brand-blue-mid)" }}
                    ></i>
                  </div>
                  <h4 className="fw-bold mb-3 brand-text" style={{ color: "var(--brand-blue-dark)" }}>
                    {item.title}
                  </h4>
                  <p className="text-muted flex-grow-1 mb-0" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OFFSHORE TITLE SUPPORT SERVICES SECTION (strictly docx page contents) --- */}
      <section className="section-padding-lg bg-light-section" id="offshore-support">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 mb-3">Offshore Title Support Services</h2>
          </div>

          <div className="row g-4">
            {offshoreServices.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 reveal fade-bottom"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="text-center p-4 h-100 rounded-3 bg-white"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 20px",
                    border: "1px solid #f0f0f0",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "rgba(90, 217, 249, 0.25) 0px 10px 25px";
                    e.currentTarget.style.borderColor = "var(--brand-sky-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 5px 20px";
                    e.currentTarget.style.borderColor = "#f0f0f0";
                  }}
                >
                  <div
                    className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      background: "var(--section-bg-light)",
                      color: "var(--brand-blue-mid)",
                    }}
                  >
                    <i className={`bi ${item.icon} fs-2`}></i>
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: "var(--brand-blue-dark)" }}>
                    {item.title}
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SECTION (strictly docx page contents) --- */}
      <section className="section-padding-lg bg-white" id="why-choose">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4">Why Choose eTrack Title Services Inc.?</h2>
          </div>

          <div className="row g-4">
            {whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="col-md-6 reveal fade-bottom"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="d-flex p-4 bg-light rounded-3 shadow-sm h-100"
                  style={{ borderLeft: "4px solid var(--brand-sky-accent)" }}
                >
                  <div
                    className="me-4 text-primary fs-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                      background: "rgba(90, 217, 249, 0.12)",
                      flexShrink: 0,
                    }}
                  >
                    <i className={`bi ${item.icon}`} style={{ color: "var(--brand-blue-mid)" }}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2" style={{ color: "var(--brand-blue-dark)" }}>
                      {item.title}
                    </h5>
                    <p className="text-muted mb-0" style={{ fontSize: "0.98rem", lineHeight: "1.6" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (strictly docx page contents) --- */}
      <section className="section-padding-lg bg-light-section" id="faq">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 mb-3">Frequently Asked Questions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9 reveal fade-bottom">
              <div className="accordion-wrapper shadow-sm rounded-3 overflow-hidden">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="accordion-item border-bottom"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(0,0,0,0.06)",
                        marginBottom: "6px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <button
                        className={`d-flex justify-content-between align-items-center w-100 text-start py-3 px-4 fw-bold border-0`}
                        style={{
                          backgroundColor: isOpen ? "rgba(90, 217, 249, 0.08)" : "#ffffff",
                          color: "var(--brand-blue-dark)",
                          fontSize: "1.08rem",
                          transition: "all 0.3s ease",
                          outline: "none",
                        }}
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{faq.q}</span>
                        <i
                          className={`bi bi-chevron-down ms-3 transition-all`}
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                            color: "var(--brand-blue-mid)",
                          }}
                        ></i>
                      </button>
                      <div
                        style={{
                          maxHeight: isOpen ? "200px" : "0px",
                          overflow: "hidden",
                          transition: "max-height 0.4s cubic-bezier(0, 1, 0, 1)",
                        }}
                      >
                        <div
                          className="p-4 text-muted bg-light"
                          style={{
                            fontSize: "1rem",
                            lineHeight: "1.6",
                            borderTop: "1px solid rgba(0,0,0,0.05)",
                          }}
                        >
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & CTA SECTION (strictly docx page contents) --- */}
      <section
        id="contact-us"
        className="section-padding-lg bg-gradient-blue text-white"
        style={{
          backgroundImage: "linear-gradient(90deg, var(--brand-blue-mid) 0%, var(--brand-blue-dark) 100%)",
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column: Contact Details */}
            <div className="col-lg-6 reveal slide-left">
              {/* Reliable Title Search Services Across the USA */}
              <h2 className="display-5 fw-bold mb-4 text-white text-lg-start">
                Reliable Title Search Services Across the USA
              </h2>
              
              {/* Work with eTrack Title Services Inc... */}
              <p className="lead mb-4 text-white" style={{ opacity: 0.9 }}>
                Work with eTrack Title Services Inc. for fast, accurate, and dependable title search solutions customized to support your real estate and mortgage business operations.
              </p>

              {/* Contact Us Today Card */}
              <div
                className="p-4 rounded-3 mt-4"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h4 className="h5 fw-bold mb-4 text-white text-uppercase" style={{ letterSpacing: "1px" }}>
                  Contact Us Today
                </h4>
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-geo-alt-fill text-sky-blue fs-5 me-3" style={{ color: "var(--brand-sky-accent)" }}></i>
                  <div>
                    <strong className="text-white">eTrack Title Services Inc.</strong>
                    <p className="mb-0 text-white-50">21189 Dana Ct, Ashburn, VA 20148</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill text-sky-blue fs-5 me-3" style={{ color: "var(--brand-sky-accent)" }}></i>
                  <div>
                    <span className="text-white-50 me-2">Phone:</span>
                    <a href="tel:7036494441" className="text-white fw-bold text-decoration-none hover-cyan">
                      703-649-4441
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope-fill text-sky-blue fs-5 me-3" style={{ color: "var(--brand-sky-accent)" }}></i>
                  <div>
                    <span className="text-white-50 me-2">Email:</span>
                    <a href="mailto:orders@etracktitle.com" className="text-white fw-bold text-decoration-none hover-cyan">
                      orders@etracktitle.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Call to Action Card */}
            <div className="col-lg-6 reveal slide-right">
              <div className="bg-white text-dark p-5 rounded-4 shadow-lg border border-light">
                {/* Call to Action */}
                <h3 className="h3 fw-bold mb-3 brand-text" style={{ color: "var(--brand-blue-dark)" }}>
                  Get Started Today
                </h3>
                
                {/* Looking for reliable and efficient... */}
                <p className="text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                  Looking for reliable and efficient title search services anywhere in the United States? Contact eTrack Title Services Inc. today for trusted nationwide title search solutions and offshore title support tailored to your business requirements.
                </p>

                <div className="my-4 p-4 rounded-3 text-center" style={{ background: "var(--section-bg-light)" }}>
                  <i className="bi bi-mailbox2 display-4 mb-3" style={{ color: "var(--brand-blue-mid)" }}></i>
                  <h5 className="fw-bold mb-2">Ready to place an order?</h5>
                  <p className="text-muted small">Our inbox orders@etracktitle.com is monitored continuously.</p>
                </div>

                <a
                  href="mailto:orders@etracktitle.com"
                  className="brand-btn w-100 text-center text-decoration-none d-block py-3 fs-5"
                >
                  <i className="bi bi-envelope-open-fill me-2"></i> Email orders@etracktitle.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
