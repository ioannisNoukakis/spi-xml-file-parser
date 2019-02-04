import {parse} from "../src/parser";
import {MULTI_SERVICE_PARSED_SPI_FILE} from "./ressources/multi-service-parsed-xml-file";
import {SINGLE_SERVICE_PARSED_SPI_FILE} from "./ressources/single-service-parsed-xml-file";
import {MULTIPLE_SERVICE_RAW_SPI_FILE, SINGLE_SERVICE_SPI_FILE} from "./ressources/xml-files";

describe("General tests", () => {
    test("should handle empty string", () => {
        try {
            parse("");
        } catch (e) {
            expect(e.name).toBe("TypeError");
        }
    });

    test("should handle malformed/invalid XML string", () => {
        try {
            parse("<Servic /D><");
        } catch (e) {
            expect(e.name).toBe("Error");
        }
    });

    test("should handle a correct file with only one service", () => {
        expect(parse(SINGLE_SERVICE_SPI_FILE)).toEqual(SINGLE_SERVICE_PARSED_SPI_FILE);
    });

    test("should handle a correct file with multiple services", () => {
        expect(parse(MULTIPLE_SERVICE_RAW_SPI_FILE)).toEqual(MULTI_SERVICE_PARSED_SPI_FILE);
    });
});
