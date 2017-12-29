import ThreeBSP from 'three-js-csg';

const THREE = AFRAME.THREE;
const BSP = ThreeBSP(THREE);

AFRAME.registerComponent('csg-meshs', {

    schema: {
        union: {
            type: 'selectorAll',
        },
        subtract: {
            type: 'selectorAll',
        },
        intersect: {
            type: 'selectorAll',
        },
    },

    getBSPs(o, list = []) {
        if (Array.isArray(o)) {
            o.forEach(c => this.getBSPs(c, list));
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
        const keys = Object.keys(this.data).filter(key => this.data[key]);
        const sets = {};
        keys.forEach(key => sets[key] = this.getBSPs(this.data[key].map(el => el.object3D)));
        if (this.changed) {
            source.forEach(a => {
                let x = a;
                keys.forEach(key => sets[key].forEach(b => x = x[key](b)));
                a.mesh.geometryOriginal = a.mesh.geometry;
                a.mesh.geometry = x.toGeometry();
            });
        }
    },

});