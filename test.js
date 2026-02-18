const assert = require("assert");
const path = require("path");
const os = require("os");
const fs = require("fs");
const downloads = require("./");
const { getXDGDownloadDir } = require("./");

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

    describe("getXDGDownloadDir", () => {
        const tmpDir = path.join(os.tmpdir(), "os-downloads-test");

        beforeEach(() => {
            fs.mkdirSync(tmpDir, { recursive: true });
        });

        afterEach(() => {
            fs.rmSync(tmpDir, { recursive: true, force: true });
        });

        it("parses XDG_DOWNLOAD_DIR with $HOME", () => {
            const configPath = path.join(tmpDir, "user-dirs.dirs");
            fs.writeFileSync(configPath, 'XDG_DOWNLOAD_DIR="$HOME/Downloads"\n');
            const result = getXDGDownloadDir(configPath);
            assert.strictEqual(result, path.join(os.homedir(), "Downloads"));
        });

        it("parses XDG_DOWNLOAD_DIR with absolute path", () => {
            const configPath = path.join(tmpDir, "user-dirs.dirs");
            fs.writeFileSync(configPath, 'XDG_DOWNLOAD_DIR="/custom/downloads"\n');
            const result = getXDGDownloadDir(configPath);
            assert.strictEqual(result, path.normalize("/custom/downloads"));
        });

        it("parses XDG_DOWNLOAD_DIR among other entries", () => {
            const configPath = path.join(tmpDir, "user-dirs.dirs");
            const content = [
                'XDG_DESKTOP_DIR="$HOME/Desktop"',
                'XDG_DOWNLOAD_DIR="$HOME/MyDownloads"',
                'XDG_DOCUMENTS_DIR="$HOME/Documents"',
            ].join("\n");
            fs.writeFileSync(configPath, content);
            const result = getXDGDownloadDir(configPath);
            assert.strictEqual(result, path.join(os.homedir(), "MyDownloads"));
        });

        it("returns null when XDG_DOWNLOAD_DIR is not present", () => {
            const configPath = path.join(tmpDir, "user-dirs.dirs");
            fs.writeFileSync(configPath, 'XDG_DESKTOP_DIR="$HOME/Desktop"\n');
            const result = getXDGDownloadDir(configPath);
            assert.strictEqual(result, null);
        });

        it("returns null when config file does not exist", () => {
            const configPath = path.join(tmpDir, "nonexistent");
            const result = getXDGDownloadDir(configPath);
            assert.strictEqual(result, null);
        });
    });
});
