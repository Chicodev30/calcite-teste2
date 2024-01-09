import React, { useEffect, useRef, useState } from "react";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-tooltip"
import "@esri/calcite-components/dist/components/calcite-block"
import "@esri/calcite-components/dist/components/calcite-input"
import "@esri/calcite-components/dist/components/calcite-label"
import "@esri/calcite-components/dist/components/calcite-select"
import "@esri/calcite-components/dist/components/calcite-option"
import "@esri/calcite-components/dist/components/calcite-input-number"
import "@esri/calcite-components/dist/components/calcite-input-date-picker"
import "@esri/calcite-components/dist/components/calcite-popover"


import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalcitePopover,
  CalcitePanel,
  CalciteBlock
} from "@esri/calcite-components-react";

import MapComponent from "./libs/mapComponent";
import './App.css'
import Procurar from "./libs/procurar";
import Legenda from "./libs/legenda";
import Guia from "./libs/guia";

const App = () => {
  const shellPanelStartRef = useRef(null);
  const [activePanel, setActivePanel] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  

  const togglePanel = (panelName) => {
    setActivePanel(prevActivePanel => {
      if (prevActivePanel === panelName) {
        setIsCollapsed(true);
        return null;
      } else {
        setIsCollapsed(false);
        return panelName;
      }
    });
  };

  useEffect(() => {
    const shellPanelStart = shellPanelStartRef.current;
    const actions = shellPanelStart?.querySelectorAll("CalciteAction");

    actions?.forEach(action => {
      const panelName = action.getAttribute('text').toLowerCase();
      action.addEventListener("click", () => togglePanel(panelName));
    });

    return () => {
      actions?.forEach(action => {
        const panelName = action.getAttribute('text').toLowerCase();
        action.removeEventListener("click", () => togglePanel(panelName));
      });
    };
  }, []);

  const isPanelActive = (panelName) => activePanel === panelName;

  return (
    <CalciteShell>
      <CalciteShellPanel slot="panel-start" position="start" ref={shellPanelStartRef} collapsed={isCollapsed}>
        <CalciteActionBar slot="action-bar">
          <CalciteAction icon="search" text="procurar" onClick={() => togglePanel('procurar')}></CalciteAction>
          <CalciteAction icon="legend" text="legenda" onClick={() => togglePanel('legenda')}></CalciteAction>
          <CalciteAction icon="layer" text="camada" onClick={() => togglePanel('camada')}></CalciteAction>
          <CalciteAction icon="question" text="question" id="question"></CalciteAction>
  <CalcitePopover
    heading="Guia de uso"
    label="Guia de uso"
    referenceElement="question"
    id="question"
    closable
    overlayPositioning="absolute"
  >
    <Guia />
  </CalcitePopover>
        </CalciteActionBar>
        {isPanelActive('procurar') && (
          <Procurar />
        )}
        {isPanelActive('legenda') && (
          <Legenda />
        )}
        {isPanelActive('camada') && (
          <CalcitePanel>
            <CalciteBlock open>
            <h3 className="custom-heading">Camada</h3>
            </CalciteBlock>
          </CalcitePanel>
        )}
      </CalciteShellPanel>
      <CalcitePanel>
        <div className="cabecalho">
        OSPOA
        <a href="https://prefeitura.poa.br/procempa" target="_blank" id="procempa-titulo"><p>Procempa</p></a>
        <a href="https://prefeitura.poa.br/" target="_blank"><img src="/brasao-pmpa.png" alt="Brasao de POA" /></a>
        </div>
        <MapComponent />
      </CalcitePanel>
    </CalciteShell>
  );
}

export default App;
