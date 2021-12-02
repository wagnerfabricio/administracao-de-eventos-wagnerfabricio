import { DrinksProvider } from "./Drinks";
import { FormaturaProvider } from "./Formatura";
import { CasamentoProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";

const Providers = ({ children }) => {
  return (
    <DrinksProvider>
    <FormaturaProvider>
      <CasamentoProvider>
        <ConfraternizacaoProvider>
          {children}
        </ConfraternizacaoProvider>
        </CasamentoProvider>
        </FormaturaProvider>
    </DrinksProvider>
  );
};

export default Providers;
