export const FgChipTypes = ['border', 'text'] as const;
export const FgChipColors = ['primary', 'success', 'danger'] as const;
export const FgChipSizes = ['x-small', 'small', 'medium', 'large', 'x-large'] as const;
export const FgChipCloseIcon = ['close', 'trash'] as const;

export interface FgChipProps {
    type?: (typeof FgChipTypes)[number];
    closable?: boolean;
    closeIcon?: (typeof FgChipCloseIcon)[number];
    color?: (typeof FgChipColors)[number];
    size?: (typeof FgChipSizes)[number];
}
