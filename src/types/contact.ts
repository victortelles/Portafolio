// Tipos para la información personal
export interface PersonalInfo {
    name: string
    role: string
    email: string
    location: string
    phone: string
}

// Tipos para disponibilidad
export interface Availability {
    status: string
    description: string
}

// Tipos para tiempo de respuesta
export interface ResponseTime {
    message: string
    detail: string
}

// Tipos para redes sociales
export interface SocialLink {
    name: string
    url: string
    icon: string
    description: string
}

// Tipos para contacto preferido
export interface PreferredContact {
    primary: string
    secondary: string
    note: string
}

// Tipo principal para datos de ContactInfo
export interface ContactInfoData {
    personalInfo: PersonalInfo
    availability: Availability
    responseTime: ResponseTime
    socialLinks: SocialLink[]
    preferredContact: PreferredContact
}

// Tipos para el formulario de contacto
export interface ContactFormField {
    name: string
    email: string
    subject: string
    message: string
}

export interface ContactFormErrors {
    name?: string
    email?: string
    subject?: string
    message?: string
}

export interface ContactFormState extends ContactFormField { }

// Tipos para el héroe del contacto
export interface ContactHeroData {
    title: string
    subtitle: string
    description: string
    features: string[]
}

// Tipos para ContactPage
export interface ContactPageData {
    backButton: {
        label: string
    }
    footerNote: {
        note: string
    }
}

// Tipos para validación
export interface ValidationRules {
    required: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    message: string
}

export interface FormFieldValidation {
    [key: string]: ValidationRules[]
}

// Tipos para ContactButton
export interface SubmitButton {
    text: string
    icon: string
    phoneNumber?: string
    emailAddress?: string
    backgroundColor: string
    hoverColor: string
}

export interface ContactButtonProps {
    button: SubmitButton
    formData: ContactFormState
    type: "whatsapp" | "email"
    disabled?: boolean
}