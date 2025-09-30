// Dashboard and Sidebar Types

export interface SidebarMenuItem {
    id: string;
    label: string;
    href: string;
    icon: string;
    type: 'link' | 'crud';
    description?: string;
}

export interface SidebarContent {
    title: string;
    logoText: string;
    menuItems: SidebarMenuItem[];
    userSection: {
        profileLabel: string;
        logoutLabel: string;
        settingsLabel: string;
    };
    collapsedTooltips: {
        expand: string;
        collapse: string;
    };
}

export interface DashboardStat {
    label: string;
    description: string;
}

export interface QuickAction {
    id: string;
    label: string;
    description: string;
    icon: string;
    href: string;
}

export interface DashboardContent {
    dashboard: {
        welcome: {
            title: string;
            subtitle: string;
        };
        stats: {
            totalUsers: DashboardStat;
            totalDownloads: DashboardStat;
            activeConnections: DashboardStat;
            revenue: DashboardStat;
        };
        quickActions: {
            title: string;
            actions: QuickAction[];
        };
        recentActivity: {
            title: string;
            showAll: string;
        };
    };
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
}
