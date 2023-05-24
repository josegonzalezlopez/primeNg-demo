export enum Color {
    red, black, green, blue
}

export interface Product{
    name: string;
    color: Color;
    available: boolean;
}