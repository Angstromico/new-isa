/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_STRAPI_ENV: string
  readonly PUBLIC_STRAPI_IMAGES: string
  readonly PUBLIC_BASE_URL: string
  // more env variables...
}
