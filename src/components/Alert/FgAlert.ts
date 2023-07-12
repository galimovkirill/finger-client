export const FgAlertColors = ['primary', 'success', 'danger'] as const;
type FgAlertColor = (typeof FgAlertColors)[number];

export interface FgAlertProps {
    color?: FgAlertColor;
    closeButton?: boolean;
}
