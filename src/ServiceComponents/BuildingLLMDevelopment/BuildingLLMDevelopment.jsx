import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import BuildingLLMDevelopment_Second from "./BuildingLLMDevelopment_Second/BuildingLLMDevelopment_Second";
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg'; 

function BuildingLLMDevelopment() {
  return (
    <>
    {/* <BuildingLLMDevelopment_First/> */}
     <HeaderWithBg  title="Salesforce CRM"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Service",link:"/ItServices"},
                        { label: "Salesforce CRM", color: "purple-text" }
                    ]}
    />
    <BuildingLLMDevelopment_Second/>
    <S_lastSection/>
    </>
  )
}

export default BuildingLLMDevelopment;