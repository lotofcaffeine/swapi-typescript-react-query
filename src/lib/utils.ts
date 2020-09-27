export const urlToIdAndType = (url: string): [id: string, type: string] => {
  const [, , , , type, id] = url.split('/')
  return [id, type]
}

export const textToSlug = (text: string): string => {
  return text.replace(/[^-a-zA-Z0-9\s+]+/ig, '').replace(/\s+/gi, "-").toLowerCase();
}

export const sanitizeUrl = (url: string): string => {
  return url.replace('http://','https://')
}
