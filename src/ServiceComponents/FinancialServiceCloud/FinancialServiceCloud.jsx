import React from 'react'
import ServicePageHeaderSection from '../ui/ServicePageHeaderSection/ServicePageHeaderSection'
import img1 from '../../assets/imgs/services-details-2/Financial-Cloud/img-1.jpg';
import FinancialServiceCloud_Second from './FinancialServiceCloud_Second/FinancialServiceCloud_Second';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function FinancialServiceCloud() {
  return (
    <>
    {/* <FinancialServiceCloud_First/> */}
     <HeaderWithBg  title="Salesforce Financial Services Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce Financial Services Cloud", color: "purple-text" }
                    ]}
    />
    <FinancialServiceCloud_Second/>
    <S_lastSection/>
    </>
  ) 
}

export default FinancialServiceCloud;