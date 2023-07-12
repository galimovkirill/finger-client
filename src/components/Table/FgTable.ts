import { InjectionKey } from "vue";

export interface FgTableProps {
    striped?: boolean;
}

export const FgTablePropsKey = Symbol() as InjectionKey<FgTableProps>