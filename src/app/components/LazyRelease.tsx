"use client";

import dynamic from 'next/dynamic';
import {Skeleton} from '@/components/ui/skeleton';

const CarouselSkeleton = () => (
    <div className="p-4 bg-[#6a728217] dark:bg-[#ffffff1c] rounded-xl">
        <div className="flex items-center gap-4 justify-between">
            <Skeleton className="h-8 w-1/2"/>
        </div>
        <Skeleton className="mt-2 h-[150px] w-full rounded-lg"/>
    </div>
);

const LazyLancamentosComponent = dynamic(
    () => import('@/app/components/ReleaseSlider'),
    {

        loading: () => <CarouselSkeleton/>,


        ssr: false,
    }
);

export default LazyLancamentosComponent;