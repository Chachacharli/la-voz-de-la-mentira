export interface NewItem {
  id: string
  title: string
  autor: string
  date: string
  description: string
  imagen?: string
}

export interface INewsRepository {
  getAll(): Promise<NewItem[]>
  getById(id: string): Promise<NewItem | null>
}
