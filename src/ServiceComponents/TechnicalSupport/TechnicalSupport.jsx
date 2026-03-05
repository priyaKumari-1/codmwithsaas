import TechnicalSupport_First from './TechnicalSupport_First/TechnicalSupport_First';
import TechnicalSupport_Seond from './TechnicalSupport_Second/TechnicalSupport_Seond';
// import TechnicalSupportAccodionData from './TechnicalSupportAccodionData/TechnicalSupportAccodionData';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function TechnicalSupport() {
  return (
    <>
    {/* <TechnicalSupport_First/> */}

     <HeaderWithBg  title="Technical Support"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Technical Support", color: "purple-text" }
                    ]}
    />
    <TechnicalSupport_Seond/>
    <S_lastSection/>
    </>
  )
}

export default TechnicalSupport;