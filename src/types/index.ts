import { v4 as uuidv4 } from "uuid";

export const SQUARE_SIDE = 100;
export const CIRCLE_RADIUS = 75;
export const DEFAULT_COLOR = "#ff0f58";
export const MAX_SIDE = 150;
export const MIN_SIDE = 10;

export const getRandomSize = () => Math.random() * (MAX_SIDE - MIN_SIDE) + MIN_SIDE;
export const getRandomColor = () => `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`;
export const getRandomPosition = () => ({
  x: Math.random() * window.innerWidth * 0.8,
  y: Math.random() * window.innerHeight * 0.8,
});

export type ShapeId = string;
export class Point {
  constructor(public x: number = 0, public y: number = 0) {}
}

export class Square {
  public readonly kind = "square";
  public readonly id: ShapeId = uuidv4();

  constructor(
    public color: string = DEFAULT_COLOR,
    public center: Point = new Point(),
    public side: number = SQUARE_SIDE
  ) {}
}

export class Circle {
  public readonly kind = "circle";
  public readonly id: ShapeId = uuidv4();

  constructor(
    public color: string = DEFAULT_COLOR,
    public center: Point = new Point(),
    public radius: number = CIRCLE_RADIUS
  ) {}
}

export type Shape = Circle | Square;
