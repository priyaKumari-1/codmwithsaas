import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import BuildingLLMDevelopment_Second from "./BuildingLLMDevelopment_Second/BuildingLLMDevelopment_Second";
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg'; 

function BuildingLLMDevelopment() {
  return (
    <>
    {/* <BuildingLLMDevelopment_First/> */}
     <HeaderWithBg  title="Building LLM"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Building LLM", color: "purple-text" }
                    ]}
    />
    <BuildingLLMDevelopment_Second/>
    <S_lastSection/>
    </>
  )
}

export default BuildingLLMDevelopment;