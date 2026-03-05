import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HealthInsuranceCloud_First from './HealthInsuranceCloud_First/HealthInsuranceCloud_First';

function HealthInsuranceCloud() {
  return (
    <>
    <HeaderWithBg  title="Salesforce Health & Insurance Cloud"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce Health & Insurance Cloud", color: "purple-text" }
                    ]}
    />
    <HealthInsuranceCloud_First/>
    <S_lastSection/>
    </>
  )
}
export default HealthInsuranceCloud;