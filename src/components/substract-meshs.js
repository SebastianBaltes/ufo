import ThreeBSP from 'three-js-csg';
const THREE = AFRAME.THREE;
const BSP = ThreeBSP(THREE);
console.log('BSP',BSP);

AFRAME.registerComponent('substract-meshs', {
    schema: {
        type: 'selectorAll',
    },
    getBSPs(o,list=[]) {
        if (Array.isArray(o)) {
            o.forEach(c=>this.getBSPs(c,list));
            return list;
        }
        if (o.geometry) {
            if (!o.geometrySimple) {
                o.geometrySimple = new THREE.Geometry().fromBufferGeometry(o.geometry);
            }
            o.updateMatrixWorld();
            const geometry = o.geometrySimple;
            const matrix = o.matrixWorld.clone();
            o.bsp = new BSP(geometry,matrix);
            o.bsp.mesh = o;
            o.bsp.updateCounter = this.updateCounter;
            list.push(o.bsp);
            return list;
        }
        if (o.object3D) {
            this.getBSPs(o.object3D,list);
            return list;
        }
        if (o.children) {
            this.getBSPs(o.children,list);
            return list;
        }
        return list;
    },
    init() {
        this.idsHashs = {};
    },
    tick() {
        const aBsps = this.getBSPs(this.el.object3D);
        const bBsps = this.getBSPs(this.data.map(el=>el.object3D));
        aBsps.forEach(a=>{
            let x = a;
            bBsps.forEach(b=>x = x.subtract(b));
            const mesh = x.toMesh();
            a.mesh.geometry = mesh.geometry;
        });
    },
});