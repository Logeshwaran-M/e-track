import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useScrollAnimations from "../useScrollAnimations.js";
import ImgRoofSketch from "../assets/images/3 Roof Sketch Image.jpg";

export default function FloridaRoofSketchServices() {
  // Activate scroll animations
  useScrollAnimations();
  const navigate = useNavigate();

  // Scroll to top on load and set SEO metadata
  useEffect(() => {
    window.scrollTo(0, 0);

    // Set dynamic SEO Title: Roof Sketch Services in Florida for Accurate Reports
    const originalTitle = document.title;
    document.title = "Roof Sketch Services in Florida for Accurate Reports";

    // Set dynamic SEO Description
    let metaDescription = document.querySelector('meta[name="description"]');
    let originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Order professional roof sketch services in Florida with fast aerial measurement reports for residential, commercial, and multifamily properties."
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

  const handleOrderClick = () => {
    navigate("/roofing-order-page");
    window.scrollTo(0, 0);
  };

  // Roof Sketch Services
  const roofServices = [
    {
      title: "Residential Roof Sketch Reports",
      desc: "Fast and precise aerial roof sketch reports for residential single-family properties, including slope, area, pitch, and dimension data.",
      icon: "bi-house-door",
    },
    {
      title: "Commercial Roof Measurement Reports",
      desc: "Comprehensive commercial roof sketch reports for offices, warehouses, retail centers, and large commercial structures.",
      icon: "bi-building",
    },
    {
      title: "Elevation Measurement Reports",
      desc: "Accurate elevation and pitch measurements key for planning, installation, and estimating materials.",
      icon: "bi-arrow-up-right-square",
    },
    {
      title: "Multifamily Roof Sketch Reports",
      desc: "Detailed aerial roof measurements for multi-unit complexes, apartments, condominiums, and townhome communities.",
      icon: "bi-houses",
    },
    {
      title: "Wall Measurement Reports",
      desc: "Precise wall dimensioning and area calculations below 3000 sq ft, ideal for siding, painting, and external renovation estimates.",
      icon: "bi-grid-3x3",
    },
  ];

  // Why Choose Items
  const whyChooseItems = [
    {
      title: "Reduce Manual Measuring Time",
      desc: "Eliminate the need to physically climb roofs, reducing onsite measurement time from hours to minutes.",
      icon: "bi-clock-history",
    },
    {
      title: "Increase Measurement Precision",
      desc: "Our high-resolution aerial imagery and advanced sketch tools ensure sub-inch accuracy for area, pitch, and length measurements.",
      icon: "bi-patch-check",
    },
    {
      title: "Improve On-Site Safety",
      desc: "Minimize liability and keep your team safe on the ground by utilizing accurate aerial dimensioning for estimates and planning.",
      icon: "bi-shield-check",
    },
    {
      title: "Streamline Project Workflow",
      desc: "Directly import sketch files into your estimation software like Xactimate to speed up claims and roofing estimates.",
      icon: "bi-arrow-repeat",
    },
    {
      title: "Quick Turnaround for Reports",
      desc: "Receive highly detailed and formatted reports quickly, keeping your bidding and project timelines on track.",
      icon: "bi-lightning-charge",
    },
    {
      title: "Easy ESX & PDF File Delivery",
      desc: "Get files in industry-standard formats including ESX for estimating software and PDF for easy client sharing.",
      icon: "bi-file-earmark-pdf",
    },
  ];

  // Pricing Table Data
  const pricingData = [
    {
      name: "Residential Standard Roof Sketch (ESX Only)",
      price: "$12.00",
      type: "Residential",
      badge: "Popular",
    },
    {
      name: "Residential Complex Roof Sketch (ESX Only)",
      price: "$18.00",
      type: "Residential",
    },
    {
      name: "Residential Standard Roof Sketch (ESX + PDF)",
      price: "$18.00",
      type: "Residential",
    },
    {
      name: "Commercial Roof Sketch (ESX Only)",
      price: "$20.00",
      type: "Commercial",
    },
    {
      name: "Commercial Roof Sketch (ESX + PDF Only)",
      price: "$25.00",
      type: "Commercial",
      badge: "Best Value",
    },
    {
      name: "Wall ESX Only <3000sf",
      price: "$20.00",
      type: "Exterior/Wall",
    },
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: "1. What is a roof sketch report?",
      a: "A roof sketch report is a detailed aerial measurement report that provides roof dimensions, pitch data, area calculations, and layout information for roofing projects.",
    },
    {
      q: "2. Who can use roof sketch services?",
      a: "Roofing contractors, insurance adjusters, property managers, builders, and restoration companies commonly use roof sketch reports.",
    },
    {
      q: "3. Do you provide roof reports throughout Florida?",
      a: "Yes, we provide aerial roof sketch services across all major cities and regions in Florida.",
    },
    {
      q: "4. What file formats are included in the reports?",
      a: "Reports are available in ESX format, and selected services also include PDF files for easy viewing and printing.",
    },
    {
      q: "5. How accurate are your aerial measurements?",
      a: "Our reports use advanced aerial measurement technology to deliver highly accurate roof dimensions and calculations.",
    },
    {
      q: "6. How quickly can I receive my roof report?",
      a: "Most roof sketch reports are delivered within a fast turnaround time after order submission and property verification.",
    },
    {
      q: "7. Can I order reports for commercial buildings?",
      a: "Yes, we provide commercial roof sketch reports for offices, warehouses, retail buildings, and other commercial properties.",
    },
    {
      q: "8. Are multifamily property reports available?",
      a: "Yes, we offer roof sketch reports for apartments, condominiums, townhomes, and other multifamily buildings.",
    },
    {
      q: "9. Why should I use aerial roof measurements instead of manual measurements?",
      a: "Aerial reports help reduce labor costs, improve safety by minimizing roof climbing, and increase overall efficiency.",
    },
    {
      q: "10. How do I place an order for a roof sketch report?",
      a: "You can contact our order desk, email your project details, or visit our website to submit your roof report request.",
    },
  ];

  return (
    <div className="florida-roof-sketch-services-page">
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
              <span className="badge bg-info text-dark px-3 py-2 rounded-pill fw-bold mb-3 fs-6 uppercase tracking-wider shadow-sm">
                Florida Aerial Services
              </span>
              <h1
                className="display-3 fw-bold mb-3 reveal fade-bottom"
                style={{
                  textShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                  letterSpacing: "-0.5px",
                }}
              >
                Roof Sketch Services in Florida
              </h1>
              
              <h2 className="h4 fw-semibold mb-4 reveal fade-bottom text-white-50">
                Accurate Aerial Measurement Reports For Residential & Commercial Properties
              </h2>
              
              <p
                className="lead mb-5 reveal fade-bottom mx-auto"
                style={{
                  maxWidth: "850px",
                  fontSize: "1.25rem",
                  lineHeight: "1.7",
                  opacity: 0.9,
                }}
              >
                Get fast, accurate, and affordable aerial roof sketch reports for residential, commercial, and multifamily properties across Florida. Our advanced measurement technology helps contractors, insurance adjusters, roofing companies, and property professionals save time, improve safety, and increase productivity.
              </p>
              
              <div className="reveal fade-bottom d-flex flex-wrap justify-content-center gap-3">
                <button onClick={handleOrderClick} className="brand-btn text-decoration-none px-5 py-3 fs-5 border-0">
                  Order Roof Sketch Reports Now
                </button>
                <a href="#contact-us" className="btn btn-outline-light px-5 py-3 fs-5 rounded-pill fw-bold hover-bg-white transition-all">
                  Contact Order Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO/ABOUT SECTION --- */}
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
                Florida's Trusted Roof Measurement Partner
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
                eTrack Title Services is proud to offer precise aerial roof sketch reports designed to streamline estimation, installation, and inspection tasks. Our advanced mapping algorithms and high-resolution aerial imaging provide accurate, compliant, and cost-effective reports.
              </p>
              <p
                className="text-muted mb-4"
                style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
              >
                By utilizing our reports, contractors and estimators eliminate the need for dangerous climbs and physical roof measurements. We quickly supply the standard formats you depend on, including fully integrated ESX files for software like Xactimate.
              </p>
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: "50px", height: "50px" }}>
                  <i className="bi bi-shield-fill-check fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold text-dark">Florida State Compliant</h6>
                  <p className="mb-0 small text-muted">Meeting rigorous local standards for architectural details.</p>
                </div>
              </div>
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
                  src={ImgRoofSketch}
                  alt="Florida Roof Sketch Services"
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
      <section className="section-padding-lg bg-white" id="roof-sketch-services">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--brand-blue-dark)" }}>Our Roof Sketch Services</h2>
            <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: "600px" }}>
              We provide highly specific and tailored roof measurement structures to accommodate any residential or commercial demand.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {roofServices.map((item, index) => (
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

      {/* --- PRICING SECTION --- */}
      <section className="section-padding-lg bg-light-section" id="pricing">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--brand-blue-dark)" }}>Transparent Pricing Options</h2>
            <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: "600px" }}>
              Affordable plans and clear rates with no hidden fees. Select the service tier that fits your needs.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 reveal fade-bottom"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="card h-100 border-0 shadow-sm p-4 text-center bg-white position-relative"
                  style={{
                    borderRadius: "15px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "rgba(90, 217, 249, 0.3) 0px 12px 30px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 5px 20px";
                  }}
                >
                  {item.badge && (
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning text-dark px-3 py-2 fw-bold shadow-sm">
                      {item.badge}
                    </span>
                  )}
                  <div className="my-3 text-muted text-uppercase fw-semibold tracking-wider" style={{ fontSize: "0.85rem" }}>
                    {item.type}
                  </div>
                  <h5 className="fw-bold text-dark px-2 mb-3" style={{ minHeight: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.name}
                  </h5>
                  <div className="mb-4">
                    <span className="display-5 fw-extrabold text-primary" style={{ color: "var(--brand-blue-dark)" }}>{item.price}</span>
                    <span className="text-muted small"> / report</span>
                  </div>
                  <div className="border-top pt-4 mt-auto">
                    <button
                      onClick={handleOrderClick}
                      className="btn btn-outline-primary w-100 py-2 rounded-pill fw-bold transition-all"
                    >
                      <i className="bi bi-cart3 me-2"></i>Order Now
                    </button>
                  </div>
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
            <h2 className="display-4 fw-bold" style={{ color: "var(--brand-blue-dark)" }}>Why Choose Our Aerial Roof Reports?</h2>
            <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: "600px" }}>
              Our workflow is optimized for speed, precision, safety, and compatibility, helping you close more jobs.
            </p>
          </div>

          <div className="row g-4">
            {whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="col-md-6 reveal fade-bottom"
                style={{ transitionDelay: `${index * 0.05}s` }}
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
            <h2 className="display-4 fw-bold mb-3" style={{ color: "var(--brand-blue-dark)" }}>Frequently Asked Questions</h2>
            <p className="text-muted max-w-2xl mx-auto" style={{ maxWidth: "600px" }}>
              Got questions? We have answers. If you don't find what you need here, contact our orders department.
            </p>
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
                Need Fast & Accurate Roof Sketch Reports in Florida?
              </h2>
              
              <p className="lead mb-4 text-white" style={{ opacity: 0.9 }}>
                Get reliable aerial roof measurements delivered quickly in ESX and PDF formats. We support roofing contractors, adjusters, and enterprises throughout Florida.
              </p>

              {/* Contact Us Today Card */}
              <div
                className="p-4 rounded-3 mt-4 bg-white text-dark"
                style={{
                  boxShadow: "rgba(0,0,0,0.15) 0 8px 30px",
                }}
              >
                <h4 className="h5 fw-bold mb-4 text-uppercase text-dark" style={{ letterSpacing: "1px" }}>
                  Contact Information
                </h4>
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-geo-alt-fill text-sky-blue fs-4 me-3" style={{ color: "var(--brand-blue-mid)" }}></i>
                  <div>
                    <strong className="fs-5" style={{ color: "var(--brand-blue-dark)" }}>eTrack Title Services</strong>
                    <p className="mb-0 text-muted">21189 Dana CT., Ashburn, VA 20148</p>
                  </div>
                </div>

                <div className="border-top pt-3 mb-3">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-telephone-fill text-sky-blue fs-5 me-2" style={{ color: "var(--brand-blue-mid)" }}></i>
                    <div>
                      <small className="d-block text-muted">Order Desk Phone</small>
                      <a href="tel:7038806311" className="fw-bold text-dark text-decoration-none hover-sky-blue">
                        703-880-6311
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
                  Order Roof Sketch Reports Now
                </h3>
                
                <p className="text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                  Ready to order reports for your Florida projects? Click below to head to our seamless order intake page, or drop us an email with your project parameters.
                </p>

                <div className="my-4 p-4 rounded-3 text-center" style={{ background: "var(--section-bg-light)" }}>
                  <i className="bi bi-mailbox2 display-4 mb-3" style={{ color: "var(--brand-blue-mid)" }}></i>
                  <h5 className="fw-bold mb-2">Compose Order Details</h5>
                  <p className="text-muted small">We accept order requests and property specs via email, monitored 24/7.</p>
                </div>

                <button
                  onClick={handleOrderClick}
                  className="brand-btn w-100 text-center text-decoration-none d-block py-3 fs-5 mb-3 border-0"
                >
                  <i className="bi bi-journal-check me-2"></i> Go to Order Intake Form
                </button>

                <a
                  href="mailto:orders@etracktitle.com"
                  className="btn btn-outline-primary w-100 text-center py-2 fw-semibold rounded-pill"
                >
                  Email orders@etracktitle.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
