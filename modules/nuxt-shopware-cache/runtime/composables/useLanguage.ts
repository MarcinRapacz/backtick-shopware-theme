import { ref, Ref, computed, ComputedRef } from "vue";
import _ from "lodash";
import { useState } from "#app";
import { ILanguage } from "../../interfaces/ILanguage";
import { useSalesChannel } from "./useSalesChannel";
import { useDomain } from "./useDomain";

interface IUseLanguage {
  selectedLanguage: ComputedRef<ILanguage>;
  domainLanguage: ComputedRef<ILanguage | undefined>;
  languages: Ref<ILanguage[]>;
  setLanguage: (id: string) => void;
}

export const useLanguage = (): IUseLanguage => {
  const { salesChannel } = useSalesChannel();
  const { selectedDomain } = useDomain();

  const _selectedLanguage = useState<ILanguage>("_selectedLanguage");

  const selectedLanguage = computed(() => _selectedLanguage.value);

  const domainLanguage = computed(() => selectedDomain.value?.language);

  const languages: Ref<ILanguage[]> = ref(
    _.uniqBy(
      salesChannel.value.domains.map((domains) => domains.language),
      "id"
    )
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

  return {
    selectedLanguage,
    domainLanguage,
    languages,
    setLanguage,
  };
};
