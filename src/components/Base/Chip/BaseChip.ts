export const BaseChipTypes = ['border', 'text'] as const;
export const BaseChipColors = ['primary', 'success', 'danger'] as const;
export const BaseChipSizes = ['x-small', 'small', 'medium', 'large', 'x-large'] as const;
export const BaseChipCloseIcon = ['close', 'trash'] as const;

export interface BaseChipProps {
    type?: (typeof BaseChipTypes)[number];
    closable?: boolean;
    closeIcon?: (typeof BaseChipCloseIcon)[number];
    color?: (typeof BaseChipColors)[number];
    size?: (typeof BaseChipSizes)[number];
}
