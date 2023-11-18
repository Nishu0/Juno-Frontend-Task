"use client";
import React from "react";
import Link from 'next/link'
import "./style.css";
import {usePathname } from 'next/navigation'



const Sidebar = () => {
    const pathname = usePathname()
    

    const MenuItem = ({name, route,isSelected }) => {
        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`${isSelected ? 'selected' : 'link'}`}
            >
                <div className={`${isSelected ? 'selectedtext' : 'name'}`}>{name}</div>
            </Link>
        )
    }


    return (
    console.log(pathname),
    <div className="sidebar">
        <div className="container">
        <img className="logo" alt="Image" src='juno-logo.svg' />
        <div className="options">
            <MenuItem
                name="Overview" 
                route="/" 
                isSelected={pathname === "/overview"}
            />
            <MenuItem
                name="Onboarding" 
                route="/" 
                isSelected={pathname === "/onboarding"}
            />
            <MenuItem
                name="Monitoring" 
                route="/" 
                isSelected={pathname === "/"}
            />
            <MenuItem
                name="Flagging" 
                route="/" 
                className="selected"
                isSelected={pathname === "/flagging"}
            />
            <MenuItem
                name="Source of Income" 
                route="/" 
                isSelected={pathname === "/source-of-income"}
            />
            <MenuItem
                name="UAR" 
                route="/" 
                isSelected={pathname === "/uar"}
            />
        </div>
        </div>

        <div className="user-profile">
            <div className="avatar-data">
                <div className="avatar-image" />
                <div className="text-container">
                <div className="avatar-name">Nisarg Thakkar</div>
                <div className="avatar-email">nisarg@onjuno.com</div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Sidebar;