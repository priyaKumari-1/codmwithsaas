import React from 'react'
import PythonApplication_First from './PythonApplication_First/PythonApplication_First';
import PythonApplication_Second from './PythonApplication_Second/PythonApplication_Second';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';
import HeaderWithBg from '../../utils/HeaderWithBg/HeaderWithBg';

function PythonApplication() {
  return (
    <>
    {/* <PythonApplication_First/> */}
    <HeaderWithBg  title="Python Application"
                    breadcrumbs={[
                        { label: "Home", link: "/" },
                          { label:"Services",link:"/ItServices"},
                        { label: "Python Application", color: "purple-text" }
                    ]}
    />
    <PythonApplication_Second/>
    <S_lastSection/>
     </>
  )
}

export default PythonApplication;