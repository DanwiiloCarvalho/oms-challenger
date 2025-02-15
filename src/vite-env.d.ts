/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_X_JSIO_TOKEN: string
    readonly VITE_BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}