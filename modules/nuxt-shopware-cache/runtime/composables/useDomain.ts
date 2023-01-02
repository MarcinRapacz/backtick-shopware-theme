import { useState } from "#app";
import { computed, ComputedRef, Ref, ref } from "vue";

import { IDomain } from "../../interfaces/IDomain";
import { useSalesChannel } from "./useSalesChannel";

interface IUseDomain {
  domains: Ref<IDomain[]>;
  selectedDomain: ComputedRef<IDomain | undefined>;
  domainPrefixes: ComputedRef<string[]>;
  setDomain: (id: string) => void;
}

export const useDomain = (): IUseDomain => {
  const requestEvent = useRequestEvent();
  const { salesChannel } = useSalesChannel();

  const _selectedDomain = useState<IDomain | undefined>("_selectedDomain");

  const domains: Ref<IDomain[]> = ref(salesChannel.value.domains);

  const selectedDomain = computed(() => _selectedDomain.value);

  const domainPrefixes = computed(() =>
    domains.value.map((domain) => {
      try {
        const { host } = new URL(domain.url);
        return domain.url.split(host)[1] || "/";
      } catch (error) {
        console.error(`Invalid host: ${domain.url}` + error);
        return "/";
      }
    })
  );

  const setDomain = (id: string): void => {
    const salesChannelDomain: IDomain | undefined = domains.value.find(
      (salesChannelDomain) => salesChannelDomain.id === id
    );
    if (!salesChannelDomain) {
      console.warn("Sales channel domain not found");
      return;
    }

    _selectedDomain.value = salesChannelDomain;
  };

  return {
    domains,
    selectedDomain,
    domainPrefixes,
    setDomain,
  };
};
