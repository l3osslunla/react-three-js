import * as THREE from 'three';

import { material } from '../../../.modules/material';

import {
  getPlaneASideShape,
  getPlaneABackSideShape,
  getPlaneBSide,
  getPlaneBBackSide,
  getPlaneATopShape,
  getPlaneABackTopShape,
  getPlaneBTop,
  getPlaneBTopLeftShape,
  getPlaneABottomDShape,
  getPlaneAFrontBottomDShape,
  getPlaneABottomSideShape,
  getPlaneABottomFrontSideShape,
  getPlaneBHalfBottomShape,
  getPlaneBHalfBottomRightShape,
  getPlaneBHalfDBottomShape,
  getPlaneBHalfDBottomRightShape,
  getGlueLid,
  getGlueTop,
  getGlueCenter,
  getGlueCenterLid,
  getGlueBottom,
  getPlaneBBottomShape,
  getPlaneBBottomRightShape,
  getPlaneABottomLeftRightSideShape,
  getPlaneABottomLeftSideShape,
  getTube,
} from './shoppingBagsModel';
import { foldBox } from './shoppingBagAnim';

export const shoppingBagsModel = (A, B, C, R, O, G, animate, materialColor) => {
  const D = C <= 300 ? 30 : 40;

  const sideATop = new THREE.Mesh(
    getPlaneATopShape(A, D, R),
    material(O, materialColor)
  );
  sideATop.castShadow = true;

  const sideABackTop = new THREE.Mesh(
    getPlaneABackTopShape(A, D, R),
    material(O, materialColor)
  );
  sideABackTop.castShadow = true;
  sideABackTop.rotation.y = Math.PI;

  const sideAFront = new THREE.Mesh(
    getPlaneASideShape(A, B, C, D, R),
    material(O, materialColor)
  );
  sideAFront.castShadow = true;

  const sideABack = new THREE.Mesh(
    getPlaneABackSideShape(A, B, C, D, R),
    material(O, materialColor)
  );
  sideABack.castShadow = true;
  sideABack.rotation.y = Math.PI;

  const sideABottomD = new THREE.Mesh(
    getPlaneABottomDShape(A, B),
    material(O, materialColor)
  );
  sideABottomD.castShadow = true;

  const sideAFrontBottomD = new THREE.Mesh(
    getPlaneAFrontBottomDShape(A, B),
    material(O, materialColor)
  );
  sideAFrontBottomD.castShadow = true;
  sideAFrontBottomD.rotation.x = Math.PI;

  const sideABottom = new THREE.Mesh(
    getPlaneABottomSideShape(A, B),
    material(O, materialColor)
  );
  sideABottom.castShadow = true;

  const sideAFrontBottom = new THREE.Mesh(
    getPlaneABottomFrontSideShape(A, B),
    material(O, materialColor)
  );
  sideAFrontBottom.castShadow = true;
  sideAFrontBottom.rotation.x = Math.PI;

  const sideABottomLeftRight = new THREE.Mesh(
    getPlaneABottomLeftRightSideShape(B),
    material(O, materialColor)
  );
  sideABottomLeftRight.castShadow = true;

  const sideABottomLeft = new THREE.Mesh(
    getPlaneABottomLeftSideShape(B),
    material(O, materialColor)
  );
  sideABottomLeft.castShadow = true;
  sideABottomLeft.rotation.y = Math.PI;

  const sideBTop = new THREE.Mesh(
    getPlaneBTop(B, D),
    material(O, materialColor)
  );
  sideBTop.castShadow = true;

  const sideBTopLeft = new THREE.Mesh(
    getPlaneBTopLeftShape(B, D),
    material(O, materialColor)
  );
  sideBTopLeft.castShadow = true;
  sideBTopLeft.rotation.y = Math.PI;

  const sideBLeftL = new THREE.Mesh(
    getPlaneBBackSide(B, C),
    material(O, materialColor)
  );
  sideBLeftL.castShadow = true;
  sideBLeftL.rotation.y = Math.PI;

  const sideBRightL = new THREE.Mesh(
    getPlaneBSide(B, C),
    material(O, materialColor)
  );
  sideBRightL.castShadow = true;

  const sideBRightR = new THREE.Mesh(
    getPlaneBSide(B, C),
    material(O, materialColor)
  );
  sideBRightR.castShadow = true;

  const sideBHalfBottom = new THREE.Mesh(
    getPlaneBHalfBottomShape(B),
    material(O, materialColor)
  );
  sideBHalfBottom.castShadow = true;

  const sideBHalfBottomRight = new THREE.Mesh(
    getPlaneBHalfBottomRightShape(B),
    material(O, materialColor)
  );
  sideBHalfBottomRight.castShadow = true;
  sideBHalfBottomRight.rotation.y = Math.PI;

  const sideBHalfDBottom = new THREE.Mesh(
    getPlaneBHalfDBottomShape(B),
    material(O, materialColor)
  );
  sideBHalfDBottom.castShadow = true;

  const sideBHalfDBottomRight = new THREE.Mesh(
    getPlaneBHalfDBottomRightShape(B),
    material(O, materialColor)
  );
  sideBHalfDBottomRight.castShadow = true;
  sideBHalfDBottomRight.rotation.y = Math.PI;

  const sideBBottom = new THREE.Mesh(
    getPlaneBBottomShape(B),
    material(O, materialColor)
  );
  sideBBottom.castShadow = true;

  const sideBBottomRight = new THREE.Mesh(
    getPlaneBBottomRightShape(B),
    material(O, materialColor)
  );
  sideBBottomRight.castShadow = true;
  sideBBottomRight.rotation.x = Math.PI;

  const sideGlueTop = new THREE.Mesh(
    getGlueTop(D, G),
    material(O, materialColor)
  );
  sideGlueTop.castShadow = true;
  sideGlueTop.rotation.y = Math.PI;

  const sideGlueLid = new THREE.Mesh(
    getGlueLid(B, C, G),
    material(O, materialColor)
  );
  sideGlueLid.castShadow = true;
  sideGlueLid.rotation.y = Math.PI;

  const sideGlueCenter = new THREE.Mesh(
    getGlueCenter(B, G),
    material(O, materialColor)
  );
  sideGlueCenter.castShadow = true;
  sideGlueCenter.rotation.y = Math.PI;

  const sideGlueCenterLid = new THREE.Mesh(
    getGlueCenterLid(G),
    material(O, materialColor)
  );
  sideGlueCenterLid.castShadow = true;

  const sideGlueBottom = new THREE.Mesh(
    getGlueBottom(B, G),
    material(O, materialColor)
  );
  sideGlueBottom.castShadow = true;
  sideGlueBottom.rotation.y = Math.PI;

  const rope = new THREE.Mesh(
    getTube(A, B, C, D, R),
    material(O, materialColor)
  );
  rope.castShadow = true;

  let edges = new THREE.EdgesGeometry(getPlaneATopShape(A, D, R));
  const sideATopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneASideShape(A, B, C, D, R));
  const sideAFrontEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABackSideShape(A, B, C, D, R));
  const sideABackEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABackEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneABottomDShape(A, B));
  const sideABottomDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneAFrontBottomDShape(A, B));
  const sideAFrontBottomDEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideAFrontBottomDEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneABottomSideShape(A, B));
  const sideABottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABottomFrontSideShape(A, B));
  const sideAFrontBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideAFrontBottomEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneABottomLeftRightSideShape(B));
  const sideABottomLeftRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneABottomLeftSideShape(B));
  const sideABottomLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideABottomLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBTop(B, D));
  const sideBTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBTopLeftShape(B, D));
  const sideBTopLeftEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBTopLeftEdges.castShadow = true;
  sideBTopLeftEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBBackSide(B, C));
  const sideBLeftLEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBLeftLEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBRightLEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBSide(B, C));
  const sideBRightREdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBHalfBottomShape(B));
  const sideBHalfBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBHalfBottomRightShape(B));
  const sideBHalfBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBHalfBottomRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBHalfDBottomShape(B));
  const sideBHalfDBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBHalfDBottomRightShape(B));
  const sideBHalfDBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBHalfDBottomRightEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getPlaneBBottomShape(B));
  const sideBBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getPlaneBBottomRightShape(B));
  const sideBBottomRightEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideBBottomRightEdges.rotation.x = Math.PI;

  edges = new THREE.EdgesGeometry(getGlueTop(D, G));
  const sideGlueTopEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueTopEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getGlueLid(B, C, G));
  const sideGlueLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueLidEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getGlueCenter(B, G));
  const sideGlueCenterEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueCenterEdges.rotation.y = Math.PI;

  edges = new THREE.EdgesGeometry(getGlueCenterLid(G));
  const sideGlueCenterLidEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );

  edges = new THREE.EdgesGeometry(getGlueBottom(B, G));
  const sideGlueBottomEdges = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: '#E7E7E7' })
  );
  sideGlueBottomEdges.rotation.y = Math.PI;

  const pivotGlueTop = new THREE.Object3D();
  pivotGlueTop.add(sideGlueTop, sideGlueTopEdges);
  pivotGlueTop.position.y = (C - B / 2) | 0;

  const pivotGlueBottom = new THREE.Object3D();
  pivotGlueBottom.add(sideGlueBottom, sideGlueBottomEdges);
  pivotGlueBottom.rotation.x = Math.PI;

  const pivotGlueCenterLid = new THREE.Object3D();
  pivotGlueCenterLid.add(
    sideGlueCenterLid,
    sideGlueCenterLidEdges,
    pivotGlueBottom
  );
  pivotGlueCenterLid.rotation.y = Math.PI;
  pivotGlueCenterLid.position.x = G;

  const pivotGlueCenter = new THREE.Object3D();
  pivotGlueCenter.add(sideGlueCenter, sideGlueCenterEdges, pivotGlueCenterLid);
  pivotGlueCenter.position.y = -(B / 2) | 0;

  const pivotGlueLid = new THREE.Object3D();
  pivotGlueLid.add(
    sideGlueLid,
    sideGlueLidEdges,
    pivotGlueTop,
    pivotGlueCenter
  );
  pivotGlueLid.position.x = A;

  const pivotABackTop = new THREE.Object3D();
  pivotABackTop.add(sideABackTop, sideATopEdges.clone());
  pivotABackTop.position.y = (C - B / 2) | 0;

  const pivotABackBottomLeft = new THREE.Object3D();
  pivotABackBottomLeft.add(
    sideABottomLeft.clone(),
    sideABottomLeftEdges.clone()
  );
  pivotABackBottomLeft.rotation.y = Math.PI;
  pivotABackBottomLeft.position.x = (A - (B / 2 + 15) + B / 2 + 15) | 0;

  const pivotABackBottomRight = new THREE.Object3D();
  pivotABackBottomRight.add(
    sideABottomLeftRight.clone(),
    sideABottomLeftRightEdges.clone()
  );

  const pivotABackBottom = new THREE.Object3D();
  pivotABackBottom.add(
    sideABottom.clone(),
    sideABottomEdges.clone(),
    pivotABackBottomLeft,
    pivotABackBottomRight
  );
  pivotABackBottom.position.y = (B / 2) | 0;

  const pivotABackBottomD = new THREE.Object3D();
  pivotABackBottomD.add(
    sideABottomD.clone(),
    sideABottomDEdges.clone(),
    pivotABackBottom
  );
  pivotABackBottomD.rotation.x = Math.PI;

  const pivotRopeABack = new THREE.Object3D();
  pivotRopeABack.add(rope.clone());
  pivotRopeABack.position.set((A / 2) | 0, C - B / 2 - D / 2, 2);
  pivotRopeABack.rotation.y = Math.PI;

  const pivotABack = new THREE.Object3D();
  pivotABack.add(
    sideABack,
    sideABackEdges,
    pivotABackTop,
    pivotABackBottomD,
    pivotGlueLid,
    pivotRopeABack
  );
  pivotABack.position.x = (B / 2) | 0;

  const pivotBLeftLTop = new THREE.Object3D();
  pivotBLeftLTop.add(sideBTopLeft, sideBTopLeftEdges);
  pivotBLeftLTop.position.y = (C - B / 2) | 0;

  const pivotBLeftHalfLeftBottom = new THREE.Object3D();
  pivotBLeftHalfLeftBottom.add(
    sideBHalfBottom.clone(),
    sideBHalfBottomEdges.clone()
  );
  pivotBLeftHalfLeftBottom.rotation.x = Math.PI;

  const pivotBLeftLBottom = new THREE.Object3D();
  pivotBLeftLBottom.add(sideBBottom.clone(), sideBBottomEdges.clone());
  pivotBLeftLBottom.position.y = (B / 2) | 0;

  const pivotBLeftHalfLeftDBottom = new THREE.Object3D();
  pivotBLeftHalfLeftDBottom.add(
    sideBHalfDBottom.clone(),
    sideBHalfDBottomEdges.clone(),
    pivotBLeftLBottom
  );
  pivotBLeftHalfLeftDBottom.rotation.x = Math.PI;

  const pivotBLeftL = new THREE.Object3D();
  pivotBLeftL.add(
    sideBLeftL,
    sideBLeftLEdges,
    pivotBLeftLTop,
    pivotBLeftHalfLeftBottom,
    pivotBLeftHalfLeftDBottom,
    pivotABack
  );
  pivotBLeftL.position.x = (B / 2) | 0;

  const pivotBLeftRTop = new THREE.Object3D();
  pivotBLeftRTop.add(sideBTopLeft.clone(), sideBTopLeftEdges.clone());
  pivotBLeftRTop.position.y = (C - B / 2) | 0;

  const pivotBLeftHalfRightBottom = new THREE.Object3D();
  pivotBLeftHalfRightBottom.add(
    sideBHalfBottomRight,
    sideBHalfBottomRightEdges
  );
  pivotBLeftHalfRightBottom.position.y = -(B / 2) | 0;

  const pivotBLeftRBottom = new THREE.Object3D();
  pivotBLeftRBottom.add(sideBBottom.clone(), sideBBottomEdges.clone());
  pivotBLeftRBottom.rotation.x = Math.PI;

  const pivotBLeftHalfRightDBottom = new THREE.Object3D();
  pivotBLeftHalfRightDBottom.add(
    sideBHalfDBottomRight.clone(),
    sideBHalfDBottomRightEdges.clone(),
    pivotBLeftRBottom
  );
  pivotBLeftHalfRightDBottom.position.y = -(B / 2) | 0;

  const pivotBLeftR = new THREE.Object3D();
  pivotBLeftR.add(
    sideBLeftL.clone(),
    sideBLeftLEdges.clone(),
    pivotBLeftRTop,
    pivotBLeftHalfRightBottom,
    pivotBLeftHalfRightDBottom,
    pivotBLeftL
  );
  pivotBLeftR.rotation.y = Math.PI;

  const pivotSideBRightTop = new THREE.Object3D();
  pivotSideBRightTop.add(sideBTop.clone(), sideBTopEdges.clone());
  pivotSideBRightTop.position.y = (C - B / 2) | 0;

  const pivotBRightBottom = new THREE.Object3D();
  pivotBRightBottom.add(sideBBottomRight, sideBBottomRightEdges);
  pivotBRightBottom.position.y = (B / 2) | 0;

  const pivotBHalfRightBottom = new THREE.Object3D();
  pivotBHalfRightBottom.add(
    sideBHalfBottomRight.clone(),
    sideBHalfBottomRightEdges.clone()
  );
  pivotBHalfRightBottom.rotation.x = Math.PI;

  const pivotBHalfRightDBottom = new THREE.Object3D();
  pivotBHalfRightDBottom.add(
    sideBHalfDBottomRight.clone(),
    sideBHalfDBottomRightEdges.clone(),
    pivotBRightBottom
  );
  pivotBHalfRightDBottom.rotation.x = Math.PI;

  const pivotBRightR = new THREE.Object3D();
  pivotBRightR.add(
    sideBRightR,
    sideBRightREdges,
    pivotSideBRightTop,
    pivotBHalfRightBottom,
    pivotBHalfRightDBottom
  );
  pivotBRightR.position.x = (B / 2) | 0;

  const pivotSideBLeftTop = new THREE.Object3D();
  pivotSideBLeftTop.add(sideBTop, sideBTopEdges);
  pivotSideBLeftTop.position.y = (C - B / 2) | 0;

  const pivotBHalfLeftBottom = new THREE.Object3D();
  pivotBHalfLeftBottom.add(sideBHalfBottom, sideBHalfBottomEdges);
  pivotBHalfLeftBottom.position.y = -(B / 2) | 0;

  const pivotBLeftBottom = new THREE.Object3D();
  pivotBLeftBottom.add(sideBBottomRight.clone(), sideBBottomRightEdges.clone());
  pivotBLeftBottom.rotation.x = Math.PI;

  const pivotBHalfLeftDBottom = new THREE.Object3D();
  pivotBHalfLeftDBottom.add(
    sideBHalfDBottom,
    sideBHalfDBottomEdges,
    pivotBLeftBottom
  );
  pivotBHalfLeftDBottom.position.y = -(B / 2) | 0;

  const pivotBRightL = new THREE.Object3D();
  pivotBRightL.add(
    sideBRightL,
    sideBRightLEdges,
    pivotSideBLeftTop,
    pivotBHalfLeftBottom,
    pivotBHalfLeftDBottom,
    pivotBRightR
  );
  pivotBRightL.position.x = A;

  const pivotATop = new THREE.Object3D();
  pivotATop.add(sideATop, sideATopEdges);
  pivotATop.position.y = (C - B / 2) | 0;

  const pivotABottomLeft = new THREE.Object3D();
  pivotABottomLeft.add(sideABottomLeftRight, sideABottomLeftRightEdges);
  pivotABottomLeft.rotation.y = Math.PI;
  pivotABottomLeft.position.x = (A - (B / 2 + 15) + B / 2 + 15) | 0;

  const pivotABottomRight = new THREE.Object3D();
  pivotABottomRight.add(sideABottomLeft, sideABottomLeftEdges.clone());

  const pivotABottom = new THREE.Object3D();
  pivotABottom.add(
    sideAFrontBottom,
    sideAFrontBottomEdges,
    pivotABottomLeft,
    pivotABottomRight
  );
  pivotABottom.position.y = (B / 2) | 0;

  const pivotABottomD = new THREE.Object3D();
  pivotABottomD.add(sideAFrontBottomD, sideAFrontBottomDEdges, pivotABottom);
  pivotABottomD.rotation.x = Math.PI;

  const pivotRopeAFront = new THREE.Object3D();
  pivotRopeAFront.add(rope);
  pivotRopeAFront.position.set((A / 2) | 0, C - B / 2 - D / 2, -2);

  const pivotAFront = new THREE.Object3D();
  pivotAFront.add(
    sideAFront,
    sideAFrontEdges,
    pivotATop,
    pivotABottomD,
    pivotBRightL,
    pivotBLeftR,
    pivotRopeAFront
  );
  pivotAFront.position.y = B / 2;

  if (animate) {
    foldBox(
      pivotBRightL,
      pivotATop,
      pivotSideBLeftTop,
      pivotSideBRightTop,
      pivotBLeftBottom,
      pivotBRightBottom,
      pivotABottomLeft,
      pivotABottomRight,
      pivotABottom,
      pivotBLeftR,
      pivotBLeftRTop,
      pivotBLeftRBottom,
      pivotBLeftLTop,
      pivotBLeftLBottom,
      pivotABack,
      pivotABackTop,
      pivotABackBottom,
      pivotABackBottomLeft,
      pivotABackBottomRight,
      pivotGlueTop,
      pivotGlueBottom,
      pivotGlueLid
    );
  }

  return pivotAFront;
};
