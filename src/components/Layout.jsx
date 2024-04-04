import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Search from "./Search";

function Layout() {
    return (
        <div>
            <div className="min-h-[100vh]">
                <Nav />
                <Search />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
