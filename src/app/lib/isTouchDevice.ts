export default function isTouchDevice() {
  return "ontouchstart" in globalThis;
}
