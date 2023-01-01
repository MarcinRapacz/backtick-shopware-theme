import { Ref, ComputedRef } from "vue";
import { uniqBy } from "lodash";
import { ISnippetSet } from "@/modules/nuxt-shopware-cache/interfaces/ISnippetSet";

interface IUseSnippetSet {
  selectedSnippetSet: ComputedRef<ISnippetSet>;
  domainSnippetSet: ComputedRef<ISnippetSet | undefined>;
  snippetSets: Ref<ISnippetSet[]>;
  setSnippetSet: (id: string) => void;
}

export const useSnippetSet = (): IUseSnippetSet => {
  const { salesChannel } = useSalesChannel();
  const { selectedDomain } = useDomain();
  const { $i18n } = useNuxtApp();

  const _selectedSnippetSet = useState<ISnippetSet>("_selectedSnippetSet");

  const selectedSnippetSet = computed(() => _selectedSnippetSet.value);

  const domainSnippetSet = computed(() => selectedDomain.value?.snippetSet);

  const snippetSets: Ref<ISnippetSet[]> = ref(
    uniqBy(
      salesChannel.value.domains.map((domains) => domains.snippetSet),
      "id"
    )
  );

  const setSnippetSet = (id: string): void => {
    const snippetSet: ISnippetSet | undefined = snippetSets.value.find(
      (snippetset) => snippetset.id === id
    );
    if (!snippetSet) {
      console.warn("Snippet set not found");
      return;
    }

    _selectedSnippetSet.value = snippetSet;
    if ($i18n) {
      $i18n.global.locale = snippetSet.id as any;
    }
  };

  watch(selectedDomain, (domain) => {
    domain && setSnippetSet(domain.snippetSetId);
  });

  return {
    selectedSnippetSet,
    domainSnippetSet,
    snippetSets,
    setSnippetSet,
  };
};
