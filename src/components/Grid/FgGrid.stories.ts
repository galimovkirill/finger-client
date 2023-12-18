import type { Meta, StoryObj } from '@storybook/vue3';

import FgGrid from '@/components/Grid/FgGrid.vue';
import FgGridColumn from '@/components/Grid/FgGridColumn.vue';

const meta: Meta<typeof FgGrid> = {
    component: FgGrid,
    title: 'Components/Grid',
    tags: ['autodocs'],
    decorators: [
        () => ({
            template:
                '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2"><story /></div>'
        })
    ]
};

export default meta;

type Story = StoryObj<typeof FgGrid>;

export const Default: Story = {
    render: (args) => ({
        components: { FgGrid, FgGridColumn },

        setup() {
            return { args };
        },

        template: `
            <FgGrid :align="align" :justify="justify" style="width: 100%;">
                <FgGridColumn
                    :span="{ sm: 12, md: 6, xl: 4 }"
                    style="background-color: red;"
                >
                    Grid column 1
                </FgGridColumn>
        
                <FgGridColumn
                    :span="{ sm: 12, md: 6, xl: 6 }"
                    style="background-color: green;"
                >
                    Grid column 2
                </FgGridColumn>
        
                <FgGridColumn
                    :span="{ sm: 12, md: 12, xl: 2 }"
                    style="background-color: pink;"
                >
                    Grid column 3
                </FgGridColumn>
            </FgGrid>
        `
    })
};
