import { Ref, ComputedRef } from "vue";
import _ from "lodash";
import { ISnippetSet } from "../../interfaces/ISnippetSet";

interface IUseSnippetSet {
  selectedSnippetSet: ComputedRef<ISnippetSet>;
  domainSnippetSet: ComputedRef<ISnippetSet | undefined>;
  snippetSets: Ref<ISnippetSet[]>;
  setSnippetSet: (id: string) => void;
  fetchSnippetSet: (id: string) => any;
}

export const useSnippetSet = (): IUseSnippetSet => {
  const { salesChannel } = useSalesChannel();
  const { selectedDomain } = useDomain();
  const { $i18n } = useNuxtApp();
  const snippets = useState<any>(`snippets`, () => ({}));

  const _selectedSnippetSet = useState<ISnippetSet>("_selectedSnippetSet");

  const selectedSnippetSet = computed(() => _selectedSnippetSet.value);

  const domainSnippetSet = computed(() => selectedDomain.value?.snippetSet);

  const snippetSets: Ref<ISnippetSet[]> = ref(
    _.uniqBy(
      salesChannel.value.domains.map((domains) => domains.snippetSet),
      "id"
    )
  );

  const setSnippetSet = async (id: string): Promise<void> => {
    const snippetSet: ISnippetSet | undefined = snippetSets.value.find(
      (snippetset) => snippetset.id === id
    );
    if (!snippetSet) {
      console.warn("Snippet set not found");
      return;
    }
    _selectedSnippetSet.value = snippetSet;

    if (!snippets.value[id]) {
      await fetchSnippetSet(id);
    }

    if ($i18n) {
      $i18n.global.locale = snippetSet.id as any;
    }
  };

  const fetchSnippetSet = async (id: string) => {
    const response = await $fetch(`/api/cache/snippets/${id}`);
    snippets.value[id] = response.snippets;
  };

  return {
    selectedSnippetSet,
    domainSnippetSet,
    snippetSets,
    setSnippetSet,
    fetchSnippetSet,
  };
};
