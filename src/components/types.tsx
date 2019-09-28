export interface ITodo {
  id: number
  text: string
  checked: boolean
}

export interface OnRemove {
  (id: number): void
}
