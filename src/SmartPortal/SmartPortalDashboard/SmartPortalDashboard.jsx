import { useState } from 'react';
import './SmartPortalDashboard.css';
import SmartPortalsidebar , { componentMap } from './SmartPortalsidebar/SmartPortalsidebar';

function SmartPortalDashboard({ name, username }) {
      const [active, setActive] = useState("dashboard");
    return (
        <>
            {/* {name} : :{username} */}
            <div className="SmartPortal-layout">
                <div className="SmartPortal-sidebar">
                    <SmartPortalsidebar active={active} setActive={setActive}/>
                </div>
                <div className="SmartPortal-dashboard">
                     {componentMap[active]}
                </div>
            </div>
        </>
    )
}

export default SmartPortalDashboard;