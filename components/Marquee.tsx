'use client';

import React from 'react';
import Marquee from "react-fast-marquee";
import CampaignIcon from '@mui/icons-material/Campaign';

export default function MarqueeComponent() {
    const promoText = "Só na UP você tem 50% de cashback nas suas apostas das primeiras 24 horas, com limite de até R$ 2.000!";

    return (
        <div className="bg-accent text-accent-fg flex items-center h-8 rounded-md">

            <div className="flex-shrink-0 px-4">
                <CampaignIcon />
            </div>
            <Marquee speed={60} pauseOnHover={true}>

                <span className="mx-4 text-sm">{promoText}</span>
            </Marquee>

        </div>
    );
}