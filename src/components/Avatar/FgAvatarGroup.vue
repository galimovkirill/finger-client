<script lang="ts">
import { h, type VNodeArrayChildren } from 'vue';

export default {
    props: {
        /**
         * Set 0 to display all avatars in a row
         */
        max: {
            type: Number,
            default: 0
        }
    },
    setup(props, { slots }) {
        const defaultSlot = slots.default ? slots.default() : [];
        const getContent = () => {
            if (!Array.isArray(defaultSlot[0].children)) {
                return defaultSlot;
            }

            const avatarsCount = defaultSlot[0].children.length;

            return defaultSlot[0].children.map((c, index) => {
                const classes = ['fg-avatar-group__item'];
                const isLast = index + 1 === props.max;

                const renderElements: VNodeArrayChildren = [c];

                if (props.max > 0) {
                    const hiddenElementsCounterDiv = h(
                        'div',
                        { class: 'fg-avatar-group__remainder' },
                        `+${avatarsCount - props.max}`
                    );

                    if (isLast) {
                        renderElements.push(hiddenElementsCounterDiv);
                        classes.push('fg-avatar-group__item--last');
                    }

                    if (index + 1 > props.max) {
                        classes.push('fg-avatar-group__item--hidden');
                    }
                }

                return h('div', { class: classes.join(' ') }, renderElements);
            });
        };

        return () =>
            h(
                'div',
                {
                    class: 'fg-avatar-group'
                },
                getContent()
            );
    }
};
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

$avatarBorderWidth: 2px;

.fg-avatar-group {
    display: flex;
    padding-left: 14px;

    &__item {
        margin-left: -14px;
        position: relative;
        transition: all 0.2s ease;
        z-index: 2;
        box-sizing: content-box;

        &:hover {
            transform: translateX(-6px);
            img {
                transform: scale(1);
            }
        }

        &--hidden {
            display: none;
        }
    }

    &__remainder {
        user-select: none;
        position: absolute;
        left: $avatarBorderWidth;
        top: $avatarBorderWidth;
        background-color: rgba(0, 0, 0, 0.6);
        width: calc(100% - calc($avatarBorderWidth * 2));
        height: calc(100% - calc($avatarBorderWidth * 2));
        border-radius: 34%; // Same as avatar border-radius
        color: getColor('base-01');
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fg-avatar {
        border: $avatarBorderWidth solid getColor('base-01');
    }
}
</style>
