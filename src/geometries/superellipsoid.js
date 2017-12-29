AFRAME.registerGeometry('superellipsoid', {

    schema: {
        a: {default: 1, min: 0},
        b: {default: 1, min: 0},
        n: {default: 2.5, min: 0},
        widthSegments: {default: 12, min: 1},
        heightSegments: {default: 12, min: 1},
        phiStart: {default: 0, min: 0, max: 2*Math.PI},
        phiLength: {default: 2*Math.PI, min: 0, max: 2*Math.PI},
    },

    init: function (data) {
        const steps = 180/data.heightSegments;
        const exp = 2 / data.n;
        const points = [];
        for ( let d = 0; d <= 180; d+=steps ) {
            const t = (d<90 ? d : 180-d) * Math.PI/180;
            const x = data.a * Math.pow(Math.cos(t),exp) * (d<90 ? -1 : +1);
            const y = data.b * Math.pow(Math.sin(t),exp);
            points.push( new THREE.Vector2(y,x) );
        }
        this.geometry = new THREE.LatheGeometry(points,data.widthSegments,data.phiStart,data.phiLength);
    }

});