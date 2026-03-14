type DirName = "desktop" | "downloads" | "documents" | "music" | "pictures" | "videos" | "templates" | "publicshare";

/**
 * Returns the path to the Desktop directory.
 * @example
 * ```js
 * const { desktop } = require('os-user-dirs');
 * console.log(desktop());
 * // Linux:   '/home/user/Desktop'
 * // macOS:   '/Users/user/Desktop'
 * // Windows: 'C:\Users\user\Desktop'
 * ```
 */
export function desktop(): string;

/**
 * Returns the path to the Downloads directory.
 * @example
 * ```js
 * const { downloads } = require('os-user-dirs');
 * console.log(downloads());
 * // Linux:   '/home/user/Downloads'
 * // macOS:   '/Users/user/Downloads'
 * // Windows: 'C:\Users\user\Downloads'
 * ```
 */
export function downloads(): string;

/**
 * Returns the path to the Documents directory.
 * @example
 * ```js
 * const { documents } = require('os-user-dirs');
 * console.log(documents());
 * // Linux:   '/home/user/Documents'
 * // macOS:   '/Users/user/Documents'
 * // Windows: 'C:\Users\user\Documents'
 * ```
 */
export function documents(): string;

/**
 * Returns the path to the Music directory.
 * @example
 * ```js
 * const { music } = require('os-user-dirs');
 * console.log(music());
 * // Linux:   '/home/user/Music'
 * // macOS:   '/Users/user/Music'
 * // Windows: 'C:\Users\user\Music'
 * ```
 */
export function music(): string;

/**
 * Returns the path to the Pictures directory.
 * @example
 * ```js
 * const { pictures } = require('os-user-dirs');
 * console.log(pictures());
 * // Linux:   '/home/user/Pictures'
 * // macOS:   '/Users/user/Pictures'
 * // Windows: 'C:\Users\user\Pictures'
 * ```
 */
export function pictures(): string;

/**
 * Returns the path to the Videos directory (Movies on macOS).
 * @example
 * ```js
 * const { videos } = require('os-user-dirs');
 * console.log(videos());
 * // Linux:   '/home/user/Videos'
 * // macOS:   '/Users/user/Movies'
 * // Windows: 'C:\Users\user\Videos'
 * ```
 */
export function videos(): string;

/**
 * Returns the path to the Templates directory.
 * @example
 * ```js
 * const { templates } = require('os-user-dirs');
 * console.log(templates());
 * // Linux:   '/home/user/Templates'
 * // macOS:   '/Users/user/Templates'
 * // Windows: 'C:\Users\user\Templates'
 * ```
 */
export function templates(): string;

/**
 * Returns the path to the Public Share directory.
 * @example
 * ```js
 * const { publicshare } = require('os-user-dirs');
 * console.log(publicshare());
 * // Linux:   '/home/user/Public'
 * // macOS:   '/Users/user/Public'
 * // Windows: 'C:\Users\user\Public'
 * ```
 */
export function publicshare(): string;

/**
 * Returns the path to the specified user directory.
 * @example
 * ```js
 * const { getPath } = require('os-user-dirs');
 * console.log(getPath('downloads')); // '/home/user/Downloads'
 * console.log(getPath('desktop'));    // '/home/user/Desktop'
 * ```
 */
export function getPath(name: DirName): string;

/**
 * Returns the path to the user's home directory.
 * @example
 * ```js
 * const { homeDir } = require('os-user-dirs');
 * console.log(homeDir());
 * // Linux:   '/home/user'
 * // macOS:   '/Users/user'
 * // Windows: 'C:\Users\user'
 * ```
 */
export function homeDir(): string;

/**
 * Returns the path to the user local bin directory (~/.local/bin), or null on Windows.
 * @example
 * ```js
 * const { binDir } = require('os-user-dirs');
 * console.log(binDir());
 * // Linux/macOS: '/home/user/.local/bin'
 * // Windows:     null
 * ```
 */
export function binDir(): string | null;

type BaseDirName = "config" | "data" | "cache" | "state" | "log" | "runtime";

/**
 * Returns the path to the XDG config directory.
 * @example
 * ```js
 * const { configDir } = require('os-user-dirs');
 * console.log(configDir());
 * // Linux:   '/home/user/.config'
 * // macOS:   '/Users/user/Library/Application Support'
 * // Windows: 'C:\Users\user\AppData\Roaming'
 * ```
 */
export function configDir(): string;

/**
 * Returns the path to the XDG data directory.
 * @example
 * ```js
 * const { dataDir } = require('os-user-dirs');
 * console.log(dataDir());
 * // Linux:   '/home/user/.local/share'
 * // macOS:   '/Users/user/Library/Application Support'
 * // Windows: 'C:\Users\user\AppData\Local'
 * ```
 */
export function dataDir(): string;

/**
 * Returns the path to the XDG cache directory.
 * @example
 * ```js
 * const { cacheDir } = require('os-user-dirs');
 * console.log(cacheDir());
 * // Linux:   '/home/user/.cache'
 * // macOS:   '/Users/user/Library/Caches'
 * // Windows: 'C:\Users\user\AppData\Local'
 * ```
 */
