const domparser = new DOMParser();

export const htmlParser = (html: string) =>
  domparser.parseFromString(html, "application/xhtml+xml");
