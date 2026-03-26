import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../../assets/imgs/blogs/automation_apexTrigger.webp';
import blog2 from '../../../assets/imgs/services-details-2/triggerframework/img-1.png';
import blog3 from '../../../assets/imgs/blogImgs/pharmaecticalDashboard.png';
import blog4 from '../../../assets/imgs/blogImgs/agentforce.webp';
import blog5 from '../../../assets/imgs/blogImgs/SalesforceAi.png';
import blog6 from '../../../assets/imgs/blogImgs/SalesforceRevenueCloud.png';
import blog7 from '../../../assets/imgs/services-details-2/AgentforceFinancialServices/AgentfinanceService.webp';
import blog8 from '../../../assets/imgs/blogImgs/img7.png';


import './BlogsSection.css';

const blogsData = [
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
    title: 'Intelligent AI-Powered CRM for Pharmaceutical Industry',
    description:
      'Salesforce dashboards empower pharmaceutical teams with real-time insights into sales performance, compliance tracking, and market trends.',
    link: '/blog/AI-Powered-Dashboard',
  },
  {
    id: 4,
    image: blog4,
    tag: 'Agentforce Implementation',
    title: 'Agentforce Implementation: Smarter Service Operations',
    description:
      'Discover how Agentforce enhances service workflows through automation, AI-driven insights, and unified customer engagement across channels.',
    link: '/blog/salesforceagentforce',
  },
  {
    id: 5,
    image: blog5,
    tag: 'Salesforce AI + Synergy',
    title: 'Unlocking Business Value with Salesforce AI Synergy',
    description:
      'By combining Salesforce AI capabilities with enterprise data, organizations can drive predictive insights, smarter decisions, and personalized experiences.',
    link: '/blog/salesforce-einstein-ai-synergy',
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
      'Financial Service Cloud enables banks and financial institutions to deliver personalized, compliant, and data-driven customer experiences.',
    link: '/blog/AgentforceFinancialServices',
  },
  {
  id: 8,
  image: blog8,
  tag: 'Agentforce',
  title: 'Agentforce Vibes: AI Powered Salesforce Development Experience',
  description:
    'Agentforce Vibes enhances Salesforce development by enabling AI-assisted app creation, automated deployments, and streamlined lead management workflows directly within VS Code.',
  link: '/blog/AgentforceAI',
},

];

function BlogsSection() {
  return (
    <div className="container">
      <div className="row">
        {blogsData.map((blog) => (
          <div
            className="col-lg-4 col-md-6 mb-4 text-start text-md-start text-center d-flex justify-content-center"
            key={blog.id}
          >
            <div
              className="BlogSectionPage blog-card border border-light rounded-3 h-100 overflow-hidden"
              data-aos="fade-zoom-in"
              data-aos-delay="300"
            >
              <div style={{
                height: "210px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f8f9fa"
              }}>
              <img
                className="blog-card-img"
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <div className="card-body p-4 d-flex flex-column h-100">
              <p className="FifthSection_CardTag text-linear-2 text-uppercase mb-3 flex-shrink-0">
                {blog.tag}
              </p>

              <h5 className="my-2 flex-shrink-0">{blog.title}</h5>
              <p className="text-muted">{blog.description}</p>

              <Link
                to={blog.link}
                className="text-decoration-none btn-sm align-self-start RouterLink mt-2 d-flex justify-content-center align-items-center"
              >
                <span><b>Read More</b></span>
                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.25 15.25V6.75H8.75" stroke="#8b70fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17 7L6.75 17.25" stroke="#8b70fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </Link>
            </div>
          </div>
          </div>
        ))}
    </div>
    </div >
  );
}

export default BlogsSection;
