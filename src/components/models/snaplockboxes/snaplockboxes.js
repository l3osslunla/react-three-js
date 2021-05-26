import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setA,
  setB,
  setC,
  setO,
  setG,
  setGSlope,
} from '../../../store/reducers/menuReducer';
import * as THREE from 'three';

import Main from '../../../main';
import Webgl from '../../webgl';

import { snapLockBoxesModel } from './render/object/object';

const SnapLockBoxes = () => {
  const dispatch = useDispatch();
  const { A, B, C, O, G, GSlope, animate, lineArea } = useSelector(
    (state) => ({
      A: state.menuReducer.A,
      B: state.menuReducer.B,
      C: state.menuReducer.C,
      O: state.menuReducer.O,
      G: state.menuReducer.G,
      GSlope: state.menuReducer.GSlope,
      animate: state.menuReducer.animate,
      lineArea: state.menuReducer.lineArea,
    }),
    []
  );

  const [scene, setScene] = useState(new THREE.Scene());

  useEffect(() => {
    dispatch(setA(175));
    dispatch(setB(105));
    dispatch(setC(75));
    dispatch(setO(1));
    dispatch(setG(5));
    dispatch(setGSlope(4));
  }, [dispatch]); //? default side box set.

  useEffect(() => {
    const groupAll = new THREE.Group();
    groupAll.add(snapLockBoxesModel(A, B, C, O, G, GSlope, animate), lineArea);

    setScene((prevState) => {
      prevState.add(groupAll);
      return prevState;
    }); //?  set state ด้วยค่า prevState ก่อนหน้า ให้ prevState = scene, prevState เพิ่ม pivot_all object.

    return () => {
      setScene(new THREE.Scene());
    };
  }, [A, B, C, O, G, GSlope, animate, lineArea]);

  return <Webgl sceneModel={scene} />;
};

export default SnapLockBoxes;