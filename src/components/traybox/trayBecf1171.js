/* #region  ตัวแปร */

import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import gsap from "gsap";
import "antd/dist/antd.css";
var controls, renderer, scene, camera;

var A = 200;
var B = 150;
var C = 50;
var D = 0.5;
var O = 1;

var edges;
var tween;

var side_A_back;
var side_lid_B_left;
var side_B_left;
var side_lid_B_right;
var side_B_right;
var side_dust_flap_lid_A_left;
var side_dust_flap_lid_A_right;
var side_lr_lid_A_top;
var side_lr_lid_A_top_left;
var side_lr_lid_A_top_right;
var side_lid_A_top;
var side_dust_flap_Top_left;
var side_dust_flap_Top_right;
var side_A_top;
var side_dust_flap_Bottom_left;
var side_dust_flap_Bottom_right;
var side_A_bottom;

var side_A_back_edges;
var side_lid_B_left_edges;
var side_B_left_edges;
var side_lid_B_right_edges;
var side_B_right_edges;
var side_dust_flap_lid_A_left_edges;
var side_dust_flap_lid_A_right_edges;
var side_lr_lid_A_top_edges;
var side_lr_lid_A_top_left_edges;
var side_lr_lid_A_top_right_edges;
var side_lid_A_top_edges;
var side_dust_flap_Top_left_edges;
var side_dust_flap_Top_right_edges;
var side_A_top_edges;
var side_dust_flap_Bottom_left_edges;
var side_dust_flap_Bottom_right_edges;
var side_A_bottom_edges;

var pivot_Back;
var pivot_lid_B_left;
var pivot_Left;
var pivot_lid_B_right;
var pivot_Right;
var pivot_dust_flap_lid_A_left;
var pivot_dust_flap_lid_A_right;
var pivot_lr_lid_A_top;
var pivot_lr_lid_A_top_left;
var pivot_lr_lid_A_top_right;
var pivot_group_A_top;
var pivot_dust_flap_Top_left;
var pivot_dust_flap_Top_right;
var pivot_Top;
var pivot_dust_flap_Bottom_left;
var pivot_dust_flap_Bottom_right;
var pivot_Bottom;
var pivot_All;

var pivot_Back_edges;
var pivot_lid_B_left_edges;
var pivot_Left_edges;
var pivot_lid_B_right_edges;
var pivot_Right_edges;
var pivot_dust_flap_lid_A_left_edges;
var pivot_dust_flap_lid_A_right_edges;
var pivot_lr_lid_A_top_edges;
var pivot_lr_lid_A_top_left_edges;
var pivot_lr_lid_A_top_right_edges;
var pivot_group_A_top_edges;
var pivot_dust_flap_Top_left_edges;
var pivot_dust_flap_Top_right_edges;
var pivot_Top_edges;
var pivot_dust_flap_Bottom_left_edges;
var pivot_dust_flap_Bottom_right_edges;
var pivot_Bottom_edges;
var pivot_All_edges;

/* #endregion */

/* #region  ฟังก์ชั่น */

/* #region  main */

const main = () => {
  init();
  animate();
};

/* #endregion */
/* #region  rotations */

/* #region  พับกล่อง */

const rotations1 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_group_A_top */
  tween = gsap.timeline();
  tween.to(pivot_group_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_right.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_left */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_right */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_right.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_lid_A_left */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_lid_A_right */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_right.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left.y = (Math.PI / 180) * 180),
  });
  /* #endregion */
  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right.y = -(Math.PI / 180) * 180),
  });
  /* #endregion */
  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_left */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_left.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_right */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_right.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_All */
  tween = gsap.timeline();
  tween.to(pivot_All.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_All.x = -Math.PI / 2),
  });
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Right_edges */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_group_A_top_edges */
  tween = gsap.timeline();
  tween.to(pivot_group_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top_edges.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_right_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_right_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_edges */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top_edges.x = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_lid_A_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_lid_A_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_right_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_Left_edges */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left_edges.y = (Math.PI / 180) * 180),
  });
  /* #endregion */
  /* #region  pivot_Right_edges */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right_edges.y = -(Math.PI / 180) * 180),
  });
  /* #endregion */
  /* #region  pivot_Bottom_edges */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_left_edges.y = (Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_right_edges.y = -(Math.PI / 180) * 90),
  });
  /* #endregion */
  /* #region  pivot_All_edges */
  tween = gsap.timeline();
  tween.to(pivot_All_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_All_edges.x = -Math.PI / 2),
  });
  /* #endregion */

  /* #endregion */
};

