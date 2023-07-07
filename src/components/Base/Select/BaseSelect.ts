export interface BaseSelectProps<T> {
    modelValue: T;
    options: T[];
    placeholder?: string;
    placeholderAsLabel?: boolean;
}
