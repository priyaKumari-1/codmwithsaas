import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import DataIntegration_First from "./DataIntegration_First/DataIntegration_First";
import DataIntegration_Second from "./DataIntegration_Second/DataIntegration_Second";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";

function DataIntegration() {
  return (
    <>
    {/* <DataIntegration_First/> */}
    <HeaderWithBg  title="Data Integration/Migration"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Data Integration/Migration", color: "purple-text" }
                    ]}
    />
    <DataIntegration_Second/>
    <S_lastSection/>
    </>
  )
}

export default DataIntegration;