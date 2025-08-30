declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

interface ImportMetaEnv {
    readonly VITE_URL_API_PROD: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}