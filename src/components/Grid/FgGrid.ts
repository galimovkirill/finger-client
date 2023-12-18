export interface GridGutter {
    horizontal: number;
    vertical: number;
}

/**
 * Horizontal alignment
 */
export type GridRowJustify =
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

/**
 * Vertical alignment
 */
export type GridRowAlignment = 'start' | 'center' | 'end';
