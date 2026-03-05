import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import ManufacturingCloud_First from "./ManufacturingCloud_First/ManufacturingCloud_First";
function ManufacturingCloud() {
  return (
    <>
    <HeaderWithBg  title="Salesforce Manufacturing Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce Manufacturing Cloud", color: "purple-text"}
                    ]}
    />
    <ManufacturingCloud_First/>
    <S_lastSection/>
    </>
    
  )
}
export default ManufacturingCloud;