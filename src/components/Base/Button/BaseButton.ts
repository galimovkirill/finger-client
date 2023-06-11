import type { ButtonHTMLAttributes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export const BaseButtonTypes = ['default', 'flat', 'border'] as const;
type BaseButtonType = (typeof BaseButtonTypes)[number];

export const BaseButtonColors = ['primary', 'success', 'danger'] as const;
type BaseButtonColor = (typeof BaseButtonColors)[number];

export const BaseButtonSizes = ['large', 'medium', 'small'] as const;
type BaseButtonSize = (typeof BaseButtonSizes)[number];

export interface BaseButtonProps {
    type?: BaseButtonType;
    color?: BaseButtonColor;
    size?: BaseButtonSize;
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
