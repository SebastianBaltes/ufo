webpackJsonp([0],{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(164);
module.exports = __webpack_require__(366);


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(368);

__webpack_require__(370);

__webpack_require__(374);

__webpack_require__(375);

__webpack_require__(376);

__webpack_require__(377);

__webpack_require__(378);

__webpack_require__(379);

__webpack_require__(458);

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
            
        <a-entity id="myCameraPosition" position="1 -0.5 1" >
          <a-entity camera="userHeight: 1.7" look-controls="standing: false"></a-entity>
        </a-entity>

        <a-sphere id="ufo" 
             radius="0.3" 
             position="-50 -10 -100" 
             scale="1 0.18 0.18" 
             geometry="radius:0.18"
             rotation="0 0 -90" 
             material="sphericalEnvMap:#sky;metalness:1;roughness:0;emissiveIntensity:0.3;color:#ffffff;emissive:#020202">

            <a-animation attribute="rotation" dur="20000" to="0 0 -2000" easing="ease-in-expo">            
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

        </a-sphere> 
         
        <a-sky src="#sky" rotation="14 -207 -12"></a-sky>
         
        <a-entity id="room" >

          <a-entity light="intensity:0.8;type:ambient;color:#ccc" id="lightAmbient" position="0 0.138 -0.086"></a-entity>

          <a-box position="0 0 0" width="5" depth="3" height="0.2" material="src: #linoleum; repeat: 2 2" id="floor" ></a-box>
   
          <a-box position="0 1 -1.5" width="5" depth="0.2" height="2" material="src: #rauhfaser; repeat: 15 10" id="windowWall" csg-meshs="subtract: .windowGroup .hole"></a-box>
         
          <a-box position="0 2 0" width="3" depth="3" height="0.2" material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="1 2 0" width="5" depth="3" height="0.2" rotation="0 0 -30" material="src: #rauhfaser; repeat: 15 10"></a-box>
          
          <a-box position="0 1 1.5" width="5" depth="0.2" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="-1.5 1 0" width="0.2" depth="3" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
          <a-box position="2.5 1 0" width="0.2" depth="3" height="2"  material="src: #rauhfaser; repeat: 15 10"></a-box>
         
          <a-entity position="1 0.145 1.035" scale="0.00015 0.00015 0.00015" obj-model="obj: #bedObj" id="bed"></a-entity>
          <a-entity position="-0.869 0.1 1.446" scale="0.7 0.7 0.7" collada-model="#doorDae" rotation="0 180 0" id="door"></a-entity>

          <a-entity position="-0.386 0 -1.5" class="windowGroup">
              <a-box position="0.28 1.093 0" width="0.5" depth="1" height="0.5" class="hole" visible="false" scale="1 1.8 0.5"></a-box>
              <a-entity position="0.279 1.084 0.074" scale="1.2 1.2 1.2" rotation="0 270 0" collada-model="#window" class="window"></a-entity>          
              <a-entity position="0 0.198 0.146" scale="0.006 0.006 0.006"  obj-model="obj: #radiatorObj; mtl: #radiatorMtl" class="radiator"></a-entity>
              <a-entity light="intensity:0.3;castShadow:true;decay:0.5;distance:50;type:point" position="0.275 1.16 0.8" class="light"></a-entity>
          </a-entity>

          <a-entity position="0.623 0 -1.5" class="windowGroup">
              <a-box position="0.28 1.093 0" width="0.5" depth="1" height="0.5" class="hole" visible="false" scale="1 1.8 0.5"></a-box>
              <a-entity position="0.279 1.084 0.074" scale="1.2 1.2 1.2" rotation="0 270 0" collada-model="#window" class="window"></a-entity>          
              <a-entity position="0 0.198 0.146" scale="0.006 0.006 0.006"  obj-model="obj: #radiatorObj; mtl: #radiatorMtl" class="radiator"></a-entity>
              <a-entity light="intensity:0.3;castShadow:true;decay:0.5;distance:50;type:point" position="0.275 1.16 0.8" class="light"></a-entity>
          </a-entity>
          
        </a-entity>
    
    </a-scene>
    
`;

$(() => {
    $('body').html(html);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(367)))

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _threeJsCsg = __webpack_require__(459);

var _threeJsCsg2 = _interopRequireDefault(_threeJsCsg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const THREE = AFRAME.THREE;
const BSP = (0, _threeJsCsg2.default)(THREE);

AFRAME.registerComponent('csg-meshs', {

    schema: {
        union: {
            type: 'selectorAll'
        },
        subtract: {
            type: 'selectorAll'
        },
        intersect: {
            type: 'selectorAll'
        }
    },

    getBSPs(o, list = []) {
        if (Array.isArray(o)) {
            o.forEach(c => {
                return this.getBSPs(c, list);
            });
            return list;
        }
        if (o.geometry) {
            let geometry = o.geometrySimple || o.geometryOriginal || o.geometry;
            if (geometry instanceof THREE.BufferGeometry) {
                geometry = o.geometrySimple = new THREE.Geometry().fromBufferGeometry(geometry);
            }
            let changed = !(o.bsp && o.bsp.matrixWorld.equals(o.matrixWorld));
            if (changed) {
                this.changed = true;
                const matrix = o.matrixWorld.clone();
                o.bsp = new BSP(geometry, matrix);
                o.bsp.mesh = o;
                o.bsp.matrixWorld = o.matrixWorld.clone();
            }
            list.push(o.bsp);
            return list;
        }
        if (o.object3D) {
            this.getBSPs(o.object3D, list);
            return list;
        }
        if (o.children) {
            this.getBSPs(o.children, list);
            return list;
        }
        return list;
    },

    tick() {
        this.changed = false;
        const source = this.getBSPs(this.el.object3D);
        const keys = Object.keys(this.data).filter(key => {
            return this.data[key];
        });
        const sets = {};
        keys.forEach(key => {
            return sets[key] = this.getBSPs(this.data[key].map(el => {
                return el.object3D;
            }));
        });
        if (this.changed) {
            source.forEach(a => {
                let x = a;
                keys.forEach(key => {
                    return sets[key].forEach(b => {
                        return x = x[key](b);
                    });
                });
                a.mesh.geometryOriginal = a.mesh.geometry;
                a.mesh.geometry = x.toGeometry();
            });
        }
    }

});

/***/ })

},[163]);
//# sourceMappingURL=app.bundle.js.map