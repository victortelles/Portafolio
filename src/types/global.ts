
// Types for Global Application State

// Disponibilidad Global
export type AvailabilityStatus = "Disponible" | "Medio Ocupado" | "Ocupado";

// Mensajes de Disponibilidad
export type AvailabilityMessages = {
    Disponible: string;
    "Medio Ocupado": string;
    Ocupado: string;
};

// Estructura de Disponibilidad Global
export type GlobalAvailability = {
    status: AvailabilityStatus;
    messages: AvailabilityMessages;
};

// Estructura completa del estado global
export type GlobalData = {
    availability: GlobalAvailability;
};