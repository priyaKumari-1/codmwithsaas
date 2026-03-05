import React from 'react';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import ServiceCloud_First from './ServiceCloud_First/ServiceCloud_First';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';

function ServiceCloud() {
  return (
    <>
    <HeaderWithBg title="Salesforce Service Cloud"
                    breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label:"Services",link:"/ItServices"},
                    { label: "Salesforce Service Cloud", color: "purple-text" }
    ]}
    />
    <ServiceCloud_First/>
    <S_lastSection/>
    </>
  )
}

export default ServiceCloud;