import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

export interface ICell {
  id: string | number;
  width: number;
  content: string;
  data_col: number;
  data_row: number;
  type?: string;
}

export interface IStaticCell {
  type: string;
  width: number;
  height: number;
  content: string;
  data_col?: number;
  data_row?: number;
}

export interface CellPros {
  title: string;
  dataState: {
    [key: string]: string;
  };
  stylesState: {
    [key: string]: object;
  };
  currentStyle: {
    [key: string]: string;
  };
  colState: {
    [key: string]: Number;
  };
  rowState: {
    [key: string]: Number;
  };
  currentText: string;
  currentCell: string;
}

export interface Middleware {
  store: MiddlewareAPI;
  next: Dispatch;
  action: Action;
  [otherProperty: string]: {};
}
