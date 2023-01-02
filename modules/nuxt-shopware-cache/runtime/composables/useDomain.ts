import { useState } from "#app";
import { computed, ComputedRef, Ref, ref } from "vue";

import { IDomain } from "../../interfaces/IDomain";
import { useSalesChannel } from "./useSalesChannel";

interface IUseDomain {
  domains: Ref<IDomain[]>;
  selectedDomain: ComputedRef<IDomain | undefined>;
  setDomain: (id: string) => void;
  switchDomain: (id: string) => void;
}

export const useDomain = (): IUseDomain => {
  const router = useRouter();
  const { salesChannel } = useSalesChannel();

  const _selectedDomain = useState<IDomain | undefined>("_selectedDomain");

  const domains: Ref<IDomain[]> = ref(salesChannel.value.domains);

  const selectedDomain = computed(() => _selectedDomain.value);

  const setDomain = (id: string): void => {
    const domain: IDomain | undefined = domains.value.find(
      (domain) => domain.id === id
    );
    if (!domain) {
      console.warn("Sales channel domain not found");
      return;
    }

    _selectedDomain.value = domain;
  };

  const switchDomain = (id: string) => {
    if (process.client) {
      if (selectedDomain.value?.id === id) {
        return;
      }

      const oldPrefix = selectedDomain.value?.path;
      const domain: IDomain | undefined = domains.value.find(
        (domain) => domain.id === id
      );
      if (!domain) {
        console.warn("Sales channel domain not found");
        return;
      }

      const domainPath = domain.path === "/" ? "" : domain.path;
      let pathname = window.location.pathname;

      if (oldPrefix && oldPrefix !== "/") {
        pathname = pathname.replace(oldPrefix, "");
      }

      _selectedDomain.value = domain;
      router.push(domainPath + pathname);
    }
  };

  return {
    domains,
    selectedDomain,
    setDomain,
    switchDomain,
  };
};