export function cacheDir(): string;

/**
 * Returns the path to the XDG state directory.
 * @example
 * ```js
 * const { stateDir } = require('os-user-dirs');
 * console.log(stateDir());
 * // Linux:   '/home/user/.local/state'
 * // macOS:   '/Users/user/Library/Application Support'
 * // Windows: 'C:\Users\user\AppData\Local'
 * ```
 */
export function stateDir(): string;

/**
 * Returns the path to the log directory.
 * @example
 * ```js
 * const { logDir } = require('os-user-dirs');
 * console.log(logDir());
 * // Linux:   '/home/user/.local/state'
 * // macOS:   '/Users/user/Library/Logs'
 * // Windows: 'C:\Users\user\AppData\Local'
 * ```
 */
export function logDir(): string;

/**
 * Returns the path to the XDG runtime directory, or null if unavailable.
 * @example
 * ```js
 * const { runtimeDir } = require('os-user-dirs');
 * console.log(runtimeDir());
 * // Linux:   '/run/user/1000' (if $XDG_RUNTIME_DIR is set)
 * // macOS:   null
 * // Windows: null
 * ```
 */
export function runtimeDir(): string | null;

/**
 * Returns the path to the user fonts directory.
 * @example
 * ```js
 * const { fontsDir } = require('os-user-dirs');
 * console.log(fontsDir());
 * // Linux:   '/home/user/.local/share/fonts'
 * // macOS:   '/Users/user/Library/Fonts'
 * // Windows: 'C:\Users\user\AppData\Local\Microsoft\Windows\Fonts'
 * ```
 */
export function fontsDir(): string;

/**
 * Returns the system config directory search path list.
 * On Linux, reads `$XDG_CONFIG_DIRS` (default: `["/etc/xdg"]`).
 * On macOS: `["/Library/Application Support", "/Library/Preferences"]`.
 * On Windows: `[%PROGRAMDATA%]`.
 * @example
 * ```js
 * const { configDirs } = require('os-user-dirs');
 * console.log(configDirs());
 * // Linux:   ['/etc/xdg']
 * // macOS:   ['/Library/Application Support', '/Library/Preferences']
 * // Windows: ['C:\ProgramData']
 * ```
 */
export function configDirs(): string[];

/**
 * Returns the system data directory search path list.
 * On Linux, reads `$XDG_DATA_DIRS` (default: `["/usr/local/share", "/usr/share"]`).
 * On macOS: `["/Library/Application Support"]`.
 * On Windows: `[%PROGRAMDATA%]`.
 * @example
 * ```js
 * const { dataDirs } = require('os-user-dirs');
 * console.log(dataDirs());
 * // Linux:   ['/usr/local/share', '/usr/share']
 * // macOS:   ['/Library/Application Support']
 * // Windows: ['C:\ProgramData']
 * ```
 */
export function dataDirs(): string[];

/**
 * Returns the path to the specified base directory.
 * @example
 * ```js
 * const { getBasePath } = require('os-user-dirs');
 * console.log(getBasePath('config'));  // '/home/user/.config'
 * console.log(getBasePath('data'));    // '/home/user/.local/share'
 * console.log(getBasePath('runtime')); // '/run/user/1000' or null
 * ```
 */
export function getBasePath(name: "config"): string;
export function getBasePath(name: "data"): string;
export function getBasePath(name: "cache"): string;
export function getBasePath(name: "state"): string;
export function getBasePath(name: "log"): string;
export function getBasePath(name: "runtime"): string | null;
export function getBasePath(name: BaseDirName): string | null;

interface ProjectDirsOptions {
    /** Suffix appended to the app name (default: ""). */
    suffix?: string;
    /** Vendor/organization name used as a parent directory (e.g. "My Org"). On Linux, normalized to lowercase with hyphens. */
    vendor?: string;
}

interface ProjectDirsResult {
    config: string;
    data: string;
    cache: string;
    state: string;
    log: string;
    temp: string;
    runtime: string | null;
}

/**
 * Returns application-scoped directories for the given app name.
 * @param name - Application name used to derive directory paths
 * @param options - Optional settings (e.g. suffix)
 * @example
 * ```js
 * const { projectDirs } = require('os-user-dirs');
 * const dirs = projectDirs('my-app');
 * console.log(dirs.config); // Linux: '/home/user/.config/my-app'
 * console.log(dirs.data);   // Linux: '/home/user/.local/share/my-app'
 * console.log(dirs.cache);  // Linux: '/home/user/.cache/my-app'
 * ```
 * @example
 * ```js
 * // With vendor option
 * const dirs = projectDirs('my-app', { vendor: 'My Org' });
 * console.log(dirs.config);
 * // Linux:   '/home/user/.config/my-org/my-app'
 * // macOS:   '/Users/user/Library/Application Support/My Org/my-app'
 * // Windows: 'C:\Users\user\AppData\Local\My Org\my-app\Config'
 * ```
 */
