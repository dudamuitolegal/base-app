"use client";

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const MorePaySkeleton = () => (
    <div className="p-4 bg-[#6a728217] dark:bg-surface-accent rounded-xl mt-4">
        <div className="flex items-center gap-4 justify-between">
            <Skeleton className="h-8 w-1/2" />
        </div>
        <Skeleton className="mt-2 h-[210px] w-full rounded-lg" />
    </div>
);


const LazyMorePayComponent = dynamic(
    () => import('@/app/components/MorePay'),
    {

        loading: () => <MorePaySkeleton />,

        ssr: false,
    }
);

export default LazyMorePayComponent;