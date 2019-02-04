import {DeclarationAttributes} from "xml-js";

export type ArrayOrOne<T> = T[] | T;

export interface RawText {
    _text: string;
}

export interface RawLocalizedText {
    _text: string;
    _attributes: {
        "xml:lang": string;
    },
}

export interface RawLinkAttributes {
    _attributes: {
        url?: string;
        mimeValue?: string;
        "xml:lang"?: string;
        uri?: string;
        description?: string;
    }
}

export interface RawMediaDescription {
    multimedia: {
        _attributes: {
            height: string;
            width: string;
            type: string;
            url: string;
        },
    },
}

export interface RawRadioDns {
    _attributes: {
        fqdn: string;
        serviceIdentifier: string;
    },
}

export interface RawBearer {
    _attributes: {
        id: string;
        cost?: string;
        offset?: string;
        mimeValue?: "audio/aacp" | "audio/mpeg";
        bitrate?: string;
    },
}

export interface RawGenre {
    _attributes: {
        href: string;
    },
    _text: string;
}

export interface RawGeolocation {
    country?: RawText,
}

/**
 * Raw SPI service (station) - directly from XML2JS.
 */
export interface RawSPIService {
    shortName?: RawText,
    mediumName?: RawText,
    longName?: RawText,
    shortDescription?: RawLocalizedText,
    link?: ArrayOrOne<RawLinkAttributes>,
    keywords?: RawText,
    radiodns: RawRadioDns,
    bearer?: ArrayOrOne<RawBearer>,
    mediaDescription: RawMediaDescription[],
    genre?: ArrayOrOne<RawGenre>,
}

export interface RawServiceProvider {
    shortName?: RawLocalizedText,
    mediumName?: RawLocalizedText,
    longName?: RawLocalizedText,
    shortDescription?: RawLocalizedText,
    link?: ArrayOrOne<RawLinkAttributes>,
    keywords?: RawText,
    mediaDescription: RawMediaDescription[],
    geolocation: RawGeolocation,
}

export interface RawSIFile {
    _declaration: {
        _attributes: DeclarationAttributes,
    },
    serviceInformation: {
        services: {
            service?: ArrayOrOne<RawSPIService>,
            serviceProvider?: RawServiceProvider,
        },
    },
}
