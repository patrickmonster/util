export const getParameter = (key: string) => {
  return new URLSearchParams(window.location.search).get(key);
};

export const open = (url: string, title: string, style: string) =>
  window?.open(url, title, style);
