export interface IHistory {
  date: string | Date;
  query: string;
}
export interface IUser {
  id: string;
  history: IHistory[];
  name?: string;
}
