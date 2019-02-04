import {DeclarationAttributes} from "xml-js";

export interface LocalizedText {
    text: string;
    lang: string;
}

export interface LinkAttributes {
    url: string | null;
    mimeValue: string | null;
    lang: string | null;
    uri: string | null;
    description: string | null;
}

export interface MediaDescription {
    height: number;
    width: number;
    type: string;
    url: string;
}

export interface RadioDns {
    fqdn: string;
    serviceIdentifier: string;
}

export interface Bearer {
    id: string;
    cost: number | null;
    offset: number | null;
    mimeValue: "audio/aacp" | "audio/mpeg" | "audio/aac" | null;
    bitrate: string | null;
}

export interface Genre {
    href: string;
    text: string;
}

export interface Geolocation {
    country: string | null,
}

/**
 * Raw SPI service (station) - directly from XML2JS.
 */
export interface Service {
    shortName: string | null,
    mediumName: string | null,
    longName: string | null,
    shortDescription: LocalizedText | null,
    link: LinkAttributes[],
    keywords: string | null,
    radiodns: RadioDns,
    bearer: Bearer[],
    mediaDescription: MediaDescription[],
    genre: Genre[],
}

export interface ServiceProvider {
    shortName: LocalizedText | null,
    mediumName: LocalizedText | null,
    longName: LocalizedText | null,
    shortDescription: LocalizedText | null,
    link: LinkAttributes[],
    keywords: string | null,
    mediaDescription: MediaDescription[],
    geolocation: Geolocation,
}

export interface SPIFile {
    declaration: DeclarationAttributes,
    services: Service[],
    serviceProvider: ServiceProvider | null,
}
