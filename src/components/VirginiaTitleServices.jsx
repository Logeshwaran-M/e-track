import React, { useEffect, useState } from "react";
import useScrollAnimations from "../useScrollAnimations.js";
import ImgAbout from "../assets/images/2 Residential House.jpg";

export default function VirginiaTitleServices() {
  // Activate scroll animations
  useScrollAnimations();

  // Scroll to top on load and set SEO metadata
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set dynamic SEO Title: META TITLE: Best Title Search Company in Virginia, USA | Fast Reports
    const originalTitle = document.title;
    document.title = "Best Title Search Company in Virginia, USA | Fast Reports";

    // Set dynamic SEO Description: Meta Description: Get reliable title search services in Virginia, USA for real estate professionals, lenders, and investors. Fast, accurate reports with detailed property data
    let metaDescription = document.querySelector('meta[name="description"]');
    let originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Get reliable title search services in Virginia, USA for real estate professionals, lenders, and investors. Fast, accurate reports with detailed property data"
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

  // Nationwide Services (All 6 strictly from the Virginia docx)
  const nationwideServices = [
    {
      title: "Current Owner Search",
      desc: "Verify current property ownership and identify any liens, encumbrances, or restrictions linked to the title.",
      icon: "bi-person-badge",
    },
    {
      title: "Two-Owner Search",
      desc: "Comprehensive review of the last two ownership transfers with complete chain-of-title history and property background details.",
      icon: "bi-people",
    },
    {
      title: "30/40/60-Year Full Title Search",
      desc: "Extended historical title review covering 30, 40, or 60 years for deeper due diligence and risk evaluation.",
      icon: "bi-clock-history",
    },
    {
      title: "Lien & Judgment Search",
      desc: "Detect active mortgages, unpaid liens, court judgments, and other financial claims attached to the property.",
      icon: "bi-shield-exclamation",
    },
    {
      title: "Tax Search",
      desc: "Review property tax records including outstanding taxes, delinquencies, assessments, and payment status.",
      icon: "bi-calculator",
    },
    {
      title: "Document Retrieval & Recording",
      desc: "Fast access to deeds, mortgages, assignments, and other public land records for verification and compliance.",
      icon: "bi-file-earmark-arrow-down",
    },
  ];

  // Offshore Title Support Services (strictly from the Virginia docx)
  const offshoreServices = [
    {
      title: "Scalable Title Production",
      desc: "Efficient handling of both single and bulk title orders with consistent accuracy and fast turnaround times.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "Commitment Typing & Data Entry",
      desc: "Accurate and structured data entry support for mortgage and title production workflows.",
      icon: "bi-keyboard",
    },
    {
      title: "Quality Review & Verification",
      desc: "Multi-level quality control process ensuring accuracy, compliance, and reduced error rates.",
      icon: "bi-check2-circle",
    },
    {
      title: "Cost-Effective Operations",
      desc: "Optimized service delivery model that reduces operational costs while maintaining high-quality output.",
      icon: "bi-cash-stack",
    },
  ];

  // Why Choose Items (strictly from the Virginia docx)
  const whyChooseItems = [
    {
      title: "Industry Expertise",
      desc: "Backed by years of experience in title research, mortgage processing, and property data services.",
      icon: "bi-patch-check",
    },
    {
      title: "Customized Solutions",
      desc: "Flexible service models tailored for lenders, attorneys, investors, and real estate professionals.",
      icon: "bi-sliders",
    },
    {
      title: "Advanced Technology",
      desc: "AI-driven workflows and automation tools that improve speed, accuracy, and efficiency.",
      icon: "bi-cpu",
    },
    {
      title: "Dedicated Support Team",
      desc: "Responsive client support with smooth onboarding and continuous assistance.",
      icon: "bi-headset",
    },
  ];

  // Frequently Asked Questions (strictly 7 from the Virginia docx)
  const faqs = [
    {
      q: "1. What is a title search service?",
      a: "A title search is the process of reviewing public records to confirm ownership and identify any legal or financial claims on a property.",
    },
    {
      q: "2. How long does a title search take?",
      a: "Turnaround time varies based on the type of search, but most standard requests are completed promptly through streamlined digital processing systems.",
    },
    {
      q: "3. What does a full title search include?",
      a: "It includes ownership history, liens, judgments, tax records, and all recorded property-related documents.",
    },
    {
      q: "4. Why is a lien and judgment search important?",
      a: "It helps uncover unpaid debts or legal claims that may affect ownership transfer or property rights.",
    },
    {
      q: "5. Do you support bulk or offshore processing?",
      a: "Yes, we provide scalable offshore title support for high-volume operations with strict quality control.",
    },
    {
      q: "6. How do you ensure accuracy?",
      a: "We use trained specialists, multi-step verification, and technology-driven validation systems.",
    },
    {
      q: "7. Do you offer nationwide services?",
      a: "Yes, our services are available across all U.S. states and counties.",
    },
  ];

  return (
    <div className="virginia-title-services-page">
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
              {/* H1: Best Title Search Company in Virginia, USA */}
              <h1
                className="display-3 fw-bold mb-3 reveal fade-bottom"
                style={{
                  textShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                  letterSpacing: "-0.5px",
                }}
              >
                Best Title Search Company in Virginia, USA
              </h1>
              
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
                Nationwide Title Search Solutions for real estate professionals, lenders, attorneys, and investors who require fast, precise, and dependable property title information across the United States.
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
                eTrack Title Services Inc. is a trusted provider of nationwide title search and offshore title support services. We specialize in delivering accurate property records, ownership verification, and lien research with speed, precision, and full compliance.
              </p>
              <p
                className="text-muted mb-0"
                style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
              >
                Our services are designed to reduce risk, support better decision-making, and streamline real estate and mortgage operations across the U.S.
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
            <h2 className="display-4 mb-3">Nationwide Title Search Services</h2>
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
            <h2 className="display-4">Why Choose eTrack Title Services?</h2>
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
              <h2 className="display-5 fw-bold mb-4 text-white text-lg-start">
                Get Started Today
              </h2>
              
              <p className="lead mb-4 text-white" style={{ opacity: 0.9 }}>
                Looking for fast, accurate, and reliable title search services? Partner with eTrack Title Services Inc. and streamline your real estate due diligence process with confidence.
              </p>

              {/* Contact Us Now Card */}
              <div
                className="p-4 rounded-3 mt-4 bg-white text-dark"
                style={{
                  boxShadow: "rgba(0,0,0,0.15) 0 8px 30px",
                }}
              >
                <h4 className="h5 fw-bold mb-4 text-uppercase text-dark" style={{ letterSpacing: "1px" }}>
                  Contact Us Now
                </h4>
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-geo-alt-fill text-sky-blue fs-4 me-3" style={{ color: "var(--brand-blue-mid)" }}></i>
                  <div>
                    <strong className="fs-5" style={{ color: "var(--brand-blue-dark)" }}>eTrack Title Services Inc.</strong>
                    <p className="mb-0 text-muted">21189 Dana Ct, Ashburn, VA 20148</p>
                  </div>
                </div>

                <div className="border-top pt-3 mb-3">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-telephone-fill text-sky-blue fs-5 me-2" style={{ color: "var(--brand-blue-mid)" }}></i>
                        <div>
                          <small className="d-block text-muted">Order Desk</small>
                          <a href="tel:7038806311" className="fw-bold text-dark text-decoration-none hover-sky-blue">
                            703-880-6311
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-info-circle text-sky-blue fs-5 me-2" style={{ color: "var(--brand-blue-mid)" }}></i>
                        <div>
                          <small className="d-block text-muted">Inquiries</small>
                          <a href="tel:7036494441" className="fw-bold text-dark text-decoration-none hover-sky-blue">
                            703-649-4441
                          </a>
                        </div>
                      </div>
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
                  Request a Title Search Today
                </h3>
                
                <p className="text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                  Don’t wait for delays or incomplete data. Get accurate property insights with fast turnaround times. Call now or email us to place your order and experience reliable nationwide title search services.
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
