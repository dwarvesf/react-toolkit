export default function isSSR() {
  return typeof window === 'undefined';
}
