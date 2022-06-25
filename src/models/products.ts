import { Reviews } from "./Reviews";


export interface Pictures {
  thumbnail: string;
  photo: string;
}
export interface Products {
  id: number;
  name: string;
  photo: string;
  reviews: Reviews[];
  pictures: Pictures[];
}

export enum LOADIND_STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed'
}