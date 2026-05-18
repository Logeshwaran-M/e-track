import React, { useEffect, useState } from "react";
import useScrollAnimations from "../useScrollAnimations.js";
import ImgAbout from "../assets/images/2 Residential House.jpg";

export default function GeorgiaTitleServices() {
  // Activate scroll animations
  useScrollAnimations();

  // Scroll to top on load and set SEO metadata
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set dynamic SEO Title: Meta : Top Title Search Services in Georgia, USA | Quick & Reliable
    const originalTitle = document.title;
    document.title = "Top Title Search Services in Georgia, USA | Quick & Reliable";

    // Set dynamic SEO Description: Meta Description : Expert title search services in Georgia, USA for lenders, attorneys, and real estate professionals. Get precise, fast, and dependable property reports online
    let metaDescription = document.querySelector('meta[name="description"]');
    let originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Expert title search services in Georgia, USA for lenders, attorneys, and real estate professionals. Get precise, fast, and dependable property reports online"
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

  // Nationwide Services (All 6 strictly from the Georgia docx)
  const nationwideServices = [
    {
      title: "Current Owner Search",
      desc: "Verify current property ownership records while identifying easements, restrictions, encumbrances, and title concerns associated with the property.",
      icon: "bi-person-badge",
    },
    {
      title: "Two-Owner Search",
      desc: "Detailed review of the two latest ownership transfers, including chain-of-title validation and historical ownership details.",
      icon: "bi-people",
    },
    {
      title: "30/40/60-Year Full Title Search",
      desc: "Comprehensive historical title examination developed for long-term ownership verification, property due diligence, and risk assessment.",
      icon: "bi-clock-history",
    },
    {
      title: "Lien & Judgment Search",
      desc: "Identify active mortgages, federal or state tax liens, judgments, unpaid obligations, and financial claims that may affect property ownership.",
      icon: "bi-shield-exclamation",
    },
    {
      title: "Tax Search",
      desc: "Review present property taxes, outstanding balances, assessments, and delinquent tax obligations related to the property.",
      icon: "bi-calculator",
    },
    {
      title: "Document Retrieval & Recording",
      desc: "Access important property records including deeds, mortgages, assignments, releases, and public land documents for compliance and verification purposes.",
      icon: "bi-file-earmark-arrow-down",
    },
  ];

  // Offshore Title Support Services (strictly from the Georgia docx)
  const offshoreServices = [
    {
      title: "Scalable Title Production",
      desc: "Dependable support for both individual title orders and large-scale title production projects with consistent turnaround times and reliable quality.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Commitment Typing & Data Entry",
      desc: "Professional title commitment typing and organized data entry solutions supporting title production and mortgage processing operations.",
      icon: "bi-keyboard",
    },
    {
      title: "Quality Review & Verification",
      desc: "Multi-level quality control procedures designed to improve data accuracy, maintain compliance, and minimize operational errors.",
      icon: "bi-check2-circle",
    },
    {
      title: "Cost-Effective Title Operations",
      desc: "Lower operational costs while maintaining reliable title search quality and efficient processing solutions.",
      icon: "bi-cash-stack",
    },
  ];

  // Why Choose Items (strictly from the Georgia docx)
  const whyChooseItems = [
    {
      title: "Experienced Title Specialists",
      desc: "Our knowledgeable team brings extensive experience in title examination, property research, public records analysis, and mortgage support services.",
      icon: "bi-patch-check",
    },
    {
      title: "Customized Service Solutions",
      desc: "Flexible workflows and personalized service models created to meet the requirements of title companies, lenders, law firms, and real estate organizations.",
      icon: "bi-sliders",
    },
    {
      title: "Technology-Driven Processes",
      desc: "We utilize advanced automation tools, intelligent processing systems, and modern workflows to improve turnaround speed, consistency, and accuracy.",
      icon: "bi-cpu",
    },
    {
      title: "Dedicated Customer Support",
      desc: "Responsive communication, smooth onboarding, and dependable assistance ensure a professional and efficient client experience.",
      icon: "bi-headset",
    },
  ];

  // Frequently Asked Questions (strictly 8 from the Georgia docx)
  const faqs = [
    {
      q: "1. What is a title search?",
      a: "A title search is a thorough review of public property records conducted to verify ownership history and uncover legal or financial issues linked to a property.",
    },
    {
      q: "2. How long does a title search usually take?",
      a: "The turnaround time depends on the search type and county record accessibility, but most searches are completed efficiently through optimized digital workflows.",
    },
    {
      q: "3. What details are included in a complete title search?",
      a: "A complete title search commonly includes ownership history, liens, judgments, mortgages, tax information, and recorded property documents.",
    },
    {
      q: "4. Why are lien and judgment searches necessary?",
      a: "These searches help uncover unpaid debts, legal claims, and financial liabilities that may impact ownership rights or property transfers.",
    },
    {
      q: "5. Does eTrack handle bulk title processing projects?",
      a: "Yes. eTrack Title Services Inc. offers scalable offshore title support services capable of managing high-volume title processing requirements with strict quality assurance procedures.",
    },
    {
      q: "6. How does eTrack maintain title search accuracy?",
      a: "We combine experienced title professionals, advanced verification technology, and multiple quality review processes to provide accurate and dependable results.",
    },
    {
      q: "7. Do you offer title search services throughout the USA?",
      a: "Yes. eTrack Title Services Inc. delivers nationwide title search coverage across counties and jurisdictions throughout the United States.",
    },
    {
      q: "8. Who benefits from title search services?",
      a: "Our services are commonly used by lenders, title companies, attorneys, investors, real estate professionals, and mortgage servicing organizations.",
    },
  ];

  return (
    <div className="georgia-title-services-page">
      {/* --- HERO SECTION --- */}
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
              {/* Title Search Services Georgia */}
              <h1
                className="display-3 fw-bold mb-3 reveal fade-bottom"
                style={{
                  textShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                  letterSpacing: "-0.5px",
                }}
              >
                Title Search Services Georgia
              </h1>
              
              {/* Trusted Title Search Services in Georgia, USA */}
              <h2
                className="h2 fw-bold mb-3 reveal fade-bottom text-white-50"
              >
                Trusted Title Search Services in Georgia, USA
              </h2>

              {/* Nationwide Title Search Solutions for Real Estate Professionals */}
              <h3
                className="h4 fw-semibold mb-4 reveal fade-bottom"
                style={{ color: "var(--brand-sky-accent)", opacity: 0.95 }}
              >
                Nationwide Title Search Solutions for Real Estate Professionals
              </h3>
              
              {/* Lead Paragraph */}
              <p
                className="lead mb-5 reveal fade-bottom mx-auto"
                style={{
                  maxWidth: "850px",
                  fontSize: "1.25rem",
                  lineHeight: "1.7",
                  opacity: 0.9,
                }}
              >
                eTrack Title Services Inc. provides dependable nationwide title search solutions for lenders, attorneys, real estate agencies, investors, mortgage companies, and title professionals looking for fast, precise, and reliable property title information across the United States.
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

      {/* --- ABOUT SECTION --- */}
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
                eTrack Title Services Inc. is a reliable provider of title research and offshore title support services focused on property ownership verification, lien research, document retrieval, and comprehensive title examination services. Our goal is to assist real estate and mortgage professionals in improving title workflows, reducing risks, and enhancing transaction efficiency.
              </p>
              <p
                className="text-muted mb-0"
                style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
              >
                With skilled title researchers, technology-driven systems, and streamlined operational processes, we deliver compliant, scalable, and high-quality title support services throughout the nation.
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

      {/* --- SERVICES SECTIONS --- */}
      <section className="section-padding-lg bg-white" id="nationwide-services">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 mb-3">Our Georgia & Nationwide Title Search Services</h2>
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

      {/* --- OFFSHORE TITLE SUPPORT SERVICES SECTION --- */}
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

      {/* --- WHY CHOOSE SECTION --- */}
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

      {/* --- FAQ SECTION --- */}
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

      {/* --- CONTACT & CTA SECTION --- */}
      <section
        id="contact-us"
        className="section-padding-lg bg-gradient-blue text-white"
        style={{
          backgroundImage: "linear-gradient(90deg, var(--brand-blue-mid) 0%, var(--brand-blue-dark) 100%)",
        }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column: Details */}
            <div className="col-lg-6 reveal slide-left">
              {/* Access Dependable Title Search Services... */}
              <h2 className="display-5 fw-bold mb-4 text-white text-lg-start">
                Access Dependable Title Search Services in Georgia and Across the USA
              </h2>
              
              <p className="lead mb-4 text-white" style={{ opacity: 0.9 }}>
                Work with eTrack Title Services Inc. for fast, accurate, and dependable title search solutions designed to support your real estate and mortgage operations.
              </p>

              {/* Contact Us Today Card */}
              <div
                className="p-4 rounded-3 mt-4 bg-white text-dark"
                style={{
                  boxShadow: "rgba(0,0,0,0.15) 0 8px 30px",
                }}
              >
                <h4 className="h5 fw-bold mb-4 text-uppercase text-dark" style={{ letterSpacing: "1px" }}>
                  Contact Us Today
                </h4>
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-geo-alt-fill text-sky-blue fs-4 me-3" style={{ color: "var(--brand-blue-mid)" }}></i>
                  <div>
                    <strong className="fs-5" style={{ color: "var(--brand-blue-dark)" }}>eTrack Title Services Inc.</strong>
                    <p className="mb-0 text-muted">21189 Dana Ct, Ashburn, VA 20148</p>
                  </div>
                </div>

                <div className="border-top pt-3 mb-3">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-telephone-fill text-sky-blue fs-5 me-2" style={{ color: "var(--brand-blue-mid)" }}></i>
                    <div>
                      <small className="d-block text-muted">Inquiries</small>
                      <a href="tel:7036494441" className="fw-bold text-dark text-decoration-none hover-sky-blue">
                        703-649-4441
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-top pt-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-fill text-sky-blue fs-5 me-2" style={{ color: "var(--brand-blue-mid)" }}></i>
                    <div>
                      <small className="d-block text-muted">Email Orders & Questions</small>
                      <a href="mailto:orders@etracktitle.com" className="fw-bold text-dark text-decoration-none hover-sky-blue">
                        orders@etracktitle.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: CTA card */}
            <div className="col-lg-6 reveal slide-right">
              <div className="bg-white text-dark p-5 rounded-4 shadow-lg border border-light">
                <h3 className="h3 fw-bold mb-3 brand-text" style={{ color: "var(--brand-blue-dark)" }}>
                  Call to Action
                </h3>
                
                <p className="text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                  Looking for accurate and efficient title search services in Georgia or anywhere in the United States? Contact eTrack Title Services Inc. today for trusted nationwide title search solutions and offshore title support tailored to your business requirements.
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
