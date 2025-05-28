import {Volleyball, Tv, Trophy, Gift, Dices, Calendar, Star} from "lucide-react"
import {ThemeToggle} from "@/app/components/theme-toggle";
import {siteConfig} from "@/utils/siteConfig";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
// Menu items.
const items = [
    {
        title: "Cassino",
        icon: Dices,
    },
    {
        title: "Live cassino",
        icon: Tv,
    },
    {
        title: "Esportes",
        icon: Volleyball,
    },
    {
        title: "Torneios",
        icon: Trophy,
    },
    {
        title: "Promoções",
        icon: Gift,
    },
    {
        title: "Calendário",
        icon: Calendar,
    },
    {
        title: "Hall da fama",
        icon: Star,
    }
]

export function AppSidebar() {
    return (<Sidebar>
            <SidebarContent className={`bg-gray-50 dark:bg-gray-950`}>
                <SidebarGroup className={`gap-12`}>
                    <SidebarGroupLabel className={`justify-between items-center`}>
                        {siteConfig.name}
                        <ThemeToggle/>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link target="_blank" rel="noopener noreferrer" href={siteConfig.defaultLink}
                                              className="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md p-2 transition-colors duration-200 flex items-center gap-2">
                                        <item.icon/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )

}
