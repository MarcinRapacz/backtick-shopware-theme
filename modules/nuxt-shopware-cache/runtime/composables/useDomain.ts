import { useState } from "#app";
import { computed, ComputedRef, Ref, ref } from "vue";
import { ISalesChannelDomain } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannelDomain";
import { useSalesChannel } from "@/modules/nuxt-shopware-cache/runtime/composables/useSalesChannel";

interface IUseDomain {
  domains: Ref<ISalesChannelDomain[] | null>;
  selectedDomain: ComputedRef<ISalesChannelDomain | undefined>;
  setDomain: (id: string) => void;
}

export const useDomain = (): IUseDomain => {
  const { salesChannel } = useSalesChannel();

  const _selectedDomain = useState<ISalesChannelDomain | undefined>(
    "_selectedDomain"
  );

  const domains: Ref<ISalesChannelDomain[] | null> = ref(
    salesChannel.value?.domains ?? null
  );

  const selectedDomain = computed(() => _selectedDomain.value);

  const setDomain = (id: string): void => {
    const salesChannelDomain: ISalesChannelDomain | undefined =
      domains.value?.find((salesChannelDomain) => salesChannelDomain.id === id);
    if (!salesChannelDomain) {
      console.warn("Sales channel domain not found");
      return;
    }

    _selectedDomain.value = salesChannelDomain;
  };

  return {
    domains,
    selectedDomain,
    setDomain,
  };
};
