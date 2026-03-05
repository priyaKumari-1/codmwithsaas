// import DotNetApplication_First from './DotNetApplication_First/DotNetApplication_First';
import DotNetApplication_Second from './DotNetApplication_Second/DotNetApplication_Second';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function DotNetApplication() {
  return (
    <>
    {/* <DotNetApplication_First/> */}
    <HeaderWithBg  title=".NET Application"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: ".NET Application", color: "purple-text" }
                    ]}
    />
    <DotNetApplication_Second/>
    <S_lastSection/>
    
    </>
  )
}

export default DotNetApplication;