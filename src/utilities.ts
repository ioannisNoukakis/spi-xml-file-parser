import {Bearer, LinkAttributes, MediaDescription} from "./models/parsed-si-file";
import {ArrayOrOne, RawBearer, RawLinkAttributes, RawMediaDescription} from "./models/raw-si-file";

/**
 * Parses a raw Bearer attribute.
 *
 * @param bearer: The raw bearer attribute to be parsed.
 */
export const parseRawBearer: (bearer: RawBearer) => Bearer = (bearer) => ({
    ...bearer._attributes,
    offset: bearer._attributes.offset ? parseInt(bearer._attributes.offset, 10) :  null,
    cost: bearer._attributes.cost ? parseInt(bearer._attributes.cost, 10) : null,
    mimeValue: bearer._attributes.mimeValue ? bearer._attributes.mimeValue : null,
    bitrate: bearer._attributes.bitrate ? bearer._attributes.bitrate : null,
});

/**
 * Parses a raw media description array attribute.
 *
 * @param rawMediaDescription: The raw media description array to be parsed.
 */
export const parseRawMediaDescription: (rawMediaDescription: RawMediaDescription[]) => MediaDescription[] = (rawMediaDescription) =>
    rawMediaDescription ? rawMediaDescription.map((mediaDescription) => ({
            ...mediaDescription.multimedia._attributes,
            height: parseInt(mediaDescription.multimedia._attributes.height, 10),
            width: parseInt(mediaDescription.multimedia._attributes.width, 10),
        }))
        : [];

/**
 * Parses raw link(s) attribute.
 *
 * @param rawLinks: The raw link(s) to be parsed.
 */
export const parseRawLink: (rawLinks: ArrayOrOne<RawLinkAttributes> | undefined) => LinkAttributes[] = (rawLinks) =>
    rawLinks
        ? [
            ...Array.isArray(rawLinks)
                ? rawLinks.map((link) => rawLinkToLink(link))
                : [rawLinkToLink(rawLinks)],
        ]
        : [];

const rawLinkToLink: (rawLink: RawLinkAttributes) => LinkAttributes = (rawLink) => ({
    url: rawLink._attributes.url || null,
    mimeValue: rawLink._attributes.mimeValue || null,
    lang: rawLink._attributes["xml:lang"] || null,
    uri: rawLink._attributes.url || null,
    description: rawLink._attributes.description || null,
});
