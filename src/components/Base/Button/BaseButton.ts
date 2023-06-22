import type { ButtonHTMLAttributes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export const BaseButtonTypes = ['default', 'flat', 'border'] as const;
export const BaseButtonColors = ['primary', 'success', 'danger'] as const;
export const BaseButtonSizes = ['large', 'medium', 'small'] as const;

export interface BaseButtonProps {
    type?: (typeof BaseButtonTypes)[number];
    color?: (typeof BaseButtonColors)[number];
    size?: (typeof BaseButtonSizes)[number];
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
