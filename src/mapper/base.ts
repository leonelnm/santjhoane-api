export interface Mapper<T, U> {
  map: (t: T) => U
  mapList: (t: T[]) => U[]
}
