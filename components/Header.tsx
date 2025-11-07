'use client';

import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="shadow-sm sticky top-0 z-10 border-glow-effect">
            <Box
                component="div"
                className="mx-auto flex max-w-sm items-center justify-between"
            >
                <div className="flex items-center gap-2">
                    <IconButton aria-label="menu" edge="start">
                        <MenuIcon className="text-text" />
                    </IconButton>
                    <Image
                        src="/images/logo.png"
                        alt="Website LOGO"
                        width={80}
                        height={20}
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <Button
                        variant="outlined"
                        size="small"
                        fullWidth
                    >
                        Entrar
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        disableElevation
                        fullWidth
                    >
                        Registrar
                    </Button>
                </div>
            </Box>
        </header >
    );
}