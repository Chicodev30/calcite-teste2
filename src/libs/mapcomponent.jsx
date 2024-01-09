import "./mapcomponent.css"
import esriConfig from '@arcgis/core/config';
import Print from "@arcgis/core/widgets/Print";
import Legend from "@arcgis/core/widgets/Legend";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";



esriConfig.apiKey = import.meta.env.VITE_API_KEY;//api key localizado na raiz do projeto (.env) para usar o arcgis desenvolvedor

// Ensure to import ArcGIS map components

// Set the ArcGIS API key
import {ArcgisMap, ArcgisSearch, ArcgisLegend,ArcgisBasemapToggle, ArcgisPrint, ArcgisBookmarks, ArcgisBasemapGallery,ArcgisFullscreen } from "@arcgis/map-components-react";

const MapComponent = () => {

  return (
    <ArcgisMap api-key={esriConfig.apiKey} 
    item-id="41281c51f9de45edaf1c8ed44bb10e30" 
    style={{height: '100vh', width: "100%"}}
    center={[-51.2177, -30.0346]} zoom={15}
    >
      <ArcgisLegend position="bottom-left" expandable Legend={Legend} />
      <ArcgisBasemapToggle position="bottom-right" />
      <ArcgisPrint position="bottom-right" expandable print={Print}/>
      <ArcgisBookmarks position="top-left" expandable Bookmarks={Bookmarks}/>
      <ArcgisSearch position="top-right" />
      <ArcgisBasemapGallery position="bottom-left" expandable BasemapGallery={BasemapGallery}/>
      <ArcgisFullscreen position="top-left" />
    </ArcgisMap>
  );
  ;
  
}

export default MapComponent;