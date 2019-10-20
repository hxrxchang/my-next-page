export function isHeaderShown(path: string): boolean {
  return !(path === '/_error' || path === '/blog/[id]');
}

export function isMenuShown(path: string): boolean {
  return path !== '/blog/[id]';
}

export function isFooterShown(path: string): boolean {
  return path !== '/_error';
}
