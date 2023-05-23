export interface BaseInputProps {
    placeholder?: string;
    type?: 'text' | 'number' | 'email' | 'password';
    iconPosition?: 'start' | 'end';
    visiblePassword?: boolean;
    // TODO: remove prop and define dynamically based on icon click emit
    clickableIcon?: boolean;
}
