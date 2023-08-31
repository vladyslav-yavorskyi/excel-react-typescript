export interface ICell {
  id: string | number;
  width: number;
  content: string;
  data_col: number;
  data_row: number;
  type?: string;
}

export interface CellPros {
  dataState: {
    [key: string]: string;
  };
  stylesState: {
    [key: string]: object;
  };
  currentStyle: {
    [key: string]: string;
  };
  currentText: string;
  currentCell: string;
}
