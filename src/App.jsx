import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollOnTop from './components/ScrollOnTop/ScrollOnTop';
import Contact from './pages/Contact/Contact';
import HigherEducation from './ServiceComponents/HigherEducation/HigherEducation';
import Blog from './pages/Blog/Blog';
import IntegrationFrameworkBlog from './BlogsComponents/IntegrationFrameworkBlog/IntegrationFrameworkBlog';
import FinancialServiceCloud from './ServiceComponents/FinancialServiceCloud/FinancialServiceCloud';
import IndustriesCloud from './ServiceComponents/IndustriesCloud/IndustriesCloud';
import DataCloud from './ServiceComponents/DataCloud/DataCloud';
import MarketingCloud from './ServiceComponents/MarketingCloud/MarketingCloud';
import ApiIntegration from './ServiceComponents/ApiIntegration/ApiIntegration';
import TriggerframeworkBlog from './BlogsComponents/TriggerframeworkBlog/TriggerframeworkBlog';
import AIPoweredDashboard from './BlogsComponents/AIPoweredDashboard/AIPoweredDashboard';
import DataIntegration from './ServiceComponents/DataIntegration/DataIntegration';
import CRMDevelopment from './ServiceComponents/CRMDevelopment/CRMDevelopment';
import BuildingLLMDevelopment from './ServiceComponents/BuildingLLMDevelopment/BuildingLLMDevelopment';
import DotNetApplication from './ServiceComponents/DotNetApplication/DotNetApplication';
import ReactApplication from './ServiceComponents/ReactApplication/ReactApplication';
import PythonApplication from './ServiceComponents/PythonApplication/PythonApplication';
import TechnicalSupport from './ServiceComponents/TechnicalSupport/TechnicalSupport';
import AgentforceImplementation from './BlogsComponents/AgentforceImplementation/AgentforceImplementation';
import SalesforceEinstein from './BlogsComponents/SalesforceEinstein/SalesforceEinstein';
import SalesforceRevenueCloud from './BlogsComponents/SalesforceRevenueCloud/SalesforceRevenueCloud';
import SalesforcePartnerLogo from './components/SalesforcePartnerLogo/SalesforcePartnerLogo';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ReactChangeLoader from './RouteChangeLoader';
import AgentforceFinancialServices from './BlogsComponents/AgentforceFinancialServices/AgentforceFinancialServices';
import HealthInsuranceCloud from './ServiceComponents/HealthInsuranceCloud/HealthInsuranceCloud';
import SalesCloud from './ServiceComponents/SalesCloud/SalesCloud';
import ServiceCloud from './ServiceComponents/ServiceCloud/ServiceCloud';
import EnergyUtilitiesCloud from './ServiceComponents/EnergyUtilitiesCloud/EnergyUtilitiesCloud';
import ManufacturingCloud from './ServiceComponents/ManufacturingCloud/ManufacturingCloud';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import DeploymentSupport from './ServiceComponents/DeploymentSupport/DeploymentSupport';
import PoliciesBar from './pages/PoliciesBar/PoliciesBar';
import Cookies from './Cookies/Cookies';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import NonprofitCloud from './ServiceComponents/NonprofitCloud/NonprofitCloud';
import AgentforceAI from './BlogsComponents/AgentforceAI/AgentforceAI';
import SaasAiHome from './pages/Home/SaasAiHome';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  function HomeSwitcher() {
  const hostname = window.location.href;
  console.log(hostname);

  if (hostname.includes("saasailabs")) {
    return <SaasAiHome/>;
  }else{
  return <Home/>;
  }
}


  return (
    <>
      <ScrollOnTop />
      useAutoRefresh()

      <Router>
         <ScrollToTop/>
        <Navbar />
        <div>
          <ReactChangeLoader>
            
        {/* <SalesforcePartnerLogo/> */}
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<HomeSwitcher/>} /> 
              <Route path="/about" element={<About />} />
              <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
              <Route path='/terms-conditions' element={<TermsAndConditions/>}/>

              {/* service routes */}
              <Route path="/ItServices" element={<Service />} />

              <Route path="/ItServices" element={<Service />} />

              <Route
                path="/ItServices/salesforce-education-cloud"
                element={<HigherEducation />}
              />

              <Route
                path="/ItServices/salesforce-financial-services"
                element={<FinancialServiceCloud />}
              />

              <Route
                path="/ItServices/salesforce-health-insurance-cloud"
                element={<HealthInsuranceCloud/>}
              />

              <Route
                path="/ItServices/salesforce-data-cloud"
                element={<DataCloud />}
              />

              <Route
                path="/ItServices/saleforce-marketing-cloud"
                element={<MarketingCloud />}
              />

              <Route
                path="/ItServices/salesforce-sales-cloud"
                element={<SalesCloud/>}
              />
              
              <Route
                path="/ItServices/salesforce-service-cloud"
                element={<ServiceCloud/>}
              />
 
              <Route
                path="/ItServices/salesforce-energy-utilities-cloud"
                element={<EnergyUtilitiesCloud/>}
              />

              <Route
                path="/ItServices/salesforce-manufacturing-cloud"
                element={<ManufacturingCloud/>}
              />
              {/* salesforce-nonprofit-cloud */}
              <Route
               path="/ItServices/salesforce-nonprofit-cloud"
                element={<NonprofitCloud/>}/>

              {/* previce routes */}
              
              {/* Data */}
              <Route path="/ItServices/api-integration" element={<ApiIntegration />}/>
              <Route path="/ItServices/data-integration" element={<DataIntegration />}/>
              <Route path="/ItServices/data-migration" element={<DataIntegration />}/>

              {/* Development */}
              <Route path="/ItServices/SalesforceCRM" element={<CRMDevelopment />} />
              <Route path="/ItServices/BuildingLLM" element={<BuildingLLMDevelopment />} />
              <Route path="/ItServices/DotNetApplication" element={<DotNetApplication />} />
              <Route path="/ItServices/React-Application" element={<ReactApplication />} />
              <Route path="/ItServices/python-Application" element={<PythonApplication />} />

              {/* Support */}
              <Route path="/ItServices/Technical-Support" element={<TechnicalSupport />} />
              <Route path="/ItServices/Deployment-Support" element={<DeploymentSupport/>} />

              {/* Blog routes*/}
              <Route path="blog" element={<Blog />} />
              <Route path="/blog/integration-framework" element={<IntegrationFrameworkBlog />} />
              <Route path="/blog/trigger-framework" element={<TriggerframeworkBlog />} />
              <Route path="/blog/AI-Powered-Dashboard" element={<AIPoweredDashboard />} />
              <Route path="/blog/salesforceagentforce" element={<AgentforceImplementation />} />
              <Route path="/blog/Salesforce-Einstein" element={<SalesforceEinstein />} />
              <Route path="/blog/Salesforce-Revenue-Cloud" element={<SalesforceRevenueCloud />} />
              <Route path="/blog/AgentforceFinancialServices" element={<AgentforceFinancialServices />} />
              <Route path="/blog/AgentforceAI" element={<AgentforceAI/>} />
              
              
              {/* </Route> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound />} />

            </Routes>
          </ReactChangeLoader>
        </div>
        <Footer />
        <PoliciesBar/>
        <Cookies/>
      </Router>

    </>
  )
}
export default App;