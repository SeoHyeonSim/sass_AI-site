"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("09b7895b-b8c8-42bb-957b-5eebb706d528");
    }, []);

    return null
};
