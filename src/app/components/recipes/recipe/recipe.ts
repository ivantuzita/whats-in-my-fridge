export interface Recipe {
  id: number,
  name: string,
  ingredients:
    {
      content: string
      quantity?: number
    }
}