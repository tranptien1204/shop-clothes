import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopType = {
    children: React.ReactNode
}

const ScrollToTop = ({ children }: ScrollToTopType) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
};

export default ScrollToTop;
