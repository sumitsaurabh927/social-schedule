"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import dotenv from "dotenv";
import formbricks from "@formbricks/js";

dotenv.config();

if (typeof window !== "undefined") {
    formbricks.init({
        environmentId: process.env.NEXT_PUBLIC_ENV_ID,
        apiHost: "https://app.formbricks.com",
        debug: true,
    });
}

export default function FormbricksProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        formbricks?.registerRouteChange();
    }, [pathname, searchParams]);

    return null;
}
