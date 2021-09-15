import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLink} from './NavbarElement';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

    const togglehome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Navlogo to="/" onClick={togglehome}>COVID-19</Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu className="mt-3">
                        <NavItem>
                            <NavLink to='whatiscovid'>COVID-19 คืออะไร?</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='howtoprotect'>การป้องกัน</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='covidvaccine'>วัคซีนโควิค</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to='covidcases'>รายงานผู้ติดเชื้อโควิด-19</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
