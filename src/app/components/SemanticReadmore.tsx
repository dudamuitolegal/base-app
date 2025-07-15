'use client';

import { useState, useRef, useEffect } from 'react';

type SemanticReadMoreProps = {
    children: React.ReactNode;
    initialHeight?: string;
};

export const SemanticReadMore = ({
                                     children,
                                     initialHeight = '180px' // Altura inicial aproximada para 3 parágrafos
                                 }: SemanticReadMoreProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [needsExpansion, setNeedsExpansion] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            // Verifica se o conteúdo excede a altura inicial
            const needsExpand = contentRef.current.scrollHeight > contentRef.current.clientHeight;
            setNeedsExpansion(needsExpand);
        }
    }, []);

    return (
        <div className="relative">
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ${
                    !isExpanded ? 'max-h-[var(--initial-height)]' : 'max-h-none'
                }`}
                style={{ '--initial-height': initialHeight } as React.CSSProperties}
                aria-expanded={isExpanded}
            >
                <div className="prose dark:prose-invert">
                    {children}
                </div>
            </div>

            {needsExpansion && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-primary font-semibold hover:underline focus:outline-none text-gray-900 dark:text-white"
                    aria-label={isExpanded ? "Recolher conteúdo" : "Expandir conteúdo"}
                >
                    {isExpanded ? 'Leia menos' : 'Leia mais'}
                </button>
            )}
        </div>
    );
};