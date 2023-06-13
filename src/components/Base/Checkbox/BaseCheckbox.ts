export const BaseCheckboxColors = ['primary', 'success', 'danger'] as const;
type BaseCheckboxColor = (typeof BaseCheckboxColors)[number];

export interface BaseCheckboxProps<T = unknown> {
    id: string;
    modelValue: boolean | T[];
    value?: T;
    color?: BaseCheckboxColor;
}
