import React from 'react'
import MarketingCloud_First from './MarketingCloud_First/MarketingCloud_First'
import MarketingCloud_Second from './MarketingCloud_Second/MarketingCloud_Second'
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function MarketingCloud() {
  return (
    <>
    {/* <MarketingCloud_First/> */}
     <HeaderWithBg  title="Salesforce Marketing Cloud Services"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Salesforce Marketing Cloud Services", color: "purple-text" }
                    ]}
    />
    <MarketingCloud_Second/>
    </>
  )
}

export default MarketingCloud