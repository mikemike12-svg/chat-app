export const i18n = {
  defaultLocale: 'ja',  // ← ここを 'ja' に変更
  locales: ['ja', 'en', 'es', 'zh-Hans'],  // ← localesの先頭も日本語にしてOK
} as const

export type Locale = typeof i18n['locales'][number]
