export const FgCheckboxColors = ['primary', 'success', 'danger'] as const;
type FgCheckboxColor = (typeof FgCheckboxColors)[number];

export interface FgCheckboxProps<T = unknown> {
    id: string | number;
    modelValue: boolean | T[];
    value?: T;
    color?: FgCheckboxColor;
    labelBefore?: boolean;
}
