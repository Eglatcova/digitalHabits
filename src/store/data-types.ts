export interface IReducer {
  type: string;
  payload: any;
}

export interface IChildren {
  id: number;
  title: string;
  children: IChildren[];
}

export interface IState {
  common: {
    content: IChildren;
  };
}
