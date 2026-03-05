import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import EnergyUtilitiesCloud_First from "./EnergyUtilitiesCloud_First/EnergyUtilitiesCloud_First";
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection.jsx';

function EnergyUtilitiesCloud() {
  return (
    <> 
    
  <HeaderWithBg  title="Salesforce Energy and Utilities Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce Energy and Utilities Cloud", color: "purple-text" }
                    ]}
    />
    <EnergyUtilitiesCloud_First/>
    <S_lastSection/>
    
    </>
  )
}
export default EnergyUtilitiesCloud;