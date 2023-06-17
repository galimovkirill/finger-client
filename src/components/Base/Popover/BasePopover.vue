<template>
    <div
        ref="popover"
        class="fg-popover"
        :class="`fg-popover--${alignment}`"
        :style="{
            '--fg-popover-gap': `${gap}px`,
            '--fg-popover-padding': `${contentPadding}px`,
            '--fg-popover-overflow': contentOverflow,
            '--fg-popover-border-radius': `${contentBorderRadius}px`
        }"
        @mouseleave="handleMouseHover('leave')"
    >
        <div class="fg-popover__wrapper">
            <div
                ref="popoverRelative"
                class="fg-popover__relative"
                @click="handleClick"
                @mouseenter="handleMouseHover('enter')"
            >
                <slot name="relative" :shown="isPopoverShown" />
            </div>

            <div
                v-if="isPopoverShown"
                ref="popoverContent"
                class="fg-popover__content"
                :style="{
                    zIndex: zIndexContent,
                    maxWidth: maxWidthContent,
                    ...popoverContentStyles()
                }"
            >
                <slot name="content" :close="() => changePopoverStatus(false)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, type HTMLAttributes } from 'vue';
import { onClickOutside, useMounted } from '@vueuse/core';
import type { BasePopoverProps } from '@/components/Base/Popover/BasePopover';

const props = withDefaults(defineProps<BasePopoverProps>(), {
    zIndexContent: 10,
    trigger: 'click',
    contentPadding: 40,
    gap: 12,
    contentOverflow: 'inherit',
    maxWidth: 'none',
    contentBorderRadius: 20,
    mode: 'absolute' // Use 'fixed' on nested popover
});

interface Emits {
    (event: 'update:modelValue', status: boolean): void;
    (event: 'close'): void;
}

const emit = defineEmits<Emits>();

const isMounted = useMounted();

const isPopoverShown = ref(props.modelValue);

const popover = ref<HTMLElement>();
const popoverRelative = ref<HTMLElement>();
const popoverContent = ref<HTMLElement>();

const getElementSize = (el: HTMLElement | undefined) => {
    if (!el) {
        return {
            width: 0,
            height: 0
        };
    }

    return { width: el.clientWidth, height: el.clientHeight };
};

const popoverSize = computed(() => getElementSize(popover.value));
const popoverRelativeSize = computed(() => getElementSize(popoverRelative.value));
const popoverContentSize = computed(() => getElementSize(popoverContent.value));

const isBottom = computed(() => ['bottom', 'bottomLeft', 'bottomRight'].includes(props.alignment));
const isLeft = computed(() => ['left', 'leftBottom', 'leftTop'].includes(props.alignment));
const isRight = computed(() => ['right', 'rightBottom', 'rightTop'].includes(props.alignment));
const isTop = computed(() => ['top', 'topLeft', 'topRight'].includes(props.alignment));

const getAbsoluteContentStyles = () => {
    const styles: HTMLAttributes['style'] = {};

    styles.position = 'absolute';

    if (isBottom.value) {
        styles.top = `${popoverRelativeSize.value.height + props.gap}px`;
    } else if (isTop.value) {
        styles.bottom = `${popoverRelativeSize.value.height + props.gap}px`;
    } else if (isLeft.value) {
        styles.left = `${(popoverContentSize.value.width + props.gap) * -1}px`;
    } else if (isRight.value) {
        styles.right = `${(popoverContentSize.value.width + props.gap) * -1}px`;
    }

    switch (props.alignment) {
        case 'top':
        case 'bottom':
            styles.left = `${
                Math.abs(popoverContentSize.value.width - popoverRelativeSize.value.width) / -2
            }px`;
            break;

        case 'right':
        case 'left':
            styles.top = `${
                Math.abs(popoverContentSize.value.height - popoverRelativeSize.value.height) / -2
            }px`;
            break;

        case 'rightTop':
        case 'leftTop':
            styles.top = 0;
            break;

        case 'rightBottom':
        case 'leftBottom':
            styles.bottom = 0;
            break;

        case 'topLeft':
        case 'bottomLeft':
            styles.left = 0;
            break;

        case 'topRight':
        case 'bottomRight':
            styles.right = 0;
            break;

        default:
            styles.top = 'auto';
            styles.bottom = 'auto';
            styles.right = 'auto';
            styles.left = 'auto';
    }

    return styles;
};

