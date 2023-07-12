import type { Meta, StoryObj } from '@storybook/vue3';

import { FgInputTypes } from '@/components/Input/FgInput';

import FgInput from '@/components/Input/FgInput.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import IconEyeCrossed from '@/icons/IconEyeCrossed.vue';
import IconEye from '@/icons/IconEye.vue';
import IconUser from '@/icons/IconUser.vue';
import { reactive, ref } from 'vue';

const meta: Meta<typeof FgInput> = {
    component: FgInput,
    title: 'Components/Input',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgInput>;

export const Default: Story = {
    render: (args) => ({
        components: { FgInput },

        setup() {
            const value = ref('');

            return { args, value };
        },

        template: `
            <FgInput v-model="value" placeholder="Enter your name" />
        `
    })
};

export const Type: Story = {
    render: (args) => ({
        components: { FgInput },

        setup() {
            const data = reactive(
                FgInputTypes.reduce((accumulator, value) => {
                    return { ...accumulator, [value]: '' };
                }, {})
            );

            return { args, data, FgInputTypes };
        },

        template: `
            <FgInput
                v-for="type in FgInputTypes"
                v-model="data[type]"
                :key="type"
                :type="type"
                :placeholder="\`Enter \${type}\`"
            />
        `
    })
};

export const Icon: Story = {
    render: (args) => ({
        components: { FgInput, SvgIcon, IconUser },

        setup() {
            const value = ref('');

            return { args, value };
        },

        template: `
            <FgInput v-model="value" placeholder="Enter your name">
                <template #icon>
                    <SvgIcon>
                        <IconUser />
                    </SvgIcon>
                </template>
            </FgInput>
        `
    })
};

export const IconPosition: Story = {
    render: (args) => ({
        components: { FgInput, SvgIcon, IconUser },

        setup() {
            const value = ref('');

            return { args, value };
        },

        template: `
            <FgInput v-model="value" placeholder="Enter your name">
                <template #icon>
                    <SvgIcon>
                        <IconUser />
                    </SvgIcon>
                </template>
            </FgInput>

            <FgInput v-model="value" placeholder="Enter your name" icon-position="end">
                <template #icon>
                    <SvgIcon>
                        <IconUser />
                    </SvgIcon>
                </template>
            </FgInput>
        `
    })
};

export const Password: Story = {
    render: (args) => ({
        components: { FgInput, SvgIcon, IconEye, IconEyeCrossed },

        setup() {
            const password = ref('');
            const isPasswordVisible = ref(false);

            return { args, password, isPasswordVisible };
        },

        template: `
            <FgInput
                v-model="password"
                placeholder="Enter your password"
                icon-position="end"
                type="password"
                clickable-icon
                :visible-password="isPasswordVisible"
                @iconClick="isPasswordVisible = !isPasswordVisible"
            >
                <template #icon>
                    <SvgIcon>
                        <IconEyeCrossed v-if="isPasswordVisible" />
                        <IconEye v-else />
                    </SvgIcon>
                </template>
            </FgInput>
        `
    })
};
