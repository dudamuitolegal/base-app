"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogClose, DialogTitle} from "@/components/ui/dialog";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";

interface PopupData {
    active: boolean;
    imageUrl: string;
    imageTitle: string;
    imageAlt: string;
    linkUrl: string;
}

const POPUP_CONFIG_URL = "https://blog.up.bet.br/popup.json";
const LOCAL_STORAGE_KEY = "popup-suppress-until";

export default function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [popupData, setPopupData] = useState<PopupData | null>(null);
    const [dontShowAgain, setDontShowAgain] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const suppressedUntil = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (suppressedUntil && new Date().getTime() < parseInt(suppressedUntil)) {
            return;
        }

        const fetchPopupData = async () => {
            try {
                const response = await fetch(`${POPUP_CONFIG_URL}?v=${Date.now()}`);
                if (!response.ok) return;

                const data: PopupData = await response.json();
                if (data && data.active) {
                    setPopupData(data);
                    setIsOpen(true);
                }
            } catch (error) {
                console.error("Erro ao processar dados do pop-up:", error);
            }
        };

        const initialDelayTimer = setTimeout(() => {
            fetchPopupData();
        }, 2000);

        return () => clearTimeout(initialDelayTimer);

    }, []);

    const handleClose = (open: boolean) => {
        if (!open && dontShowAgain) {
            const today = new Date();
            today.setHours(23, 59, 59, 999);
            localStorage.setItem(LOCAL_STORAGE_KEY, today.getTime().toString());
        }
        setIsOpen(open);
    };

    if (!popupData) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-transparent border-none shadow-none p-0 max-w-sm w-full">
                <div className="relative bg-background border rounded-xl shadow-2xl overflow-hidden">
                    <DialogTitle className="sr-only">{popupData.imageTitle}</DialogTitle>
                    <DialogClose asChild className="absolute top-2 right-2 z-20">
                        <Button variant="ghost" size="icon"
                                className="rounded-full bg-black/50 text-white hover:bg-black/75 hover:text-white cursor-pointer">
                            <X className="h-5 w-5"/>
                        </Button>
                    </DialogClose>

                    <Link href={popupData.linkUrl} target="_blank" rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}>
                        <div className="relative">
                            {!isImageLoaded && (
                                <div className="absolute inset-0 bg-muted animate-pulse"/>
                            )}
                            <Image
                                src={popupData.imageUrl}
                                alt={popupData.imageAlt}
                                title={popupData.imageTitle}
                                width={400}
                                height={250}
                                style={{objectFit: "cover"}}
                                onLoadingComplete={() => setIsImageLoaded(true)}
                                className={cn(
                                    "transition-opacity duration-300",
                                    isImageLoaded ? "opacity-100" : "opacity-0"
                                )}
                            />
                        </div>
                    </Link>
                    <div className="flex flex-col items-center justify-between gap-4 p-4 bg-background/95 backdrop-blur-sm">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="dont-show-again"
                                checked={dontShowAgain}
                                onCheckedChange={(checked) => setDontShowAgain(!!checked)}
                            />
                            <Label htmlFor="dont-show-again"
                                   className="text-sm font-medium text-muted-foreground cursor-pointer">
                                Não mostrar novamente hoje
                            </Label>
                        </div>
                        <DialogClose asChild>
                            <Button variant="secondary" size="sm" className="w-full cursor-pointer sr-only">
                                Fechar
                            </Button>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}