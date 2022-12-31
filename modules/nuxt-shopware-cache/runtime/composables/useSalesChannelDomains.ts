import { useState } from "#app";
import { computed, ComputedRef, Ref, ref } from "vue";
import { ISalesChannelDomain } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannelDomain";
import { useSalesChannel } from "@/modules/nuxt-shopware-cache/runtime/composables/useSalesChannel";

interface IUseSalesChannelDomains {
  salesChannelDomains: Ref<ISalesChannelDomain[]>;
  selectedSalesChannelDomain: ComputedRef<ISalesChannelDomain | undefined>;
  setSalesChannelDomain: (id: string) => void;
}

export const useSalesChannelDomains = (): IUseSalesChannelDomains => {
  const { salesChannel } = useSalesChannel();

  const _selectedSalesChannelDomain = useState<ISalesChannelDomain | undefined>(
    "_selectedSalesChannelDomain"
  );

  const salesChannelDomains: Ref<ISalesChannelDomain[]> = ref(
    salesChannel.domains
  );

  const selectedSalesChannelDomain = computed(
    () => _selectedSalesChannelDomain.value
  );

  const setSalesChannelDomain = (id: string): void => {
    const salesChannelDomain: ISalesChannelDomain | undefined =
      salesChannelDomains.value.find(
        (salesChannelDomain) => salesChannelDomain.id === id
      );
    if (!salesChannelDomain) {
      console.warn("Sales channel domain not found");
      return;
    }

    _selectedSalesChannelDomain.value = salesChannelDomain;
  };

  return {
    salesChannelDomains,
    selectedSalesChannelDomain,
    setSalesChannelDomain,
  };
};
