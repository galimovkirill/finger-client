export const FgInputTypes = ['text', 'number', 'email', 'password'] as const;

export interface FgInputProps {
    modelValue: string | number;
    placeholder?: string;
    type?: (typeof FgInputTypes)[number];
    iconPosition?: 'start' | 'end';
    visiblePassword?: boolean;
    // TODO: remove prop and define dynamically based on icon click emit
    clickableIcon?: boolean;
    invalid?: boolean;
    name?: string;
}
