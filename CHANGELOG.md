# Changelog

## [2.1.0] - 2026-02-28

### Added
- ESM support via `index.mjs` — `import { downloads } from "os-user-dirs"` now works
- TypeScript type definitions (`index.d.ts`) with `DirName` union type for `getPath()` auto-completion
- `exports` field in `package.json` for dual CJS/ESM resolution
- ESM smoke test (`test-esm.mjs`) and CI step

### Deprecated
- `getXDGDownloadDir()` — use `getXDGUserDir("XDG_DOWNLOAD_DIR")` instead

## [2.0.0] - 2025-05-15

### Added
- Multiple user directory functions: `desktop()`, `documents()`, `music()`, `pictures()`, `videos()`
- `getPath(name)` for dynamic directory lookup
- `getXDGUserDir(key, configPath)` for generic XDG directory resolution

### Changed
- Package renamed from `os-downloads` to `os-user-dirs`

### Deprecated
- `getXDGDownloadDir()` — kept for backward compatibility

## [1.x] - os-downloads

Previous versions were published as [`os-downloads`](https://www.npmjs.com/package/os-downloads).
