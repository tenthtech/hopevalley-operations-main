/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY?: string;
  readonly CONTACT_FROM_EMAIL?: string;
  readonly CONTACT_TO_EMAIL?: string;
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
