import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import S_rightSidebarDataDevelopment from "../ServiceSidebar/S_rightSidebarDataDevelopment";
// import ReactApplication_First from "./ReactApplication_First/ReactApplication_First";
import ReactApplication_Second from "./ReactApplication_Second/ReactApplication_Second";
import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";

function ReactApplication() {
  return (
    <>
    {/* <ReactApplication_First/> */}
    <HeaderWithBg  title="React Application"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "React Application", color: "purple-text" }
                    ]}
    />
    <ReactApplication_Second/>
    <S_lastSection/>
    </>
  )
}

export default ReactApplication;