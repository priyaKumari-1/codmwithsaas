import ApiIntegration_First from './ApiIntegration_First/ApiIntegration_First'
import ApiIntegration_Second from './ApiIntegration_Second/ApiIntegration_Second'
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function ApiIntegration() {
  return (
    <>
    
  <HeaderWithBg  title="API Integration"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Service",link:"/ItServices"},
                        { label: "API Integration", color: "purple-text" }
                    ]}
    />
    <ApiIntegration_Second/>
    <S_lastSection/>
    </>
  )
}

export default ApiIntegration