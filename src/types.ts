export interface IDefaultState {
  item: string;
  items: string[];
}

export interface InputProps {
  item: string;
  addTodo: () => any;
  updateItem: () => any;
}

export interface IListProps {
  items: string[];
}