/* #endregion */
/* #region  กางกล่อง */

const rotations2 = () => {
  /* #region  จุดหมุน */

  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top.x = 0),
  });
  /* #endregion */
  /* #region  pivot_group_A_top */
  tween = gsap.timeline();
  tween.to(pivot_group_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top.x = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_left */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_right */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top.x = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_lid_A_left */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_A_right */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Left */
  tween = gsap.timeline();
  tween.to(pivot_Left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Right */
  tween = gsap.timeline();
  tween.to(pivot_Right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Bottom */
  tween = gsap.timeline();
  tween.to(pivot_Bottom.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom.x = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_left */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_left.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_right */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_right.y = 0),
  });
  /* #endregion */
  /* #region  pivot_All */
  tween = gsap.timeline();
  tween.to(pivot_All.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_All.x = 0),
  });
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Right_edges */
  tween = gsap.timeline();
  tween.to(pivot_Top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Top_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_group_A_top_edges */
  tween = gsap.timeline();
  tween.to(pivot_group_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_group_A_top_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lr_lid_A_top_right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Top_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Top_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Top_right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lr_lid_A_top_edges */
  tween = gsap.timeline();
  tween.to(pivot_lr_lid_A_top_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_lr_lid_A_top_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_lid_A_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_lid_A_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_lid_A_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_lid_A_right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Left_edges */
  tween = gsap.timeline();
  tween.to(pivot_Left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Right_edges */
  tween = gsap.timeline();
  tween.to(pivot_Right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_Right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_lid_B_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_lid_B_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_lid_B_right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_Bottom_edges */
  tween = gsap.timeline();
  tween.to(pivot_Bottom_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_Bottom_edges.x = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_left_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_left_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_left_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_dust_flap_Bottom_right_edges */
  tween = gsap.timeline();
  tween.to(pivot_dust_flap_Bottom_right_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    y: (pivot_dust_flap_Bottom_right_edges.y = 0),
  });
  /* #endregion */
  /* #region  pivot_All_edges */
  tween = gsap.timeline();
  tween.to(pivot_All_edges.rotation, {
    duration: 5,
    ease: "power4.in",
    x: (pivot_All_edges.x = 0),
  });
  /* #endregion */
  /* #endregion */
};

/* #endregion */

/* #endregion */
/* #region  updateSize */

const updateSize = (a, b, c, d, o) => {
  A = a;
  B = b;
  C = c;
  D = d;
  O = o;

  let initDiv = document.getElementById("webgl");
  let newDiv = document.createElement("div");
  newDiv.id = "webgl";

  initDiv.remove();
  document.getElementById("main").appendChild(newDiv);

  return main();
};

/* #endregion */

/* #endregion */

const init = () => {
  /* #region  Three-3D Renderer */

  /* #region  Scene */

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x404040);

  /* #endregion */
  /* #region  Camera */

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.position.z = 700;

  /* #endregion */
  /* #region  axesHelper */

  const axesHelper = new THREE.AxesHelper(700);
  scene.add(axesHelper);

  /* #endregion */
  /* #region  Material */

  const material = new THREE.MeshPhongMaterial({
    //   MeshBasicMaterial
    color: 0xffffff,
    side: THREE.DoubleSide,
    wireframe: false,
    opacity: O,
    transparent: true,
  });

  /* #endregion */
  /* #region  WebGL Render */

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("webgl").append(renderer.domElement);

  /* #endregion */
  /* #region  The mouse controls */

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minZoom = 0.5;
  controls.maxZoom = 12;
  controls.minDistance = 10;
  controls.maxDistance = 1000;
  controls.autoRotate = true;
  controls.autoRotateSpeed = -1.0;

  /* #endregion */
  /* #region  Spotlights */

  let light = new THREE.PointLight(0xffffff, 1);
  camera.add(light);
  scene.add(camera); //  add to scene only because the camera  has a child

  /* #endregion */
  /* #region  GridHelper */

  scene.add(new THREE.GridHelper(1000, 100));

  /* #endregion */

  /* #endregion */
  /* #region  Model */

  /* #region  lr_lid_A_left_right_shape */
  var lr_lid_A_left_right_shape = new THREE.Shape();
  lr_lid_A_left_right_shape.moveTo(0, 0);
  lr_lid_A_left_right_shape.lineTo((B * 0.067) | 0, C);
  lr_lid_A_left_right_shape.lineTo((B * 0.933) | 0, C);
  lr_lid_A_left_right_shape.lineTo(B, 0);

  var lr_lid_A_left_right = new THREE.ShapeGeometry(lr_lid_A_left_right_shape);
  /* #endregion */
  /* #region  lid_B_left_right_shape */
  var lid_B_left_right_shape = new THREE.Shape();
  lid_B_left_right_shape.moveTo(0, 0);
  lid_B_left_right_shape.lineTo(0, C);
  lid_B_left_right_shape.lineTo((B * 0.167) | 0, C);
  lid_B_left_right_shape.lineTo((B * 0.167) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.333) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.333) | 0, C);
  lid_B_left_right_shape.lineTo((B * 0.667) | 0, C);
  lid_B_left_right_shape.lineTo((B * 0.667) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.833) | 0, (C * 1.1) | 0);
  lid_B_left_right_shape.lineTo((B * 0.833) | 0, C);
  lid_B_left_right_shape.lineTo(B, C);
  lid_B_left_right_shape.lineTo(B, 0);

  var lid_B_left_right = new THREE.ShapeGeometry(lid_B_left_right_shape);
  /* #endregion */
  /* #region  dust_flap_shape */
  var dust_flap_shape = new THREE.Shape();
  dust_flap_shape.moveTo(0, 0);
  dust_flap_shape.lineTo(0, C);
  dust_flap_shape.lineTo((B * 0.333) | 0, C);
  dust_flap_shape.lineTo((B * 0.333) | 0, 0);

  var dust_flap = new THREE.ShapeGeometry(dust_flap_shape);
  /* #endregion */
  /* #region  dust_flap_lid_A_shape */
  var dust_flap_lid_A_shape = new THREE.Shape();
  dust_flap_lid_A_shape.moveTo(0, 0);
  dust_flap_lid_A_shape.lineTo(0, C);
  dust_flap_lid_A_shape.bezierCurveTo(
    0, // X1
    C, // Y1
    (B * 0.333) | 0, // X2
    C, // Y2
    (B * 0.333) | 0, // X3
    0 // Y3
  );
  dust_flap_lid_A_shape.lineTo((B * 0.333) | 0, 0);

  var dust_flap_lid = new THREE.ShapeGeometry(dust_flap_lid_A_shape);
  /* #endregion */
  /* #region  รูปทรงมาตราฐาน */
  var plane_A_side = new THREE.BoxGeometry(A, B, D); // ด้าน A | ยาว x กว้าง | ความหนา
  var plane_B_side = new THREE.BoxGeometry(C, B, D); // ด้าน B | สูง x กว้าง | ความหนา
  var plane_C_side = new THREE.BoxGeometry(A, C, D); //       | ยาว x สูง | ความหนา
  /* #endregion */

  /* #endregion */
  /* #region  ฉาก */

  /* #region  side_A_back */
  side_A_back = new THREE.Mesh(plane_A_side, material);
  side_A_back.position.x = A / 2;
  side_A_back.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_left */
  side_lid_B_left = new THREE.Mesh(lid_B_left_right, material);
  side_lid_B_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  side_B_left = new THREE.Mesh(plane_B_side, material);
  side_B_left.position.set(-C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_B_right */
  side_lid_B_right = new THREE.Mesh(lid_B_left_right, material);
  side_lid_B_right.rotation.set(0, (Math.PI / 180) * 180, (Math.PI / 180) * 90);

  side_B_right = new THREE.Mesh(plane_B_side, material);
  side_B_right.position.set(C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_lr_lid_A_top */
  side_dust_flap_lid_A_left = new THREE.Mesh(dust_flap_lid, material);
  side_dust_flap_lid_A_left.rotation.set(0, (Math.PI / 180) * 180, 0);

  side_dust_flap_lid_A_right = new THREE.Mesh(dust_flap_lid, material);

  side_lr_lid_A_top = new THREE.Mesh(plane_C_side, material);
  side_lr_lid_A_top.position.x = A / 2;
  side_lr_lid_A_top.position.y = C / 2;
  /* #endregion */
  /* #region  side_lid_A_top */
  side_lr_lid_A_top_left = new THREE.Mesh(lr_lid_A_left_right, material);
  side_lr_lid_A_top_left.rotation.set(0, 0, (Math.PI / 180) * 90);

  side_lr_lid_A_top_right = new THREE.Mesh(lr_lid_A_left_right, material);
  side_lr_lid_A_top_right.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  side_lid_A_top = new THREE.Mesh(plane_A_side, material);
  side_lid_A_top.position.x = A / 2;
  side_lid_A_top.position.y = B / 2;
  /* #endregion */
  /* #region  side_A_top */
  side_dust_flap_Top_left = new THREE.Mesh(dust_flap, material);
  side_dust_flap_Top_left.rotation.set(0, (Math.PI / 180) * 180, 0);

  side_dust_flap_Top_right = new THREE.Mesh(dust_flap, material);

  side_A_top = new THREE.Mesh(plane_C_side, material);
  side_A_top.position.set(A / 2, C / 2, 0);
  /* #endregion */
  /* #region  side_A_bottom */
  side_dust_flap_Bottom_left = new THREE.Mesh(dust_flap, material);
  side_dust_flap_Bottom_left.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  side_dust_flap_Bottom_right = new THREE.Mesh(dust_flap, material);
  side_dust_flap_Bottom_right.rotation.set((Math.PI / 180) * 180, 0, 0);

  side_A_bottom = new THREE.Mesh(plane_C_side, material);
  side_A_bottom.position.set(A / 2, -C / 2, 0);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน */

  /* #region  pivot_Back */

  pivot_Back = new THREE.Object3D();
  pivot_Back.add(side_A_back);

  /* #endregion */
  /* #region  pivot_Left */
  pivot_lid_B_left = new THREE.Object3D();
  pivot_lid_B_left.add(side_lid_B_left);
  pivot_lid_B_left.position.set(-C, 0, 0);

  pivot_Left = new THREE.Object3D();
  pivot_Left.add(side_B_left, pivot_lid_B_left);
  /* #endregion */
  /* #region  pivot_Right */
  pivot_lid_B_right = new THREE.Object3D();
  pivot_lid_B_right.add(side_lid_B_right);
  pivot_lid_B_right.position.set(C, 0, 0);

  pivot_Right = new THREE.Object3D();
  pivot_Right.add(side_B_right, pivot_lid_B_right);
  pivot_Right.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_Top */
  pivot_dust_flap_lid_A_left = new THREE.Object3D();
  pivot_dust_flap_lid_A_left.add(side_dust_flap_lid_A_left);

  pivot_dust_flap_lid_A_right = new THREE.Object3D();
  pivot_dust_flap_lid_A_right.add(side_dust_flap_lid_A_right);
  pivot_dust_flap_lid_A_right.position.set(A, 0, 0);

  pivot_lr_lid_A_top = new THREE.Object3D();
  pivot_lr_lid_A_top.add(
    side_lr_lid_A_top,
    pivot_dust_flap_lid_A_left,
    pivot_dust_flap_lid_A_right
  );
  pivot_lr_lid_A_top.position.set(0, B, 0);

  pivot_lr_lid_A_top_left = new THREE.Object3D();
  pivot_lr_lid_A_top_left.add(side_lr_lid_A_top_left);

  pivot_lr_lid_A_top_right = new THREE.Object3D();
  pivot_lr_lid_A_top_right.add(side_lr_lid_A_top_right);
  pivot_lr_lid_A_top_right.position.set(A, 0, 0);

  pivot_group_A_top = new THREE.Object3D();
  pivot_group_A_top.add(
    side_lid_A_top,
    pivot_lr_lid_A_top,
    pivot_lr_lid_A_top_left,
    pivot_lr_lid_A_top_right
  );
  pivot_group_A_top.position.set(0, C, 0);

  pivot_dust_flap_Top_left = new THREE.Object3D();
  pivot_dust_flap_Top_left.add(side_dust_flap_Top_left);

  pivot_dust_flap_Top_right = new THREE.Object3D();
  pivot_dust_flap_Top_right.add(side_dust_flap_Top_right);
  pivot_dust_flap_Top_right.position.set(A, 0, 0);

  pivot_Top = new THREE.Object3D();
  pivot_Top.add(
    side_A_top,
    pivot_dust_flap_Top_left,
    pivot_dust_flap_Top_right,
    pivot_group_A_top
  );
  pivot_Top.position.set(0, B, 0);
  /* #endregion */
  /* #region  pivot_Bottom */
  pivot_dust_flap_Bottom_left = new THREE.Object3D();
  pivot_dust_flap_Bottom_left.add(side_dust_flap_Bottom_left);

  pivot_dust_flap_Bottom_right = new THREE.Object3D();
  pivot_dust_flap_Bottom_right.add(side_dust_flap_Bottom_right);
  pivot_dust_flap_Bottom_right.position.set(A, 0, 0);

  pivot_Bottom = new THREE.Object3D();
  pivot_Bottom.add(
    side_A_bottom,
    pivot_dust_flap_Bottom_left,
    pivot_dust_flap_Bottom_right
  );
  /* #endregion */
  /* #region  pivot_All */
  pivot_All = new THREE.Object3D();
  pivot_All.add(pivot_Back, pivot_Left, pivot_Right, pivot_Top, pivot_Bottom);
  scene.add(pivot_All);
  /* #endregion */

  /* #endregion */
  /* #region  ฉาก - เส้น */

  /* #region  side_A_back_edges */
  edges = new THREE.EdgesGeometry(plane_A_side);
  side_A_back_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_back_edges.position.x = A / 2;
  side_A_back_edges.position.y = B / 2;
  /* #endregion */
  /* #region  side_B_left_edges */
  edges = new THREE.EdgesGeometry(lid_B_left_right);
  side_lid_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_left_edges.position.set(-C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_B_right_edges */
  edges = new THREE.EdgesGeometry(lid_B_left_right);
  side_lid_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_B_right_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(plane_B_side);
  side_B_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_B_right_edges.position.set(C / 2, B / 2, 0);
  /* #endregion */
  /* #region  side_lr_lid_A_top_edges */
  edges = new THREE.EdgesGeometry(dust_flap_lid);
  side_dust_flap_lid_A_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_dust_flap_lid_A_left_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(dust_flap_lid);
  side_dust_flap_lid_A_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_C_side);
  side_lr_lid_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_lid_A_top_edges.position.x = A / 2;
  side_lr_lid_A_top_edges.position.y = C / 2;
  /* #endregion */
  /* #region  side_lid_A_top_edges */
  edges = new THREE.EdgesGeometry(lr_lid_A_left_right);
  side_lr_lid_A_top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_lid_A_top_left_edges.rotation.set(0, 0, (Math.PI / 180) * 90);

  edges = new THREE.EdgesGeometry(lr_lid_A_left_right);
  side_lr_lid_A_top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lr_lid_A_top_right_edges.rotation.set(
    0,
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 90
  );

  edges = new THREE.EdgesGeometry(plane_A_side);
  side_lid_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_lid_A_top_edges.position.x = A / 2;
  side_lid_A_top_edges.position.y = B / 2;
  /* #endregion */
  /* #region  side_A_top_edges */
  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_Top_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_dust_flap_Top_left_edges.rotation.set(0, (Math.PI / 180) * 180, 0);

  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_Top_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );

  edges = new THREE.EdgesGeometry(plane_C_side);
  side_A_top_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_top_edges.position.set(A / 2, C / 2, 0);
  /* #endregion */
  /* #region  side_B_bottom_edges */
  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_Bottom_left_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_dust_flap_Bottom_left_edges.rotation.set(
    (Math.PI / 180) * 180,
    (Math.PI / 180) * 180,
    0
  );

  edges = new THREE.EdgesGeometry(dust_flap);
  side_dust_flap_Bottom_right_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_dust_flap_Bottom_right_edges.rotation.set((Math.PI / 180) * 180, 0, 0);

  edges = new THREE.EdgesGeometry(plane_C_side);
  side_A_bottom_edges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: "#E7E7E7" })
  );
  side_A_bottom_edges.position.set(A / 2, -C / 2, 0);
  /* #endregion */

  /* #endregion */
  /* #region  จุดหมุน - เส้น */

  /* #region  pivot_Back_edges */
  pivot_Back_edges = new THREE.Object3D();
  pivot_Back_edges.add(side_A_back_edges);
  /* #endregion */
  /* #region  pivot_Left_edges */
  pivot_lid_B_left_edges = new THREE.Object3D();
  pivot_lid_B_left_edges.add(side_lid_B_left_edges);
  pivot_lid_B_left_edges.position.set(-C, 0, 0);

  pivot_Left_edges = new THREE.Object3D();
  pivot_Left_edges.add(side_B_left_edges, pivot_lid_B_left_edges);
  /* #endregion */
  /* #region  pivot_Right_edges */
  pivot_lid_B_right_edges = new THREE.Object3D();
  pivot_lid_B_right_edges.add(side_lid_B_right_edges);
  pivot_lid_B_right_edges.position.set(C, 0, 0);

  pivot_Right_edges = new THREE.Object3D();
  pivot_Right_edges.add(side_B_right_edges, pivot_lid_B_right_edges);
  pivot_Right_edges.position.set(A, 0, 0);
  /* #endregion */
  /* #region  pivot_Top_edges */
  pivot_dust_flap_lid_A_left_edges = new THREE.Object3D();
  pivot_dust_flap_lid_A_left_edges.add(side_dust_flap_lid_A_left_edges);

  pivot_dust_flap_lid_A_right_edges = new THREE.Object3D();
  pivot_dust_flap_lid_A_right_edges.add(side_dust_flap_lid_A_right_edges);
  pivot_dust_flap_lid_A_right_edges.position.set(A, 0, 0);

  pivot_lr_lid_A_top_edges = new THREE.Object3D();
  pivot_lr_lid_A_top_edges.add(
    side_lr_lid_A_top_edges,
    pivot_dust_flap_lid_A_left_edges,
    pivot_dust_flap_lid_A_right_edges
  );
  pivot_lr_lid_A_top_edges.position.set(0, B, 0);

  pivot_lr_lid_A_top_left_edges = new THREE.Object3D();
  pivot_lr_lid_A_top_left_edges.add(side_lr_lid_A_top_left_edges);

  pivot_lr_lid_A_top_right_edges = new THREE.Object3D();
  pivot_lr_lid_A_top_right_edges.add(side_lr_lid_A_top_right_edges);
  pivot_lr_lid_A_top_right_edges.position.set(A, 0, 0);

  pivot_group_A_top_edges = new THREE.Object3D();
  pivot_group_A_top_edges.add(
    side_lid_A_top_edges,
    pivot_lr_lid_A_top_edges,
    pivot_lr_lid_A_top_left_edges,
    pivot_lr_lid_A_top_right_edges
  );
  pivot_group_A_top_edges.position.set(0, C, 0);

  pivot_dust_flap_Top_left_edges = new THREE.Object3D();
  pivot_dust_flap_Top_left_edges.add(side_dust_flap_Top_left_edges);

  pivot_dust_flap_Top_right_edges = new THREE.Object3D();
  pivot_dust_flap_Top_right_edges.add(side_dust_flap_Top_right_edges);
  pivot_dust_flap_Top_right_edges.position.set(A, 0, 0);

  pivot_Top_edges = new THREE.Object3D();
  pivot_Top_edges.add(
    side_A_top_edges,
    pivot_dust_flap_Top_left_edges,
    pivot_dust_flap_Top_right_edges,
    pivot_group_A_top_edges
  );
  pivot_Top_edges.position.set(0, B, 0);
  /* #endregion */
  /* #region  pivot_Bottom_edges */
  pivot_dust_flap_Bottom_left_edges = new THREE.Object3D();
  pivot_dust_flap_Bottom_left_edges.add(side_dust_flap_Bottom_left_edges);

  pivot_dust_flap_Bottom_right_edges = new THREE.Object3D();
  pivot_dust_flap_Bottom_right_edges.add(side_dust_flap_Bottom_right_edges);
  pivot_dust_flap_Bottom_right_edges.position.set(A, 0, 0);

  pivot_Bottom_edges = new THREE.Object3D();
  pivot_Bottom_edges.add(
    side_A_bottom_edges,
    pivot_dust_flap_Bottom_left_edges,
    pivot_dust_flap_Bottom_right_edges
  );
  /* #endregion */
  /* #region  pivot_All_edges */
  pivot_All_edges = new THREE.Object3D();
  pivot_All_edges.add(
    pivot_Back_edges,
    pivot_Left_edges,
    pivot_Right_edges,
    pivot_Top_edges,
    pivot_Bottom_edges
  );
  scene.add(pivot_All_edges);

  /* #endregion */

  /* #endregion */
};

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

export default {
  main,
  rotations1,
  rotations2,
  updateSize,
};
