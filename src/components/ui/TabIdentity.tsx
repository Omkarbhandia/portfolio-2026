"use client";

import { useEffect } from "react";

export default function TabIdentity() {
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "System Standby...";
            } else {
                document.title = "Omkar Bhandia // Product Engineer";
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return null;
}
