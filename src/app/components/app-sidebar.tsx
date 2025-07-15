import {Volleyball, Tv, Trophy, Gift, Dices, Calendar, Star} from "lucide-react"
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
        link: "cassino",
    },
    {
        title: "Live cassino",
        icon: Tv,
        link: "live-cassino",
    },
    {
        title: "Esportes",
        icon: Volleyball,
        link: "esportes",
    },
    {
        title: "Torneios",
        icon: Trophy,
        link: "torneios",
    },
    {
        title: "Promoções",
        icon: Gift,
        link: "promocoes",
    },
    {
        title: "Calendário",
        icon: Calendar,
        link: "calendario",
    },
    {
        title: "Hall da fama",
        icon: Star,
        link: "hall-da-fama",
    }
]

export function AppSidebar() {
    return (<Sidebar>
            <SidebarContent className={`bg-gray-50 dark:bg-gray-950`}>
                <SidebarGroup className={`gap-12`}>
                    <SidebarGroupLabel className={`justify-between items-center`}>
                        {siteConfig.name}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={`${siteConfig.defaultLink}${item.link}`} target="_blank"
                                              rel="noopener noreferrer sponsored"
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
