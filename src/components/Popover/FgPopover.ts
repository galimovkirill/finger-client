export const FgPopoverAlignments = [
    'topLeft',
    'top',
    'topRight',
    'rightTop',
    'right',
    'rightBottom',
    'leftTop',
    'left',
    'leftBottom',
    'bottomLeft',
    'bottom',
    'bottomRight'
] as const;

export interface FgPopoverProps {
    modelValue?: boolean;
    zIndexContent?: number;
    alignment: (typeof FgPopoverAlignments)[number];
    trigger?: 'hover' | 'click';
    contentPadding?: number;
    contentOverflow?: 'inherit' | 'auto' | 'hidden' | 'scroll' | 'visible';
    gap?: number;
    maxWidth?: number | string | 'none';
    contentBorderRadius?: number;
    isClickOutsideDisabled?: boolean;
    mode?: 'absolute' | 'fixed';
    isDisabled?: boolean;
}
