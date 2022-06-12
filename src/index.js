import * as THREE from 'three';
import { Sky } from './jsm/objects/Sky.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import WebGL from './jsm/capabilities/WebGL.js'

let container, stats;
let camera, scene, renderer;
let mesh, controls, sun;

if ( WebGL.isWebGLAvailable() ) {
    init();
    animate();
} else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'container' ).appendChild( warning );
}

function init() {
    container = document.getElementById('container');
    //render settings
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    //scene settng
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    CreatePlane();
    CreateCube();
    AddSky();
    //DrawLing();
    AddLight();
    CreateControl();

}

function CreatePlane(){
    const geometry = new THREE.PlaneGeometry( 1000, 1000);
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, material );
    scene.add( plane );
}
function CreateCube() {
    const geometry = new THREE.BoxGeometry( 30, 30, 30 );
    const material = new THREE.MeshStandardMaterial( {roughness: 0,color: 0xbffffe, } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
}

function AddLight(){
    const lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    scene.add( lights[ 0 ] );
    scene.add( lights[ 1 ] );
    scene.add( lights[ 2 ] );
}

function DrawLing(){
    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    const points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( geometry, material );
    scene.add( line );
}

function CreatePointerLockControls() {
    controls = new PointerLockControls(camera, renderer.domElement);
}

function CreateControl() {
    controls = new OrbitControls(camera, renderer.domElement);
    //controls.maxPolarAngle = Math.PI * 0.495;
    controls.target.set(0, 2, 0);
    controls.enableDamping = true;

    //controls.autoRotate = true;
    //controls.autoRotateSpeed = 100;
    controls.minDistance = 40.0;
    controls.maxDistance = 200.0;
    controls.update();
}

function CreateOrbitControl() {
    controls = new OrbitControls(camera, renderer.domElement);
    //controls.maxPolarAngle = Math.PI * 0.495;
    controls.target.set(0, 30, 0);
    controls.enableDamping = true;

    //controls.autoRotate = true;
    controls.minDistance = 40.0;
    controls.maxDistance = 200.0;
    controls.update();
}

function AddSky() {
    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;

    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    const parameters = {
        elevation: 0.2,
        azimuth: -110
    };

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    sun = new THREE.Vector3();
    function updateSun() {

        const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
        const theta = THREE.MathUtils.degToRad(parameters.azimuth);

        sun.setFromSphericalCoords(1, phi, theta);

        sky.material.uniforms['sunPosition'].value.copy(sun);

        scene.environment = pmremGenerator.fromScene(sky).texture;

    }

    updateSun();
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {

    requestAnimationFrame(animate);
    render();
    //stats.update(); // Gui Update
}

function render() {

    //onst time = performance.now() * 0.001;
    //var contnum = 1;
    //mesh.position.y = Math.sin( time ) * 20 + 5;
    //mesh.rotation.x = time * 0.5;
    //mesh.rotation.z = time * 0.51;
    //controls.target.set(contnum , 30, 0);
    //contnum += time * 0.5;

    //console.log(camera.position.x)
    //camera.position.z += time * 0.5;
    controls.update();
    renderer.render(scene, camera);
}