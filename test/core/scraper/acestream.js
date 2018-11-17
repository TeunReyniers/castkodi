import assert      from "assert";
import { extract } from "../../../src/core/scrapers.js";

describe("scraper/acestream", function () {
    describe("#patterns", function () {
        it("should return the URL when it's a unsupported URL", function () {
            const url = "http://www.acestream.org/";
            return extract(url).then(function (file) {
                assert.strictEqual(file, url);
            });
        });
    });

    describe("acestream://*", function () {
        it("should return video id", function () {
            const url = "acestream://94c2fd8fb9bc8f2fc71a2cbe9d4b866f227a0209";
            const expected = "plugin://program.plexus/?mode=1&name=&url=" +
                             "acestream%3A%2F%2F94c2fd8fb9bc8f2fc71a2cbe9d4b8" +
                                                                  "66f227a0209";
            return extract(url).then(function (file) {
                assert.strictEqual(file, expected);
            });
        });
    });
});