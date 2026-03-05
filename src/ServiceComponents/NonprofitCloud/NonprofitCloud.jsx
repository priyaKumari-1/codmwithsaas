import HeaderWithBg from "../../utils/HeaderWithBg/HeaderWithBg";
import S_lastSection from "../HigherEducation/S_lastSection/S_lastSection";
import NonprofitCloud_First from "./NonprofitCloud_First/NonprofitCloud_First";

function NonprofitCloud() {
  return (
    <>
     <HeaderWithBg  title="Salesforce Nonprofit Cloud"
                        breadcrumbs={[
                            { label: "Home", link: "/" },
                              { label:"Services",link:"/ItServices"},
                            { label: "Salesforce Nonprofit Cloud", color: "purple-text"}
                        ]}
        />

      <NonprofitCloud_First/>
      <S_lastSection/>
    </>
  )
}

export default NonprofitCloud;