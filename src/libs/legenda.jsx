import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-block"

import {
  CalcitePanel,
  CalciteBlock
} from "@esri/calcite-components-react";

const Legenda = () => {
    return (
    <CalcitePanel>
            <CalciteBlock open>
            <h3 className="custom-heading">Legenda</h3>
            </CalciteBlock>
          </CalcitePanel>
    )
}

export default Legenda