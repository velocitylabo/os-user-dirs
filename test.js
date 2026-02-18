const assert = require("assert");
const path = require("path");
const os = require("os");
const downloads = require("./");

describe("os-downloads", () => {
    describe("downloads", () => {
        it("returns a path ending with Downloads", () => {
            assert.ok(path.basename(downloads()).match(/downloads/i));
        });

        it("returns an absolute path", () => {
            assert.ok(path.isAbsolute(downloads()));
        });

        it("path starts with home directory", () => {
            assert.ok(downloads().startsWith(os.homedir()));
        });
    });
});
