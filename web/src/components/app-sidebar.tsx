"use client"

import * as React from "react"
import {
  SquareUserRound,
  Users,
  Layers,
  Box,
  Inbox,
  Focus,
  NotebookPen,
  Copy,
  Plus,
  CirclePlay
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// this is a mock data structure for the sidebar
const data = {
  user: {
    name: "Jatin Kaushik",
    email: "hi@jatinkaushik.com",
    avatar: "https://avatars.githubusercontent.com/u/20883804?v=4&size=64",
  },
  teams: [
    {
      name: "jatinkaushik",
      logo: SquareUserRound,
      plan: "Enterprise",
    }
  ],
  menuItems: [
    {
      name: "Main",
      isShowGroupName: false,
      items: [
        {
          title: "Inbox",
          url: "#",
          icon: Inbox,
        },
        {
          title: "My issues",
          url: "#",
          icon: Focus
        },
        {
          title: "Drafts",
          url: "#",
          icon: NotebookPen
        }
      ],
    },
    {
      name: "Workspace",
      isShowGroupName: true,
      items: [
        {
          title: "Projects",
          url: "#",
          icon: Box
        },
        {
          title: "Views",
          url: "#",
          icon: Layers
        },
        {
          title: "Members",
          url: "#",
          icon: Users
        },
        {
          title: "Teams",
          url: "#",
          icon: SquareUserRound
        },
      ],
    },
    {
      name: "Your Teams",
      isShowGroupName: true,
      items: [
        {
          title: "jatinkaushik",
          url: "#",
          icon: SquareUserRound,
          items: [
            {
              title: "Issues",
              url: "#",
              icon: Copy
            },
            {
              title: "Projects",
              url: "#",
              icon: Box
            },
            {
              title: "Views",
              url: "#",
              icon: Layers
            },
          ]
        },
      ],
    },
    {
      name: "Try",
      isShowGroupName: true,
      items: [
        {
          title: "Import issues",
          url: "#",
          icon: Copy
        },
        {
          title: "Invite people",
          url: "#",
          icon: Plus
        },
        {
          title: "Cycles",
          url: "#",
          icon: CirclePlay
        },
      ],
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain groups={data.menuItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
