import React from 'react'
import DataCloud_First from './DataCloud_First/DataCloud_First'
import DataCloud_Second from './DataCloud_Second/DataCloud_Second'
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection'
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function DataCloud() {
  return (
    <>
    {/* <DataCloud_First/> */}
     <HeaderWithBg  title="Data Cloud + A.I"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Data Cloud + A.I", color: "purple-text" }
                    ]}
    />
    <DataCloud_Second/>
    <S_lastSection/>
    </>
  )
}

export default DataCloud;