import { useEffect } from "react";

const RedirectPage = () => {
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.includes("android")) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.pitchle.pitchleApp";
        } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
            window.location.href = "https://apps.apple.com/us/app/pitchle/id6677026938";
        } else {
            window.location.href = "https://pitchleapp.com/"; // Fallback
        }
    }, []);

    return <h2>Redirecting...</h2>;
};

export default RedirectPage;
