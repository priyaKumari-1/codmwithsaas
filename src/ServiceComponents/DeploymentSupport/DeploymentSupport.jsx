import React from 'react'
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg'
import DeploymentSupport_First from './DeploymentSupport_First/DeploymentSupport_First';
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";

function DeploymentSupport() {
  return (
    <>
    <HeaderWithBg  title="Deployments"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                        { label:"Services",link:"/ItServices"},
                        { label: "Deployment Support", color: "purple-text" }
                    ]} 
    />
    <DeploymentSupport_First/>
    <S_lastSection/>

    </>
  )
}

export default DeploymentSupport;