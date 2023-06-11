export const BaseAlertColors = ['primary', 'success', 'danger'] as const;
type BaseAlertColor = (typeof BaseAlertColors)[number];

export interface BaseAlertProps {
    color?: BaseAlertColor;
    closeButton?: boolean;
}
