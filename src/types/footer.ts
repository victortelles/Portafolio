// Types for Footer Component

// Footer Marca
export type FooterBrand = {
    name: string;
    tagline: string;
    avatar: string;
};

// Footer Redes Sociales
export type FooterSocial = {
    platform: string;
    href: string;
    label: string;
};

// Footer Enlaces Rápidos
export type FooterQuickLink = {
    label: string;
    href: string;
};

// Estructura completa del contenido del Footer
export type FooterContent = {
    brand: FooterBrand;
    socials: FooterSocial[];
    quickLinks: FooterQuickLink[];
    footer: {
        copyright: string;
        privacy: {
            label: string;
            href: string;
        };
        credits: {
            label: string;
            href: string;
        };
        faqs: {
            label: string;
            href: string;
        };
    };
};
