import {xml2js} from "xml-js";
import {Service, ServiceProvider, SPIFile} from "./models/parsed-si-file";
import {ArrayOrOne, RawServiceProvider, RawSIFile, RawSPIService} from "./models/raw-si-file";
import {parseRawBearer, parseRawLink, parseRawMediaDescription} from "./utilities";

/**
 * Parses the provided XML file.
 *
 * @Throws `TypeError` when supplied with an empty string.
 * @Throws `Error` when supplied with an invalid XML string.
 * @param xml: The raw xml file.
 */
export const parse: (xml: string) => SPIFile = (xml) => {
    const parsedSPI: RawSIFile = xml2js(xml, {compact: true}) as any;
    const {service, serviceProvider} = parsedSPI.serviceInformation.services;

    return {
        declaration: parsedSPI._declaration._attributes,
        services: parseServices(service),
        serviceProvider: serviceProvider ? parseServiceProvider(serviceProvider) : null,
    }
};

/**
 * Parses the raw services of a raw SPI file.
 *
 * @param services: The raw services to be parsed.
 */
export const parseServices = (services: ArrayOrOne<RawSPIService> | undefined) => {
    if (!services) {
        return [];
    } else if (Array.isArray(services)) {
        return services.map((service) => parseService(service));
    } else {
        return [parseService(services)];
    }
};

/**
 * Parses the raw service of a raw SPI file.
 *
 * @param service: The raw service to be parsed.
 */
export const parseService: (service: RawSPIService) => Service = (service) => {
    return {
        shortName: service.shortName ? service.shortName._text : null,
        mediumName: service.mediumName ? service.mediumName._text : null,
        longName: service.longName ? service.longName._text : null,
        shortDescription: service.shortDescription
            ? {
                lang: service.shortDescription._attributes["xml:lang"],
                text: service.shortDescription._text,
            }
            : null,
        bearer: Array.isArray(service.bearer)
            ? service.bearer
                .map((bearer) => parseRawBearer(bearer))
            : service.bearer
                ? [parseRawBearer(service.bearer)]
                : [],
        genre: service.genre
            ? Array.isArray(service.genre)
                ? service.genre.map((genre) => ({text: genre._text, ...genre._attributes}))
                : [{text: service.genre._text, ...service.genre._attributes}]
            : [],
        link: parseRawLink(service.link),
        mediaDescription: parseRawMediaDescription(service.mediaDescription),
        radiodns: {...service.radiodns._attributes},
        keywords: service.keywords ? service.keywords._text : null,
    }
};

/**
 * Parses the raw service provider of a raw SPI file.
 *
 * @param rawServiceProvider: The raw service provider to be parsed.
 */
export const parseServiceProvider: (rawServiceProvider: RawServiceProvider) => ServiceProvider = (rawServiceProvider) => ({
    geolocation: rawServiceProvider.geolocation.country
        ? {country: rawServiceProvider.geolocation.country._text}
        : {country: "None"},
    link: parseRawLink(rawServiceProvider.link),
    shortName: rawServiceProvider.shortName ? {
            lang: rawServiceProvider.shortName._attributes["xml:lang"],
            text: rawServiceProvider.shortName._text,
        }
        : null,
    mediumName: rawServiceProvider.mediumName ? {
            lang: rawServiceProvider.mediumName._attributes["xml:lang"],
            text: rawServiceProvider.mediumName._text,
        }
        : null,
    longName: rawServiceProvider.longName ? {
            lang: rawServiceProvider.longName._attributes["xml:lang"],
            text: rawServiceProvider.longName._text,
        }
        : null,
    shortDescription: rawServiceProvider.shortDescription ? {
            lang: rawServiceProvider.shortDescription._attributes["xml:lang"],
            text: rawServiceProvider.shortDescription._text,
        }
        : null,
    mediaDescription: parseRawMediaDescription(rawServiceProvider.mediaDescription),
    keywords: rawServiceProvider.keywords ? rawServiceProvider.keywords._text : null,
});
