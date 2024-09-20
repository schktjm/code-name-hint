/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EXAMPLE: string;
  readonly DOC_BASE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
