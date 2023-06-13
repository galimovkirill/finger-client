export const BaseCheckboxColors = ['primary', 'success', 'danger'] as const;
type BaseCheckboxColor = (typeof BaseCheckboxColors)[number];

export interface BaseCheckboxProps {
    id: string;
    modelValue: boolean;
    color?: BaseCheckboxColor;
}
