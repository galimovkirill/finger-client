import type { ButtonHTMLAttributes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export const FgButtonTypes = ['default', 'flat', 'border'] as const;
export const FgButtonColors = ['primary', 'success', 'danger'] as const;
export const FgButtonSizes = ['large', 'medium', 'small'] as const;

export interface FgButtonProps {
    type?: (typeof FgButtonTypes)[number];
    color?: (typeof FgButtonColors)[number];
    size?: (typeof FgButtonSizes)[number];
    nativeType?: ButtonHTMLAttributes['type'];
    disabled?: boolean;
    /**
     * @description URL. Automatically define is component button or link
     */
    to?: RouteLocationRaw;
    /**
     * @description Add `active` modifier with specific styles
     */
    active?: boolean;
    /**
     * @description Content to uppercase
     */
    uppercase?: boolean;
    /**
     * @description Set width to 100%
     */
    expanded?: boolean;
    /**
     * @description Show loader instead of content
     */
    loading?: boolean;
}
