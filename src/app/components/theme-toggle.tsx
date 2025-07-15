"use client";
import {Button} from "@/components/ui/button"
import {useTheme} from "next-themes"
import {Sun, Moon} from "lucide-react"

export function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    return (
        <Button size="icon" variant="outline" className="rounded-full"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className={`absolute transition-300 h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0`}/>
            <Moon className={`absolute transition-300 h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100`}/>
        </Button>
    )
}