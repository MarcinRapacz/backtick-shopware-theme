import { Ref, ComputedRef } from "vue";
import { uniqBy } from "lodash";
import { ICurrency } from "@/modules/nuxt-shopware-cache/interfaces/ICurrency";

interface IUseCurrency {
  selectedCurrency: ComputedRef<ICurrency>;
  domainCurrency: ComputedRef<ICurrency | undefined>;
  currencies: Ref<ICurrency[]>;
  setCurrency: (id: string) => void;
}

export const useCurrency = (): IUseCurrency => {
  const { salesChannel } = useSalesChannel();
  const { selectedDomain } = useDomain();

  const _selectedCurrency = useState<ICurrency>("_selectedCurrency");

  const selectedCurrency = computed(() => _selectedCurrency.value);

  const domainCurrency = computed(() => selectedDomain.value?.currency);

  const currencies: Ref<ICurrency[]> = ref(
    uniqBy(
      salesChannel.value.domains.map((domains) => domains.currency),
      "id"
    )
  );

  const setCurrency = (id: string): void => {
    const currency: ICurrency | undefined = currencies.value.find(
      (currency) => currency.id === id
    );
    if (!currency) {
      console.warn("Currency not found");
      return;
    }
    _selectedCurrency.value = currency;
  };

  watch(selectedDomain, (domain) => {
    domain && setCurrency(domain.currencyId);
  });

  return {
    selectedCurrency,
    domainCurrency,
    currencies,
    setCurrency,
  };
};
