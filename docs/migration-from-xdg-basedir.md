# Migration from xdg-basedir

[xdg-basedir](https://github.com/sindresorhus/xdg-basedir) is a popular package for getting XDG Base Directory paths on Linux. **os-user-dirs** provides the same functionality with full cross-platform support, CJS/ESM dual support, and many additional features — all with zero dependencies.

## Why migrate?

- **xdg-basedir v5 is ESM-only** — os-user-dirs supports both CJS and ESM
- **xdg-basedir is Linux-only** — os-user-dirs works on Linux, macOS, and Windows
- **xdg-basedir has not been updated in 4+ years** — os-user-dirs is actively maintained
- **More features** — user directories, project-scoped directories, system search directories, vendor support, `ensureDir()` utility, and more

## API mapping

| xdg-basedir export | os-user-dirs equivalent | Notes |
|---|---|---|
| `xdgConfig` | `configDir()` | Same on Linux. Also works on macOS (`~/Library/Application Support`) and Windows (`%APPDATA%`) |
| `xdgData` | `dataDir()` | Same on Linux. Also works on macOS and Windows |
| `xdgCache` | `cacheDir()` | Same on Linux. Also works on macOS (`~/Library/Caches`) and Windows |
| `xdgState` | `stateDir()` | Same on Linux. Also works on macOS and Windows |
| `xdgRuntime` | `runtimeDir()` | Same on Linux. Returns `null` on other platforms |
| `xdgConfigDirectories` | `configDirs()` | Same on Linux. Also works on macOS and Windows |
| `xdgDataDirectories` | `dataDirs()` | Same on Linux. Also works on macOS and Windows |
| *(not available)* | `logDir()` | Additional: log directory |
| *(not available)* | `projectDirs(name)` | Additional: app-scoped directories |
| *(not available)* | `downloads()`, `desktop()`, etc. | Additional: user directories |

## Key differences

| | xdg-basedir | os-user-dirs |
|---|---|---|
| Module format | ESM-only (v5) / CJS (v4) | CJS + ESM dual support |
| Platform support | Linux only | Linux, macOS, Windows |
| Return type | `string \| undefined` | `string \| null` |
| Search paths return | `string[]` | `string[]` |
| Dependencies | 0 | 0 |
| TypeScript types | Built-in | Built-in |

> **Note:** xdg-basedir returns `undefined` when a directory is unavailable (e.g., `xdgRuntime`), while os-user-dirs returns `null`. If your code checks for `undefined`, update it to check for `null` (or use a falsy check).

## Code examples

### Migrating from xdg-basedir v5 (ESM)

**Before:**

```js
import {
  xdgConfig,
  xdgData,
  xdgCache,
  xdgState,
  xdgRuntime,
  xdgConfigDirectories,
  xdgDataDirectories
} from 'xdg-basedir';

xdgConfig;              //=> '/home/user/.config'
xdgData;                //=> '/home/user/.local/share'
xdgCache;               //=> '/home/user/.cache'
xdgState;               //=> '/home/user/.local/state'
xdgRuntime;             //=> '/run/user/1000' (or undefined)
xdgConfigDirectories;   //=> ['/etc/xdg']
xdgDataDirectories;     //=> ['/usr/local/share', '/usr/share']
```

**After:**

```js
import {
  configDir,
  dataDir,
  cacheDir,
  stateDir,
  runtimeDir,
  configDirs,
  dataDirs
} from 'os-user-dirs';

configDir();    //=> '/home/user/.config'
dataDir();      //=> '/home/user/.local/share'
cacheDir();     //=> '/home/user/.cache'
stateDir();     //=> '/home/user/.local/state'
runtimeDir();   //=> '/run/user/1000' (or null)
configDirs();   //=> ['/etc/xdg']
dataDirs();     //=> ['/usr/local/share', '/usr/share']
```

### Migrating from xdg-basedir v4 (CJS)

**Before:**

```js
const {
  xdgConfig,
  xdgData,
  xdgCache,
  xdgState,
  xdgRuntime,
  xdgConfigDirectories,
  xdgDataDirectories
} = require('xdg-basedir');

xdgConfig;   //=> '/home/user/.config'
xdgData;     //=> '/home/user/.local/share'
```

**After:**

```js
const {
  configDir,
  dataDir,
  cacheDir,
  stateDir,
  runtimeDir,
  configDirs,
  dataDirs
} = require('os-user-dirs');

configDir();   //=> '/home/user/.config'
dataDir();     //=> '/home/user/.local/share'
```

> **Note:** xdg-basedir exports are **properties** (evaluated once at import time), while os-user-dirs exports are **functions** (evaluated on each call). This means os-user-dirs will reflect environment variable changes made after import.

### Handling `undefined` vs `null`

If your existing code checks for `undefined`, update it:

**Before:**

```js
import { xdgRuntime } from 'xdg-basedir';

if (xdgRuntime !== undefined) {
  // use runtime dir
}
```

**After:**

```js
import { runtimeDir } from 'os-user-dirs';

if (runtimeDir() !== null) {
  // use runtime dir
}

// Or simply use a falsy check (works with both undefined and null):
if (runtimeDir()) {
  // use runtime dir
}
```

## Cross-platform bonus

After migrating, your code automatically works on macOS and Windows — no changes needed:

```js
import { configDir, dataDir, cacheDir } from 'os-user-dirs';

configDir();
//=> '/home/user/.config'                        (Linux)
//=> '/Users/user/Library/Application Support'    (macOS)
//=> 'C:\Users\user\AppData\Roaming'             (Windows)

dataDir();
//=> '/home/user/.local/share'                    (Linux)
//=> '/Users/user/Library/Application Support'    (macOS)
//=> 'C:\Users\user\AppData\Local'                (Windows)

cacheDir();
//=> '/home/user/.cache'                          (Linux)
//=> '/Users/user/Library/Caches'                 (macOS)
//=> 'C:\Users\user\AppData\Local'                (Windows)
```

## Additional features

os-user-dirs provides features not available in xdg-basedir:

### Project-scoped directories

Scope directories to your application (similar to `env-paths`):

```js
import { projectDirs } from 'os-user-dirs';

const dirs = projectDirs('my-app');
dirs.config;   //=> '/home/user/.config/my-app'
dirs.data;     //=> '/home/user/.local/share/my-app'
dirs.cache;    //=> '/home/user/.cache/my-app'
dirs.state;    //=> '/home/user/.local/state/my-app'
dirs.log;      //=> '/home/user/.local/state/my-app'
dirs.temp;     //=> '/tmp/my-app'
dirs.runtime;  //=> '/run/user/1000/my-app' (or null)
```

### User directories

Get platform-specific user directories:

```js
import { downloads, desktop, documents, homeDir } from 'os-user-dirs';

homeDir();     //=> '/home/user'
downloads();   //=> '/home/user/Downloads'
desktop();     //=> '/home/user/Desktop'
documents();   //=> '/home/user/Documents'
```

### Directory creation utility

```js
import { configDir, ensureDirSync, ensureDir } from 'os-user-dirs';

// Sync
ensureDirSync(configDir());

// Async
await ensureDir(configDir());
```

## Quick reference

| Task | xdg-basedir (v5) | os-user-dirs |
|---|---|---|
| Install | `npm install xdg-basedir` | `npm install os-user-dirs` |
| Import (ESM) | `import { xdgConfig } from 'xdg-basedir'` | `import { configDir } from 'os-user-dirs'` |
| Import (CJS) | *(not supported in v5)* | `const { configDir } = require('os-user-dirs')` |
| Config dir | `xdgConfig` | `configDir()` |
| Data dir | `xdgData` | `dataDir()` |
| Cache dir | `xdgCache` | `cacheDir()` |
| State dir | `xdgState` | `stateDir()` |
| Runtime dir | `xdgRuntime` | `runtimeDir()` |
| Config search paths | `xdgConfigDirectories` | `configDirs()` |
| Data search paths | `xdgDataDirectories` | `dataDirs()` |
