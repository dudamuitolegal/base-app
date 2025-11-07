import Image from 'next/image';
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type PromoBannerProps = {
    imageSrc: string;
    titleLine1: string;
    titleLine2?: string;
    description: string;
    buttonText: string;
};

// Agora o componente recebe as props
export default function PromoBanner({
    imageSrc,
    titleLine1,
    titleLine2,
    description,
    buttonText,
}: PromoBannerProps) {
    return (
        <div className="relative rounded-2xl overflow-hidden aspect-[16/12]">
            <Image
                src={imageSrc}
                alt="Banner promocional"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-60"
                title="Banner promocional"
            />
            <div className="relative z-10 p-6 flex flex-col justify-center h-full max-w-[55%]">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-extrabold text-text [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
                        {titleLine1}
                        {titleLine2 && (
                            <>
                                <br />
                                {titleLine2}
                            </>
                        )}
                    </h2>
                    <p className="text-sm text-text-muted font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                        {description}
                    </p>
                    <div className="mt-2">
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                color: '#000',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 1)',
                                },
                            }}
                            startIcon={<StarBorderIcon />}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}