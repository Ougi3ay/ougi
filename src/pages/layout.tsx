import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="bg-surface min-h-screen text-text">
            <Outlet/>
        </div>
    );
}