const getFixedContentStyles = () => {
    const styles: HTMLAttributes['style'] = {};

    const popoverRect = popover.value?.getBoundingClientRect();

    if (!popoverRect) {
        return styles;
    }

    styles.position = 'fixed';

    const { left: popoverLeft, top: popoverTop } = popoverRect;

    switch (props.alignment) {
        // TOP
        case 'topRight':
            styles.left = `${popoverLeft + popoverSize.value.width}px`;
            styles.top = `${popoverTop - props.gap}px`;
            styles.transform = 'translate(-100%, -100%)';
            break;
        case 'topLeft':
            styles.left = `${popoverLeft}px`;
            styles.top = `${popoverTop - props.gap}px`;
            styles.transform = 'translateY(-100%)';
            break;
        case 'top':
            styles.left = `${popoverLeft + popoverSize.value.width / 2}px`;
            styles.top = `${popoverTop - props.gap}px`;
            styles.transform = 'translate(-50%, -100%)';
            break;

        // RIGHT
        case 'rightTop':
            styles.left = `${popoverLeft + popoverSize.value.width + props.gap}px`;
            styles.top = `${popoverTop}px`;
            styles.transform = 'none';
            break;
        case 'rightBottom':
            styles.left = `${popoverLeft + popoverSize.value.width + props.gap}px`;
            styles.top = `${popoverTop + popoverSize.value.height}px`;
            styles.transform = 'translateY(-100%)';
            break;
        case 'right':
            styles.left = `${popoverLeft + popoverSize.value.width + props.gap}px`;
            styles.top = `${popoverTop + popoverRelativeSize.value.height / 2}px`;
            styles.transform = 'translateY(-50%)';
            break;

        // LEFT
        case 'leftBottom':
            styles.left = `${popoverLeft - props.gap}px`;
            styles.top = `${popoverTop + popoverSize.value.height}px`;
            styles.transform = 'translate(-100%, -100%)';
            break;
        case 'leftTop':
            styles.left = `${popoverLeft - props.gap}px`;
            styles.top = `${popoverTop}px`;
            styles.transform = 'translateX(-100%)';
            break;
        case 'left':
            styles.left = `${popoverLeft - props.gap}px`;
            styles.top = `${popoverTop + popoverRelativeSize.value.height / 2}px`;
            styles.transform = 'translate(-100%, -50%)';
            break;

        // BOTTOM
        case 'bottomRight':
            styles.left = `${popoverLeft + popoverSize.value.width}px`;
            styles.top = `${popoverTop + popoverSize.value.height + props.gap}px`;
            styles.transform = 'translateX(-100%)';
            break;
        case 'bottomLeft':
            styles.left = `${popoverLeft}px`;
            styles.top = `${popoverTop + popoverSize.value.height + props.gap}px`;
            styles.transform = 'none';
            break;
        case 'bottom':
        default:
            styles.left = `${popoverLeft + popoverSize.value.width / 2}px`;
            styles.top = `${popoverTop + popoverSize.value.height + props.gap}px`;
            styles.transform = 'translateX(-50%)';
    }

    return styles;
};

const popoverContentStyles = () => {
    if (!isMounted.value) {
        return {};
    }

    if (props.mode === 'absolute') {
        return getAbsoluteContentStyles();
    }

    if (props.mode === 'fixed') {
        return getFixedContentStyles();
    }

    return {};
};

const maxWidthContent = computed(() => {
    if (props.maxWidth === 'none') {
        return 'none';
    }

    if (typeof props.maxWidth === 'string' && props.maxWidth.includes('%')) {
        return props.maxWidth;
    }

    const width = parseInt(props.maxWidth.toString(), 10);

    return width ? `${width}px` : 'none';
});

const changePopoverStatus = (status: boolean) => {
    emit('update:modelValue', status);
    isPopoverShown.value = status;

    if (!status) {
        emit('close');
    }
};

const handleMouseHover = (type: 'enter' | 'leave') => {
    if (props.isDisabled) {
        return;
    }

    if (props.trigger !== 'hover') {
        return;
    }

    if (type === 'enter') {
        changePopoverStatus(true);
        return;
    }

    changePopoverStatus(false);
};

const handleClick = () => {
    if (props.isDisabled) {
        return;
    }

    if (props.trigger !== 'click') {
        return;
    }

    changePopoverStatus(!isPopoverShown.value);
};

onClickOutside(popover, (event) => {
    if (props.isClickOutsideDisabled) {
        return;
    }

    if (!isPopoverShown.value) {
        return;
    }

    const target = event.target as HTMLElement;
    const closestModal = target.closest('.fg-modal');

    if (closestModal) {
        return;
    }

    changePopoverStatus(false);
});

watch(
    () => props.modelValue,
    (newValue) => {
        isPopoverShown.value = newValue;
    }
);
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

.fg-popover {
    $self: &;
    $popoverGap: var(--fg-popover-gap);

    &__wrapper {
        position: relative;
    }

    &__content {
        display: inline-block;
        padding: var(--fg-popover-padding);
        background-color: getColor('base-01');
        border-radius: var(--fg-popover-border-radius);
        box-shadow: 0 5px 18px 0 getColor('base-03');
        width: max-content;
        overflow: var(--fg-popover-overflow);
        box-sizing: border-box;

        &::after {
            content: '';
            position: absolute;
        }
    }

    /** TOP */
    &--top,
    &--topLeft,
    &--topRight {
        > #{$self}__wrapper > #{$self}__content {
            &::after {
                width: 100%;
                height: $popoverGap;
                bottom: calc($popoverGap * -1);
                left: 0;
            }
        }
    }

    /** RIGHT */
    &--right,
    &--rightTop,
    &--rightBottom {
        > #{$self}__wrapper > #{$self}__content {
            &::after {
                width: $popoverGap;
                height: 100%;
                left: calc($popoverGap * -1);
                top: 0;
            }
        }
    }

    /** LEFT */
    &--left,
    &--leftTop,
    &--leftBottom {
        > #{$self}__wrapper > #{$self}__content {
            &::after {
                width: $popoverGap;
                height: 100%;
                right: calc($popoverGap * -1);
                top: 0;
            }
        }
    }

    /** BOTTOM */
    &--bottom,
    &--bottomLeft,
    &--bottomRight {
        > #{$self}__wrapper > #{$self}__content {
            &::after {
                width: 100%;
                height: $popoverGap;
                top: calc($popoverGap * -1);
                left: 0;
            }
        }
    }
}
</style>
