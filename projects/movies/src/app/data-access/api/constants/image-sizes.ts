// @Notice: This information could get fetched from the TMDB API
import { ImageDimensions } from './image-dimensions.interface';

export const SIZES = {
  "92w": `92w`,
  "154w": `154w`,
  "185w": `185w`,
  "342w":  `342w`,
  "500w":  `500w`,
  "780w": `780w`
};

export const W92H138: ImageDimensions = {
  SIZE: '92w',
  WIDTH: 92,
  HEIGHT: 138,
} as const;

export const W154H205: ImageDimensions = {
  SIZE: '154w',
  WIDTH: 154,
  HEIGHT: 205,
} as const;
export const W185H278: ImageDimensions = {
  SIZE: '185w',
  WIDTH: 185,
  HEIGHT: 278,
} as const;
export const W300H450: ImageDimensions = {
  SIZE: '300w',
  WIDTH: 300,
  HEIGHT: 450,
} as const;

export const W500H282: ImageDimensions = {
  SIZE: '500w',
  WIDTH: 500,
  HEIGHT: 282,
} as const;

export const W780H1170: ImageDimensions = {
  SIZE: '780w',
  WIDTH: 780,
  HEIGHT: 1170,
} as const;


