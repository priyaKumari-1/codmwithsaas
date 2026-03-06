import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import blog1 from "../../assets/imgs/blogs/integrationframework.png";

// import blog2 from "../../assets/imgs/blogs/triggerframework.png";
// import blog3 from "../../assets/imgs/blogs/revenuecloud.png";

import blog1 from '../../assets/imgs/blogs/automation_apexTrigger.webp';
import blog2 from '../../assets/imgs/services-details-2/triggerframework/img-1.png';
import blog3 from '../../assets/imgs/blogImgs/pharmaecticalDashboard.png';
import blog4 from '../../assets/imgs/blogImgs/agentforce.webp';
import blog5 from '../../assets/imgs/blogImgs/SalesforceAi.png';
import blog6 from '../../assets/imgs/blogImgs/SalesforceRevenueCloud.png';
import blog7 from '../../assets/imgs/services-details-2/AgentforceFinancialServices/AgentfinanceService.webp';
import blog8 from '../../assets/imgs/blogImgs/img7.png';

// import blog5 from '../../assets/imgs/blogImgs/agentforce.webp';
// import blog6 from '../../assets/imgs/blogImgs/'

import DotBtn from "../../utils/Dotbtn/Dotbtn";
import { Link } from "react-router-dom";
import "./BlogSection.css";
import { useEffect } from "react";


const blogData = [
   {
      id: 1,
      image: blog1,
      tag: 'Integration Framework',
      title: 'Scalable Salesforce Integration Framework',
      description:
        'A well-designed integration framework ensures seamless data flow between Salesforce and external systems, improving scalability, security, and long-term maintainability.',
      link: '/blog/integration-framework',
    },
    {
      id: 2,
      image: blog2,
      tag: 'Trigger Framework',
      title: 'Salesforce Trigger Frameworks',
      description:
        'Learn how a structured trigger framework helps manage complex logic, improves code readability, and ensures governor-limit-safe Salesforce implementations. A trigger framework is a structured way to organize and manage apex triggers.',
      link: '/blog/trigger-framework',
    },
    {
      id: 3,
      image: blog3,
      tag: 'Pharmaceutical Dashboard',
      title: 'Intelligent AI Powered CRM for Pharmaceutical Industry',
      description:
        'Salesforce dashboards empower pharmaceutical teams with real time insights into sales performance, compliance tracking, and market trends.',
      link: '/blog/AI-Powered-Dashboard',
    },
    {
      id: 4,
      image: blog4,
      tag: 'Agentforce Implementation',
      title: 'Agentforce Implementation: Smarter Service Operations',
      description:
        'Discover how Agentforce enhances service workflows through automation, AI driven insights, and unified customer engagement across channels.',
      link: '/blog/salesforceagentforce',
    },
    {
      id: 5,
      image: blog5,
      tag: 'Salesforce AI + Synergy',
      title: 'Unlocking Business Value with Salesforce AI Synergy',
      description:
        'By combining Salesforce AI capabilities with enterprise data, organizations can drive predictive insights, smarter decisions, and personalized experiences.',
      link: '/blog/Salesforce-Einstein',
    },
    {
      id: 6,
      image: blog6,
      tag: 'Revenue Cloud',
      title: 'Migrating from Salesforce CPQ to Revenue Cloud',
      description:
        'Transitioning from CPQ to Revenue Cloud streamlines quoting, billing, and revenue recognition while supporting scalable growth strategies.',
      link: '/blog/Salesforce-Revenue-Cloud',
    },
    {
      id: 7,
      image: blog7,
      tag: 'Financial Service Cloud',
      title: 'Salesforce Financial Service Cloud for Modern Banking',
      description:
        'Financial Service Cloud enables banks and financial institutions to deliver personalized, compliant, and data driven customer experiences.',
      link: '/blog/AgentforceFinancialServices',
    },
    {
      id: 8,
      image: blog8,
      tag: 'Agentforce',
      title: 'Agentforce Vibes: AI Powered Salesforce Development Experience',
      description:
        'Agentforce Vibes enhances Salesforce development by enabling AI assisted app creation, automated deployments, and streamlined lead management workflows directly within VS Code.',
      link: '/blog/AgentforceVibes',
        }
];

function BlogSection() {

  return (
    <section className="blog_section blog_sectionContainer pb-4">
      <div className="container">

        {/* HEADER */}
        <div className="row align-items-end mb-4">
          <div className="col-12 col-md-6 me-auto">
            <div className="btnStay_Updated">
              <DotBtn text="From Blog"/>
            </div>

            <h1 className="blog_section_heading ds-3 mt-3 mb-3">
              Our Latest Blogs
            </h1>

            <span className="fs-5 fw-medium">
              Explore the insights and trends shaping our industry
            </span>
          </div>

          <div className="col-12 col-md-6 mt-3 mt-md-0 text-md-end">
            <Link
              to="/blog"
              className="fw-bold text-decoration-none"
              style={{ color: "#8065f4" }}
            >
              See all Blogs →
            </Link>
          </div>
        </div>

        {/* ✅ SWIPER SLIDER */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          navigation={{
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            520: { slidesPerView: 2 },
            950: { slidesPerView: 3 },
          }}
          className="slide-content"
        >
          {blogData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="blogHomeContainer bg-white rounded-3 p-3 position-relative border" data-aos="fade-down">
               <div className="blogHomeContainerImg">
                <img
                  src={item.image}
                  alt={item.title}
                  width="100%"
                  className="rounded-3"
                />
               </div>
                <div className="card-body p-0">
                  <p className="blagCards_btn tag-spacing text-linear-2 text-uppercase mt-3">
                    {item.tag}
                  </p>

                  <div className="blogContentSection m-2">
                    <h5 className="my-3">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* Whole card clickable */}
                <a className="position-absolute bottom-0 start-0 end-0 top-0 z-0" href={item.link}></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        {/* <div className="swiper-btn-prev swiper-navBtn"></div>
        <div className="swiper-btn-next swiper-navBtn"></div> */}

      </div>
    </section>
  );
}

export default BlogSection;
