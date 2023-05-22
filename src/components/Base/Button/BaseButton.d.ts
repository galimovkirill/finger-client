import type { ButtonHTMLAttributes } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

type BaseButtonType = 'default' | 'flat' | 'border';

type BaseButtonColor = 'primary' | 'success' | 'danger';

type BaseButtonSize = 'large' | 'medium' | 'small';

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
