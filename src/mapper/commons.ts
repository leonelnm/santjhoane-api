interface Mapper<T, U> {
  to: (t: T) => U
  from: (u: U) => T
}
