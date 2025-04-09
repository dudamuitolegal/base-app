"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  House,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
    },
    {
      title: "Slots",
      url: "#",
      icon: House,
    },
    {
      title: "Cassino ao vivo",
      url: "#",
      icon: House,
    },
    {
      title: "Esportes",
      url: "#",
      icon: House,
    },
    {
      title: "E-sportes",
      url: "#",
      icon: House,
    },
    {
      title: "Torneios",
      url: "#",
      icon: House,
    },
    {
      title: "Promoções",
      url: "#",
      icon: House,
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div></div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
