export interface Category {
  name: string
}

export interface Product {
  id?: string
  name: string
  description?: string
  price: number
  // ingredients?: Ingredient[]
  // categories?: Category[]
  enabled?: boolean
  isEspecial?: boolean
}

export interface Ingredient {
  name: string
  es: string
  en: string
  priority: number
}
