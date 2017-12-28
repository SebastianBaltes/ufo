import "./style/index.scss";
import "aframe";

import "aframe-sun-sky";
import "aframe-environment-component";
import "aframe-log-component";
import "aframe-text-geometry-component";
import "aframe-look-at-component";
import "aframe-extras";
import "./components/substract-meshs";

import _ from 'lodash';

const html = `

    <a-scene antialias="true">
        
        <a-assets>
            <img id="linoleum" src="server/Marmoleum_Real-3136_concrete.jpg"></img>
            <img id="rauhfaser" src="server/rauhfa01.jpg"></img>
            <a-asset-item id="window" src="server/Window/window.dae"></a-asset-item>
            <a-asset-item id="radiatorObj" src="server/bedroom-heater/[.obj]/Radiateur.obj"></a-asset-item>
            <a-asset-item id="radiatorMtl" src="server/bedroom-heater/[.obj]/Radiateur.mtl"></a-asset-item>
            <a-asset-item id="bedObj" src="server/Bed/BED.obj"></a-asset-item>
            <a-asset-item id="doorDae" src="server/Room-Door/Door_Component_BI3.dae"></a-asset-item>
            <img id="sky" src="server/tirol.jpg">
        </a-assets> 
         
        <a-sky src="#sky"></a-sky>
         
        <a-entity id="room" >

          <a-entity light="intensity:0.79;type:ambient;color:#BBB" id="lightAmbient" position="0 0.138 -0.086"></a-entity>

          <a-entity light="intensity:0.5;castShadow:true;decay:2;distance:50;type:point" position="0.5 1.16 -1.183" id="lightWindow1"></a-entity>
          <a-entity light="intensity:0.5;decay:2;distance:50;type:point" position="-0.384 1.16 -1.183" id="lightWindow2"></a-entity>

          <a-entity position="0.225 0.198 -1.354" scale="0.006 0.006 0.006"  obj-model="obj: #radiatorObj; mtl: #radiatorMtl" id="radiator1"></a-entity>
          <a-entity position="0.504 1.084 -1.426" scale="1.2 1.2 1.2" rotation="0 270 0" collada-model="#window" id="window1"></a-entity>
          
          <a-entity position="-0.67 0.198 -1.354" scale="0.006 0.006 0.006"  obj-model="obj: #radiatorObj; mtl: #radiatorMtl" id="radiator2"></a-entity>
          <a-entity position="-0.372 1.084 -1.426" scale="1.2 1.2 1.2" rotation="0 270 0" collada-model="#window" id="window2"></a-entity>
          
          <a-entity position="0.4 0.145 1.035" scale="0.00015 0.00015 0.00015" obj-model="obj: #bedObj" id="bed"></a-entity>
          <a-entity position="-0.869 0.152 1.446" scale="0.7 0.7 0.7" collada-model="#doorDae" rotation="0 180 0" id="door"></a-entity>
         
          <a-box position="0 0 0" width="3" depth="3" height="0.2" material="src: #linoleum; repeat: 2 2" id="floor" ></a-box>
   
          <a-box position="0 1 -1.5" width="3" depth="0.2" height="2" material="src: #rauhfaser; repeat: 15 10" id="windowWall" substract-meshs="#windowblock1,#windowblock2"></a-box>
          <a-box position="-0.375 1.093 -1.5" width="0.5" depth="1" height="0.5" id="windowblock1" visible="false" scale="1 1.8 0.5"></a-box>
          <a-box position="0.505 1.093 -1.5" width="0.5" depth="1" height="0.5" id="windowblock2" visible="false" scale="1 1.8 0.5"></a-box>
         
          <a-box position="0 2 0" width="3" depth="3" height="0.2" material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="0 1 1.5" width="3" depth="0.2" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="-1.5 1 0" width="0.2" depth="3" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="1.5 1 0" width="0.2" depth="3" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
          
        </a-entity>
        
        <a-entity id="myCameraPosition" position="0.5 -0.5 1" >
          <a-entity camera="userHeight: 1.7" look-controls keyboard-controls></a-entity>
        </a-entity>
      
    </a-scene>
    
`;

$(()=> {
    $('body').html(html);
});