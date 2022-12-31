import { ref, Ref, computed, ComputedRef, watch } from "vue";
import { useState } from "#app";
import { ILanguage } from "@/modules/nuxt-shopware-cache/interfaces/ILanguage";
import { useSalesChannel } from "@/modules/nuxt-shopware-cache/runtime/composables/useSalesChannel";
import { useSalesChannelDomains } from "@/modules/nuxt-shopware-cache/runtime/composables/useSalesChannelDomains";

interface IUseLanguage {
  selectedLanguage: ComputedRef<ILanguage | undefined>;
  languages: Ref<ILanguage[]>;
  setLanguage: (id: string) => void;
}

export const useLanguage = (): IUseLanguage => {
  const { salesChannel } = useSalesChannel();
  const { selectedSalesChannelDomain } = useSalesChannelDomains();

  const _selectedLanguage = useState<ILanguage | undefined>(
    "_selectedLanguage"
  );

  const selectedLanguage = computed(() => _selectedLanguage.value);

  const languages: Ref<ILanguage[]> = ref(
    salesChannel.domains.map((domains) => domains.language)
  );

  const setLanguage = (id: string): void => {
    const language: ILanguage | undefined = languages.value.find(
      (language) => language.id === id
    );
    if (!language) {
      console.warn("Language not found");
      return;
    }
    _selectedLanguage.value = language;
  };

  watch(selectedSalesChannelDomain, (domain) => {
    domain && setLanguage(domain.languageId);
  });

  return {
    selectedLanguage,
    languages,
    setLanguage,
  };
};
