export function getRandom (max = 11, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min
}
