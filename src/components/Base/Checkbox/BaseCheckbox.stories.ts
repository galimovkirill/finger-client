import type { Meta, StoryObj } from '@storybook/vue3';

import BaseCheckbox from '@/components/Base/Checkbox/BaseCheckbox.vue';

const meta: Meta<typeof BaseCheckbox> = {
    component: BaseCheckbox,
    title: 'Checkbox',
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof BaseCheckbox>;

export const Default: Story = {
    render: (args) => ({
        components: { BaseCheckbox },

        setup() {
            return { args };
        },

        template: `
            <div class="sb-flex sb-items-center sb-justify-center sb-gap-2">
                <BaseCheckbox id="privacy-policy">
                    I accept the terms of the <a href="#" target="_blank">User Agreement</a>
                </BaseCheckbox>
            </div>
        `
    })
};
