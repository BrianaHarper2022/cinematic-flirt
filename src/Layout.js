import React from "react";
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}