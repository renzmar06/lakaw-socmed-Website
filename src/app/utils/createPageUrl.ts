"use client";
type QueryParams = Record<
  string,
  string | number | boolean | null | undefined
>

export function createPageUrl(
  path: string,
  params?: QueryParams
): string {
  if (!params || Object.keys(params).length === 0) {
    return path
  }

  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&")

  return query ? `${path}?${query}` : path
}