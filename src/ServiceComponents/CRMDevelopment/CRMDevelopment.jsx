import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection'
// import CRMDevelopment_First from './CRMDevelopment_First/CRMDevelopment_First'
import CRMDevelopment_Second from './CRMDevelopment_Second/CRMDevelopment_Second';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function CRMDevelopment() {
  return (
    <>
    {/* <CRMDevelopment_First/> */}
     <HeaderWithBg title="Salesforce CRM"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce CRM", color: "purple-text" }
                    ]}
    />
    <CRMDevelopment_Second/>
    <S_lastSection/>
    </>
  )
}
export default CRMDevelopment;