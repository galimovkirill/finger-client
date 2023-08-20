<script lang="ts">
import { FgAvatarColors, type FgAvatarColor } from './FgAvatar';
import { computed, h, type HTMLAttributes, type PropType } from 'vue';

export default {
    props: {
        color: {
            type: String as PropType<FgAvatarColor | 'default'>,
            default: 'default'
        },
        size: {
            type: Number,
            default: 40
        }
    },
    setup(props, { slots }) {
        const defaultSlot = slots.default ? slots.default() : [];
        const modifiedSlot = defaultSlot.map((s) => {
            if (s.type === 'img') {
                return s;
            }

            let content = s.children;
            if (typeof content === 'string') {
                content = content.trim();

                if (content.length <= 3) {
                    return s;
                }

                const words = content.split(' ');
                const wordsCount = words.length;

                if (wordsCount === 1 || wordsCount > 3) {
                    s.children = content[0].toUpperCase();
                    return s;
                }

                if (wordsCount <= 3) {
                    s.children = words.map((w) => w[0].toUpperCase()).join('');
                    return s;
                }

                return s;
            }

            return s;
        });

        const classes = computed(() => {
            const classList = ['fg-avatar'];

            classList.push(`fg-avatar--${props.color}`);

            return classList;
        });

        const styles = computed(() => {
            const stylesList: HTMLAttributes['style'] = {
                width: `${props.size}px`,
                height: `${props.size}px`
            };

            if (props.color && !FgAvatarColors.includes(props.color)) {
                stylesList.backgroundColor = props.color;
            }

            return stylesList;
        });

        return () =>
            h(
                'div',
                {
                    class: classes.value,
                    style: styles.value
                },
                modifiedSlot
            );
    }
};
</script>

<style lang="scss">
@import '@/assets/styles/mixin.scss';

// TODO: refactor color modes with dynamic css var
.fg-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;

    background-color: getColor('base-02');
    border-radius: 34%;
    font-size: 0.8rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.25s ease;
    }

    &--primary {
        color: getColor('base-01');
        background-color: getColor('primary');
    }

    &--success {
        color: getColor('base-01');
        background-color: getColor('success');
    }

    &--danger {
        color: getColor('base-01');
        background-color: getColor('danger');
    }

    &--dark {
        color: getColor('base-01');
        background-color: getColor('base-07');
    }

    &:hover {
        img {
            transform: scale(1.15);
        }
    }
}
</style>
