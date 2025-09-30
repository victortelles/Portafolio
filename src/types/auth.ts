// Authentication related types

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role?: string;
    provider: "email" | "google" | "discord";
}

export interface LoginCredentials {
    emailOrUsername: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    user?: User;
    token?: string;
    error?: string;
}

export interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

export interface LoginFormData {
    emailOrUsername: string;
    password: string;
}

export interface SocialProvider {
    id: string;
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    className: string;
}