export function projectDirs(name: string, options?: ProjectDirsOptions): ProjectDirsResult;

interface ProjectUserDirsResult {
    desktop: string;
    downloads: string;
    documents: string;
    music: string;
    pictures: string;
    videos: string;
    templates: string;
    publicshare: string;
}

/**
 * Returns project-scoped user directories for the given app name.
 * Each value is the user directory path with the app name appended as a subdirectory.
 * @param name - Application name used to derive directory paths
 * @example
 * ```js
 * const { projectUserDirs } = require('os-user-dirs');
 * const dirs = projectUserDirs('my-app');
 * console.log(dirs.downloads); // '/home/user/Downloads/my-app'
 * console.log(dirs.documents); // '/home/user/Documents/my-app'
 * console.log(dirs.desktop);   // '/home/user/Desktop/my-app'
 * ```
 */
export function projectUserDirs(name: string): ProjectUserDirsResult;

/**
 * Returns the path to the user trash directory, or null on Windows.
 * Linux: `$XDG_DATA_HOME/Trash` (default `~/.local/share/Trash`)
 * macOS: `~/.Trash`
 * Windows: `null` (Recycle Bin requires Shell API)
 * @example
 * ```js
 * const { trashDir } = require('os-user-dirs');
 * console.log(trashDir());
 * // Linux:   '/home/user/.local/share/Trash'
 * // macOS:   '/Users/user/.Trash'
 * // Windows: null
 * ```
 */
export function trashDir(): string | null;

/**
 * Returns the path to the user applications directory.
 * Linux: `$XDG_DATA_HOME/applications` (default `~/.local/share/applications`)
 * macOS: `~/Applications`
 * Windows: `%APPDATA%/Microsoft/Windows/Start Menu/Programs`
 * @example
 * ```js
 * const { applicationsDir } = require('os-user-dirs');
 * console.log(applicationsDir());
 * // Linux:   '/home/user/.local/share/applications'
 * // macOS:   '/Users/user/Applications'
 * // Windows: 'C:\Users\user\AppData\Roaming\Microsoft\Windows\Start Menu\Programs'
 * ```
 */
export function applicationsDir(): string;

/**
 * Reads an XDG user-dirs.dirs config and returns the directory for the given key.
 * @param key - XDG key (e.g. "XDG_DOWNLOAD_DIR")
 * @param configPath - Optional path to user-dirs.dirs config file
 * @returns The resolved directory path, or null if not found
 * @example
 * ```js
 * const { getXDGUserDir } = require('os-user-dirs');
 * console.log(getXDGUserDir('XDG_DOWNLOAD_DIR')); // '/home/user/Downloads'
 * console.log(getXDGUserDir('XDG_DESKTOP_DIR'));   // '/home/user/Desktop'
 * ```
 */
export function getXDGUserDir(key: string, configPath?: string): string | null;

/**
 * Ensures the specified directory exists, creating it recursively if necessary.
 * @param dirPath - The directory path to ensure exists
 * @returns The directory path
 * @example
 * ```js
 * const { ensureDirSync } = require('os-user-dirs');
 * const dir = ensureDirSync('/tmp/my-app/data');
 * console.log(dir); // '/tmp/my-app/data'
 * ```
 */
export function ensureDirSync(dirPath: string): string;

/**
 * Ensures the specified directory exists, creating it recursively if necessary (async version).
 * @param dirPath - The directory path to ensure exists
 * @returns A promise that resolves with the directory path
 * @example
 * ```js
 * const { ensureDir } = require('os-user-dirs');
 * const dir = await ensureDir('/tmp/my-app/data');
 * console.log(dir); // '/tmp/my-app/data'
 * ```
 */
export function ensureDir(dirPath: string): Promise<string>;

declare const osUserDirs: typeof downloads & {
    downloads: typeof downloads;
    desktop: typeof desktop;
    documents: typeof documents;
    music: typeof music;
    pictures: typeof pictures;
    videos: typeof videos;
    templates: typeof templates;
    publicshare: typeof publicshare;
    getPath: typeof getPath;
    binDir: typeof binDir;
    configDir: typeof configDir;
    dataDir: typeof dataDir;
    cacheDir: typeof cacheDir;
    stateDir: typeof stateDir;
    logDir: typeof logDir;
    runtimeDir: typeof runtimeDir;
    fontsDir: typeof fontsDir;
    getBasePath: typeof getBasePath;
    configDirs: typeof configDirs;
    dataDirs: typeof dataDirs;
    projectDirs: typeof projectDirs;
    trashDir: typeof trashDir;
    applicationsDir: typeof applicationsDir;
    projectUserDirs: typeof projectUserDirs;
    homeDir: typeof homeDir;
    getXDGUserDir: typeof getXDGUserDir;
    ensureDirSync: typeof ensureDirSync;
    ensureDir: typeof ensureDir;
};

export default osUserDirs;
