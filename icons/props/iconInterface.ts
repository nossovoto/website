export interface IIconProps {
    color?: Colors
    width?: number
    height?: number
}

export interface IIconAsHTMLProps extends IIconProps {
    iconClass?: string
}

export enum Colors {
    White = 'white',
    Black = 'black'
}