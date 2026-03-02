import { FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import logo from "../../assets/imgs/template/image17.png";
import saalLogo from '../../assets/imgs/template/saalaiLogo.png';
import bgLine from '../../assets/imgs/blog-details/bg-line.png';
import './Footer.css';
import ellipseleft from '../../assets/imgs/footer-1/ellipse-left.png';
import ellipseright from '../../assets/imgs/footer-1/ellipse-right.png';
import linebg from '../../assets/imgs/footer-1/line-bg.png';
import { Link } from "react-router-dom";
import flag1 from '../../assets/imgs/contact-4/Flag of UK.png';
import flag2 from '../../assets/imgs/contact-4/Flag_of_India.png';
import flag3 from '../../assets/imgs/contact-4/Flag_of_the_United_States.png';
import flag4 from '../../assets/imgs/contact-4/Flag_of_the_United_States.png';


function Footer() {
  return (
    <footer
      className="footer pb-4"
      style={{
        backgroundImage: `url(${ellipseright}),url(${linebg})`,
        width: "100%",
      }}
    >
      <div className="">
        <div className="row footer-container gy-3 align-items-start">
          {/* LEFT SECTION */}
          <div className="footer-left col-12 col-lg-4 text-center text-lg-start">
            <div className="footer-logo d-flex justify-content-center justify-content-lg-start gap-3">
              <img src={logo} alt="CODM" />
              <a
                href="https://saasailabs.codmsoftware.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={saalLogo} alt="CODM" className="saalLogo"/>
              </a>
            </div>

            <p
              className="footer-text text-white fw-medium mt-3 mb-6 opacity-50 mx-auto mx-lg-0"
              style={{ fontSize: "16px", maxWidth: "420px" }}
            >
              <span>Company House Number : 15333870</span> <br/><br/> 
              Boost your business with our customised CRM solutions. Optimised
              processes, improved customer relationships and scalable growth we
              deliver innovations for your success.
            </p>

            <div className="footer-socials d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/codm-software-limited/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7fU84Na9QuC7dPDVMpuGVQ"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-column col-12 col-lg-3">
            <h4 className="align-centre text-center text-white opacity-50 fs-6 fw-black text-uppercase pb-3">
              SERVICES
            </h4>

            <div className="d-flex justify-content-center gap-1">
              <div className="d-flex flex-column gap-2 col-6 col-md-auto footerCard-links">
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6 footer-hover-effect" to="/ItServices/salesforce-education-cloud">
                  Education Cloud
                </Link>
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6 footer-hover-effect" to="/ItServices/salesforce-financial-services">
                  Financial Services
                </Link>
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6 footer-hover-effect" to="/ItServices/api-integration">
                  API Integration
                </Link>
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/ItServices/data-integration">
                  Data Integration
                </Link>
              </div>

              <div className="d-flex flex-column gap-2 col-6 col-md-auto footerCard-links">
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/">
                  Data Migration
                </Link>
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/ItServices/React-Application">
                  React Application
                </Link>
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/ItServices/BuildingLLM">
                  Building LLM
                </Link>
                <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/ItServices/Technical-Support">
                  Technical Support
                </Link>
              </div>
            </div>

          </div>

          {/* QUICK LINKS */}

          
          <div className="footer-column footer-column3 col-md-6 col-lg-1">
            <h4 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3">
              Quick Links
            </h4>
            <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/">Home</Link>
            <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/about">About</Link>
            <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/ItServices">Services</Link>
            <Link className="footer-link text-decoration-none text-white mb-2 fw-medium fs-6" to="/blog">Blog</Link>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-column4 col-12 col-md-6 col-lg-3 text-center text-lg-start">
            <h4 className="text-center text-white opacity-50 fs-6 fw-black text-uppercase pb-3">
              Address
            </h4>

            <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2">
              <img className="" src={flag1} alt="UK Flag" style={{ width: "15px", height: "13px", marginRight: "6px" }} />
              <p className="mb-0" style={{ fontSize: ".9rem" }}>
               UK Regus - Edmund House, 12-22 Newhall St, Birmingham B3 3AS, UK
              </p>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2">
              <img src={flag1} alt="UK Flag" style={{ width: "15px", height: "13px", marginRight: "6px" }} />
              <p className="mb-0" style={{ fontSize: ".9rem" }}>
               UK 71-75 Shelton Street, Covent Garden, London WC2H 9JQ, UK
              </p>
            </div> 
             <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2">
              <img src={flag4} alt="UK Flag" style={{ width: "15px", height: "13px", marginRight: "6px" }} />
              <p className="mb-0" style={{ fontSize: ".9rem" }}>
             USA: Talent4World LLC 4501 Nightland Dr Plano, TX 75024 - USA
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
