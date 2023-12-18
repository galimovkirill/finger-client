import { useBreakpoints as vueUseBreakpoints } from '@vueuse/core';
import { computed } from 'vue';

export const BreakpointsList = {
    sm: 360,
    md: 768,
    xl: 1024
};

export const useBreakpoints = () => {
    const breakpoints = vueUseBreakpoints(BreakpointsList);

    const isSm = breakpoints.between('sm', 'md');
    const isMd = breakpoints.between('md', 'xl');
    const isXl = breakpoints.greaterOrEqual('xl');

    const current = computed<keyof typeof BreakpointsList>(() => {
        if (isSm.value) return 'sm';
        if (isMd.value) return 'md';
        if (isXl.value) return 'xl';

        return 'sm';
    });

    return {
        isSm,
        isMd,
        isXl,
        current
    };
};
