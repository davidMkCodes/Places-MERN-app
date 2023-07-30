import React, { useState } from "react";
import './MainNavigation.css';
import MainHeader from "./MainHeader";
import {Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop/Backdrop";

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }
    return (
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
            <SideDrawer onClick={closeDrawerHandler} show={drawerIsOpen} >
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button onClick={openDrawerHandler} className="main-navigation__menu-btn">
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">
                        Your Places
                    </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </>
    )
}

export default MainNavigation;