export const BaseInputTypes = ['text', 'number', 'email', 'password'] as const;

export interface BaseInputProps {
    modelValue: string | number;
    placeholder?: string;
    type?: (typeof BaseInputTypes)[number];
    iconPosition?: 'start' | 'end';
    visiblePassword?: boolean;
    // TODO: remove prop and define dynamically based on icon click emit
    clickableIcon?: boolean;
}
