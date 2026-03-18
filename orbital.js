let scene,camera,renderer;

function init(){

scene=new THREE.Scene();

camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

renderer=new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("orbital-view").appendChild(renderer.domElement);

camera.position.z=5;

animate();

}

function loadOrbital(type){

const geometry=new THREE.SphereGeometry(1,32,32);

const material=new THREE.MeshBasicMaterial({
wireframe:true
});

const mesh=new THREE.Mesh(geometry,material);

scene.add(mesh);

}

function animate(){

requestAnimationFrame(animate);

renderer.render(scene,camera);

}

init();
