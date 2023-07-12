import type { Meta, StoryObj } from '@storybook/vue3';

import FgTable from '@/components/Table/FgTable.vue'
import FgTr from '@/components/Table/FgTr.vue'
import FgTd from '@/components/Table/FgTd.vue'
import FgTh from '@/components/Table/FgTh.vue'

interface TableItem {
    firstName: string;
    lastName: string;
    gender: 'Male' | 'Female';
    email: string;
}

const tableContent: TableItem[] = [
    { firstName: 'William', lastName: 'Campos', gender: 'Male', email: 'WilliamICampos@teleworm.us' },
    { firstName: 'Jessica', lastName: 'Rutan', gender: 'Female', email: 'JessicaMRutan@jourrapide.com' },
    { firstName: 'Thaddeus', lastName: 'Acevedo', gender: 'Male', email: 'ThaddeusLAcevedo@armyspy.com' },
    { firstName: 'Vicki', lastName: 'Watson', gender: 'Female', email: 'VickiRWatson@dayrep.com' },
    { firstName: 'June', lastName: 'Owens', gender: 'Female', email: 'JuneEOwens@armyspy.com' },
    { firstName: 'Violet', lastName: 'Taylor', gender: 'Female', email: 'VioletKTaylor@teleworm.us' },
    { firstName: 'Mark', lastName: 'Gregory', gender: 'Male', email: 'MarkDGregory@jourrapide.com' },
]

const meta: Meta<typeof FgTable> = {
    component: FgTable,
    title: 'Components/Table',
    tags: ['autodocs'],
    // decorators: [
    //     () => ({
    //         template:
    //             '<div class="sb-flex sb-items-center sb-justify-center sb-gap-2" style="max-width: 300px; margin: 32px auto;"><story /></div>'
    //     })
    // ]
};

export default meta;

type Story = StoryObj<typeof FgTable>;

export const Default: Story = {
    render: (args) => ({
        components: { FgTable, FgTr, FgTd, FgTh },

        setup() {
            return { args, tableContent };
        },

        template: `
            <FgTable>
                <template #thead>
                    <FgTr>
                        <FgTh>Id</FgTh>
                        <FgTh>First Name</FgTh>
                        <FgTh>Last Name</FgTh>
                        <FgTh>Gender</FgTh>
                        <FgTh>Email</FgTh>
                    </FgTr>
                </template>

                <template #tbody>
                    <FgTr v-for="(row, index) in tableContent" :key="index">
                        <FgTd>{{ index }}</FgTd>
                        <FgTd>{{ row.firstName }}</FgTd>
                        <FgTd>{{ row.lastName }}</FgTd>
                        <FgTd>{{ row.gender }}</FgTd>
                        <FgTd>{{ row.email }}</FgTd>
                    </FgTr>
                </template>
            </FgTable>
        `
    })
};

export const Striped: Story = {
    render: (args) => ({
        components: { FgTable, FgTr, FgTd, FgTh },

        setup() {
            return { args, tableContent };
        },

        template: `
            <FgTable striped>
                <template #thead>
                    <FgTr>
                        <FgTh>Id</FgTh>
                        <FgTh>First Name</FgTh>
                        <FgTh>Last Name</FgTh>
                        <FgTh>Gender</FgTh>
                        <FgTh>Email</FgTh>
                    </FgTr>
                </template>

                <template #tbody>
                    <FgTr v-for="(row, index) in tableContent" :key="index">
                        <FgTd>{{ index }}</FgTd>
                        <FgTd>{{ row.firstName }}</FgTd>
                        <FgTd>{{ row.lastName }}</FgTd>
                        <FgTd>{{ row.gender }}</FgTd>
                        <FgTd>{{ row.email }}</FgTd>
                    </FgTr>
                </template>
            </FgTable>
        `
    })
};
