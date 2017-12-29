import "./style/index.scss";
import "aframe";

import "aframe-sun-sky";
import "aframe-environment-component";
import "aframe-log-component";
import "aframe-text-geometry-component";
import "aframe-look-at-component";
import "aframe-extras";
import "./components/csg-meshs";
import "./geometries/superellipsoid";

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
            
        <a-entity id="myCameraPosition" position="1 -0.5 0" >
          <a-entity camera="userHeight: 1.7" look-controls="standing: false"></a-entity>
        </a-entity>

        <a-entity id="ufo" 
             position="-60 -10 -70" 
             scale="0.2 0.2 0.2" 
             rotation="0 0 -90" 
             material="sphericalEnvMap:#sky;metalness:1;roughness:0.2;emissiveIntensity:0.2;color:#ffffff;emissive:#ffffff"
             geometry="primitive: superellipsoid; a: 1; b: 0.277; n: 2.5; ">

            <a-animation attribute="rotation" dur="20000" to="0 0 -2000" easing="ease-in">            
            </a-animation>        
            <a-animation attribute="position" dur="20000" to="0.869 0.2 -10" easing="ease-in-expo">            
            </a-animation>           
             
            <a-animation attribute="rotation" begin="20000" dur="60000" from="0 0 -2000" to="0 0 -3000" easing="ease-out">            
            </a-animation>        
            <a-animation attribute="position" begin="20000" dur="60000" from="0.869 0.2 -10" to="0.869 0.951 -2" easing="ease-out">            
            </a-animation>         

            <a-animation attribute="rotation" begin="80000" dur="10000" from="0 0 -3000" to="0 0 -3360" easing="ease-in-out">            
            </a-animation>        
            <a-animation attribute="position" begin="80000" dur="10000" from="0.869 0.951 -2" to="0.869 0.951 -1.53" easing="ease-in-out">            
            </a-animation>         

            <a-animation attribute="rotation" begin="90000" dur="10000" from="0 0 -3360" to="0 0 -3720" easing="ease-in-out" repeat="5">            
            </a-animation>        

        </a-entity> 

        <a-sky src="#sky" rotation="16 -207 -18"></a-sky>
         
        <a-entity id="room">

          <a-entity light="intensity:0.8;type:ambient;color:#ccc" id="lightAmbient" position="0 0.138 -0.086"></a-entity>

          <a-box position="0 0 0" width="5" depth="3" height="0.2" material="src: #linoleum; repeat: 2 2" id="floor" ></a-box>
   
          <a-box position="0 1 -1.5" width="5" depth="0.2" height="2" material="src: #rauhfaser; repeat: 15 10" id="windowWall" csg-meshs="subtract: .windowGroup .hole"></a-box>
         
          <a-box position="0 2 0" width="3" depth="3" height="0.2" material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="1.5 2 0" width="5" depth="3" height="0.2" rotation="0 0 -45" material="src: #rauhfaser; repeat: 15 10"></a-box>
          
          <a-box position="0 1 1.5" width="5" depth="0.2" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="-1.5 1 0" width="0.2" depth="3" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="2.5 1 0" width="0.2" depth="3" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
         
          <a-entity position="1 0.145 1.035" scale="0.00015 0.00015 0.00015" obj-model="obj: #bedObj" id="bed"></a-entity>
          <a-entity position="-0.869 0.1 1.446" scale="0.7 0.7 0.7" collada-model="#doorDae" rotation="0 180 0" id="door"></a-entity>

          <a-entity position="-0.386 0 -1.5" class="windowGroup">
              <a-box position="0.278 1.139 0.052" width="0.5" depth="1" height="0.5" class="hole" scale="1 1.8 0.5" visible="false" geometry="width:0.72;height:0.58;depth:0.6599999999999999"></a-box>
              <a-entity position="0.279 1.1440000000000001 0.074" scale="1 1.4 1.8" rotation="0 270 0" collada-model="server/Window/window.dae" class="window"></a-entity>          
              <a-entity position="0.01 0.198 0.146" scale="0.007 0.006 0.006" obj-model="obj: #radiatorObj; mtl: #radiatorMtl" class="radiator"></a-entity>
              <a-entity light="decay:0.5;distance:50;intensity:0.3;type:point;castShadow:true" position="0.275 1.16 0.8" class="light"></a-entity>
          </a-entity>
          
          <a-entity position="0.623 0 -1.5" class="windowGroup">
              <a-box position="0.278 1.139 0.052" width="0.5" depth="1" height="0.5" class="hole" scale="1 1.8 0.5" visible="false" geometry="width:0.72;height:0.58;depth:0.6599999999999999"></a-box>
              <a-entity position="0.279 1.1440000000000001 0.074" scale="1 1.4 1.8" rotation="0 270 0" collada-model="server/Window/window.dae" class="window"></a-entity>          
              <a-entity position="-0.05 0.198 0.146" scale="0.007 0.006 0.006" obj-model="obj: #radiatorObj; mtl: #radiatorMtl" class="radiator"></a-entity>
              <a-entity light="decay:0.5;distance:50;intensity:0.3;type:point;castShadow:true" position="0.275 1.16 0.8" class="light"></a-entity>
          </a-entity>
          
        </a-entity>
    
    </a-scene>
    
`;

$(() => {
    $('body').html(html);
});