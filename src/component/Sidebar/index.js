import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="whatiscovid" onClick={toggle}>COVID-19 คืออะไร?</SidebarLink>
                    <SidebarLink to="howtoprotect" onClick={toggle}>การป้องกัน</SidebarLink>
                    <SidebarLink to="covidvaccine" onClick={toggle}>วัคซีนโควิค</SidebarLink>
                    <SidebarLink to="covidcases" onClick={toggle}>รายงานผู้ติดเชื้อโควิด-19</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
