export interface ITodo {
  id: number
  text: string
  checked: boolean
}

export interface OnInsert {
  (text: string): void
}
export interface OnRemove {
  (id: number): void
}
export interface OnToggle {
  (id: number): void
}
