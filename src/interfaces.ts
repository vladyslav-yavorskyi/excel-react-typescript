export interface ICell {
  id: string | number;
  width: number;
  content: string;
  data_col: number;
  data_row: number;
  type?: string;
}
