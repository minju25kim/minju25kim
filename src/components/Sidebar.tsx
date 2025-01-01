import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

// const menu = [
//     { name: 'Home', href: '/' },
//     { name: 'dev', href: '/dev' },
//     { name: 'resume', href: '/resume' },
//     { name: 'terminology', href: '/terminology' },
//     { name: 'til', href: '/til' },
//     { name: 'howto', href: '/howto' },
// ];

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}
