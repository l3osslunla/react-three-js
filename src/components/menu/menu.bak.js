/* #region  //*  Variable */

import React, { useState, Fragment } from 'react';
import {
  Slider,
  InputNumber,
  Row,
  Col,
  Menu,
  // Switch,
  // Button,
  Select,
} from 'antd';
import {
  // CodeSandboxOutlined,
  // DropboxOutlined,
  SettingOutlined,
  CodepenOutlined,
  // CalculatorOutlined,
  // UploadOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import pictureAInput from '../pic/a.png';
import pictureBInput from '../pic/b.png';
import pictureCInput from '../pic/c.png';

import { useDispatch, useSelector } from 'react-redux';
import {
  setValueA,
  setValueB,
  setValueC,
  // setValueO,
  // setValueR,
} from '../../store/reducers/menuReducer';

import '../../custom.css';

// import STAND11D02 from '../models/standard/stand-11d02';

const { SubMenu } = Menu;
const { Option } = Select;
// const key = 'updatable';

// let msgVolume;

/* #endregion */

const Menus = (props) => {
  //*  Deconstructor
  const {
    // clb,
    // opb,
    // shm,
    // dlm,
    size,
    // msg,
    // imgURL,
    unitSent,
    radianSelect,
  } = props;

  //*  State
  const dispatch = useDispatch();
  const { valueA, valueB, valueC, valueO, valueR } = useSelector(
    (state) => ({
      valueA: state.menuReducer.valueA, //?  Width
      valueB: state.menuReducer.valueB, //?  Depth
      valueC: state.menuReducer.valueC, //?  Height
      valueR: state.menuReducer.valueR, //?  Radian
      valueO: state.menuReducer.valueO, //?  Opacity
    }),
    []
  );

  // const [inputAModelvalue, setinputAModelvalue] = useState(250); // Width-Model
  // const [inputBModelvalue, setinputBModelvalue] = useState(380); // Depth-Model
  // const [inputCModelvalue, setinputCModelvalue] = useState(22); // Height-Model

  // const [inputFloorvalue, setinputFloorvalue] = useState(3); // Floor

  // const [box, setBox] = useState('');
  // const [model, setModel] = useState('');
  // const [checkOpenBox, setCheckOpenBox] = useState(false);
  // const [checkShowModel, setCheckShowModel] = useState(false);

  // const [thumbnail, setThumbnail] = useState('');
  const [unit, setUnit] = useState('mm');

  //*  onClick Event
  // const closeBox = () => {
  //   setBox('closeBox');
  //   return clb();
  // };
  // const openBox = () => {
  //   setBox('openBox');
  //   return opb();
  // };
  // const showModel = () => {
  //   setModel('showModel');
  //   return shm();
  // };
  // const delModel = () => {
  //   setModel('delModel');
  //   return dlm();
  // };
  // const msgVolume = () => {
  //   message.loading({ content: 'กระณารอสักครู่...', key });
  //   setTimeout(() => {
  //     if (STAND11D02.calVolume() >= 1 && STAND11D02.calVolume() <= 500) {
  //       message.success({
  //         content: `จำนวนที่สามารถบรรจุได้ ${STAND11D02.calVolume()} ชิ้น!`,
  //         key,
  //         duration: 10,
  //       });
  //     } else {
  //       message.error({
  //         content: `จำนวนที่สามารถบรรจุได้ไม่ถูกต้อง!`,
  //         key,
  //         duration: 10,
  //       });
  //     }
  //   }, 1000);

  //   return msg();
  // };
  // const returnIMGurl = (value) => {
  //   return imgURL(value);
  // };
  const returnSentUnit = (value) => {
    return unitSent(value);
  };

  //*  onChange Event
  const onChangeA = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= valueR + 12) {
        dispatch(setValueA(value));
        return size(
          valueA,
          valueB,
          valueC,
          // inputAModelvalue,
          // inputBModelvalue,
          // inputCModelvalue,
          // inputFloorvalue,
          valueO,
          valueR
        );
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= valueR + 137) {
        dispatch(setValueA(value));
      }
    } else {
      dispatch(setValueA(value));
    }
  };
  const onChangeB = (value) => {
    if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
      if (value >= valueR + 12) {
        dispatch(setValueB(value));
        return size(
          valueA,
          valueB,
          valueC,
          // inputAModelvalue,
          // inputBModelvalue,
          // inputCModelvalue,
          // inputFloorvalue,
          valueO,
          valueR
        );
      }
    } else if (radianSelect === 'threeduallock') {
      if (value >= valueR + 14) {
        dispatch(setValueB(value));
        return size(
          valueA,
          valueB,
          valueC,
          // inputAModelvalue,
          // inputBModelvalue,
          // inputCModelvalue,
          // inputFloorvalue,
          valueO,
          valueR
        );
      }
    } else {
      dispatch(setValueB(value));
      return size(
        valueA,
        valueB,
        valueC,
        // inputAModelvalue,
        // inputBModelvalue,
        // inputCModelvalue,
        // inputFloorvalue,
        valueO,
        valueR
      );
    }
  };
  const onChangeC = (value) => {
    dispatch(setValueC(value));
    return size(
      valueA,
      valueB,
      valueC,
      // inputAModelvalue,
      // inputBModelvalue,
      // inputCModelvalue,
      // inputFloorvalue,
      valueO,
      valueR
    );
  };

  // const onChangeAmodel = (value) => {
  //   setinputAModelvalue(value);
  //   return size(
  //     valueA,
  //     valueB,
  //     valueC,
  //     value,
  //     inputBModelvalue,
  //     inputCModelvalue,
  //     inputFloorvalue,
  //     valueO,
  //     valueR
  //   );
  // };
  // const onChangeBmodel = (value) => {
  //   setinputBModelvalue(value);
  //   return size(
  //     valueA,
  //     valueB,
  //     valueC,
  //     inputAModelvalue,
  //     value,
  //     inputCModelvalue,
  //     inputFloorvalue,
  //     valueO,
  //     valueR
  //   );
  // };
  // const onChangeCmodel = (value) => {
  //   setinputCModelvalue(value);
  //   return size(
  //     valueA,
  //     valueB,
  //     valueC,
  //     inputAModelvalue,
  //     inputBModelvalue,
  //     value,
  //     inputFloorvalue,
  //     valueO,
  //     valueR
  //   );
  // };
  // const onChangeFloormodel = (value) => {
  //   setinputFloorvalue(value);
  //   return size(
  //     valueA,
  //     valueB,
  //     valueC,
  //     inputAModelvalue,
  //     inputBModelvalue,
  //     inputCModelvalue,
  //     value,
  //     valueO,
  //     valueR
  //   );
  // };

  // const onChangeO = (value) => {
  //   dispatch(setValueO(value));
  //   return size(
  //     valueA,
  //     valueB,
  //     valueC,
  // inputAModelvalue,
  // inputBModelvalue,
  // inputCModelvalue,
  // inputFloorvalue,
  //     valueO,
  //     valueR
  //   );
  // };
  // const onChangeR = (value) => {
  //   if (radianSelect === 'threelock' || radianSelect === 'threelockul') {
  //     if (value <= valueA - 12 && value <= valueB - 12) {
  //       dispatch(setValueR(value));
  //       return size(
  //         valueA,
  //         valueB,
  //         valueC,
  // inputAModelvalue,
  // inputBModelvalue,
  // inputCModelvalue,
  // inputFloorvalue,
  //       valueO,
  //       valueR
  //     );
  //   }
  // } else if (radianSelect === 'threeduallock') {
  //   if (value <= valueA - 137 && value <= valueB - 14 && value <= 43) {
  //     dispatch(setValueR(value));
  //     return size(
  //       valueA,
  //       valueB,
  //       valueC,
  // inputAModelvalue,
  // inputBModelvalue,
  // inputCModelvalue,
  // inputFloorvalue,
  //         valueO,
  //         valueR
  //       );
  //     }
  //   }
  // };

  // const onLoadModelTexture = (value) => {
  //   let reader = new FileReader();

  //   reader.readAsDataURL(value.target.files[0]);
  //   reader.onload = () => {
  //     returnIMGurl(reader.result);
  //     setThumbnail(reader.result);
  //   };
  // };

  // const changeBox = (value) => {
  //   if (value === 'close') {
  //     closeBox();
  //   } else if (value === 'open') {
  //     openBox();
  //   }
  //   setCheckOpenBox(!checkOpenBox);
  // };

  // const changeModel = (value) => {
  //   if (value === 'delObj') {
  //     delModel();
  //   } else if (value === 'Obj') {
  //     showModel();
  //   }
  //   setCheckShowModel(!checkShowModel);
  // };

  const handleCheckUnit = (value) => {
    let pre;

    //*  ฟังก์ชั่นเก็บตัวแปรค่า value ที่รับเข้ามาก่อนหน้า
    setUnit((prev) => {
      pre = prev;
      return { value };
    });

    if (value === 'cm') {
      //*  mm to cm
      if (pre === 'in') {
        dispatch(setValueA(valueA / 0.3937));
        dispatch(setValueB(valueB / 0.3937));
        dispatch(setValueC(valueC / 0.3937));
        returnSentUnit(value);
        return setUnit(value);
      }
      dispatch(setValueA(valueA / 10));
      dispatch(setValueB(valueB / 10));
      dispatch(setValueC(valueC / 10));
      returnSentUnit(value);
      return setUnit(value);
    }

    if (value === 'in') {
      //*  mm to inch
      if (pre === 'cm') {
        dispatch(setValueA(valueA * 0.3937));
        dispatch(setValueB(valueB * 0.3937));
        dispatch(setValueC(valueC * 0.3937));
        returnSentUnit(value);
        return setUnit(value);
      }
      dispatch(setValueA(Math.round(valueA * 0.03937)));
      dispatch(setValueB(Math.round(valueB * 0.03937)));
      dispatch(setValueC(Math.round(valueC * 0.03937)));
      returnSentUnit(value);
      return setUnit(value);
    }
    //*  cm to mm
    if (pre === 'cm' && value === 'mm') {
      dispatch(setValueA(Math.round(valueA * 10)));
      dispatch(setValueB(Math.round(valueB * 10)));
      dispatch(setValueC(Math.round(valueC * 10)));
      returnSentUnit(value);
      return setUnit(value);
    }
    //*  inch to mm
    if (pre === 'in' && value === 'mm') {
      dispatch(setValueA(Math.round(valueA * 0.03937)));
      dispatch(setValueB(Math.round(valueB * 0.03937)));
      dispatch(setValueC(Math.round(valueC * 0.03937)));
      returnSentUnit(value);
      return setUnit(value);
    }
    returnSentUnit(value);
    return setUnit(value);
  };

  const selectUnit = () => (
    <Select
      value={unit}
      style={{ width: 80, maxWidth: '100%' }}
      onChange={handleCheckUnit}
    >
      <Option value="mm">mm</Option>
      <Option value="cm">cm</Option>
      <Option value="in">inch</Option>
    </Select>
  );

  return (
    <Fragment>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        style={{ minHeight: '100vh', maxHeight: '50vh', overflow: 'auto' }}
      >
        <SubMenu key="sub1" icon={<SettingOutlined />} title="การปรับขนาดกล่อง">
          <Menu.Item key="1">
            <Row>
              <Col span={1}>
                <img
                  src={pictureAInput}
                  style={{
                    width: 26,
                    height: 26,
                    maxWidth: '100%',
                    padding: 'unset',
                  }}
                />
              </Col>
              <Col span={14}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeA}
                  value={valueA}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueA}
                  formatter={(value) => `${value}`}
                />
              </Col>
              <Col span={3}>{selectUnit()}</Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <label>กว้าง</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={1}>
                <img
                  src={pictureBInput}
                  style={{
                    width: 26,
                    height: 26,
                    maxWidth: '100%',
                    padding: 'unset',
                  }}
                />
              </Col>
              <Col span={14}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeB}
                  value={valueB}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueB}
                  formatter={(value) => `${value}`}
                  onChange={onChangeB}
                />
              </Col>
              <Col span={3}>{selectUnit()}</Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <label>ยาว</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={1}>
                <img
                  src={pictureCInput}
                  style={{
                    width: 26,
                    height: 26,
                    maxWidth: '100%',
                    padding: 'unset',
                  }}
                />
              </Col>
              <Col span={14}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeC}
                  value={valueC}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueC}
                  formatter={(value) => `${value}`}
                  onChange={onChangeC}
                />
              </Col>
              <Col span={3}>{selectUnit()}</Col>
              <Col span={3} style={{ textAlign: 'center' }}>
                <label>สูง</label>
              </Col>
            </Row>
          </Menu.Item>
          <hr />
          <h6 style={{ color: 'white', textAlign: 'center' }}>
            {`ชิ้นงานนี้ มีขนาดพื้นที่ (กว้างxยาว) =
            ${Math.round(valueA + valueB * 2)}x${Math.round(
              valueB * 2 + valueC * 3
            )} ${unit}`}{' '}
            {(valueA + valueB * 2) * (valueB * 2 + valueC * 3) <= 210 * 297
              ? 'ขนาดกระดาษที่แนะนำ A4'
              : 'ขนาดกระดาษที่แนะนำ A5'}
          </h6>
        </SubMenu>
        {/* <SubMenu
          icon={<CodeSandboxOutlined />}
          title="การปรับขนาดชิ้นส่วนกล่อง"
        >
          <Menu.Item>
            <Row>
              <Col span={16}>
                <Slider
                  min={1}
                  max={500}
                  onChange={onChangeR}
                  value={valueR}
                  step={1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={valueR}
                  formatter={(value) => `${value}`}
                  onChange={onChangeR}
                />
              </Col>
              <Col span={5}>
                <label>เส้นรอบวงกลม</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={16}>
                <Slider
                  min={0.1}
                  max={1}
                  onChange={onChangeO}
                  value={valueO}
                  step={0.1}
                />
              </Col>
              <Col span={3}>
                <InputNumber
                  min={0.1}
                  max={1}
                  step={0.1}
                  value={valueO}
                  formatter={(value) => `${value}`}
                  onChange={onChangeO}
                />
              </Col>
              <Col span={5}>
                <label>ความโปร่งใส</label>
              </Col>
            </Row>
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<DropboxOutlined />} title="การควบคุมการเคลื่อนไหว">
          <Menu.Item>
            <Switch
              onClick={() => changeBox(checkOpenBox ? 'open' : 'close')}
              checkedChildren={'พับกล่อง'}
              unCheckedChildren={'กางกล่อง'}
            />
          </Menu.Item>
          <Menu.Item>
            <Switch
              onClick={() => changeModel(checkShowModel ? 'delObj' : 'Obj')}
              checkedChildren={'เปิดโมเดล'}
              unCheckedChildren={'ปิดโมเดล'}
            />
          </Menu.Item>
        </SubMenu>
        <SubMenu icon={<CalculatorOutlined />} title="การคำนวณพื้นที่กล่อง">
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={inputAModelvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeAmodel}
                />
              </Col>
              <Col span={5}>
                <label>กว้าง</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={inputBModelvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeBmodel}
                />
              </Col>
              <Col span={5}>
                <label>ยาว</label>
              </Col>
            </Row>
          </Menu.Item>
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={500}
                  step={1}
                  value={inputCModelvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeCmodel}
                />
              </Col>
              <Col span={5}>
                <label>สูง</label>
              </Col>
            </Row>
          </Menu.Item>
          <Row
            role="button"
            aria-expanded="false"
            aria-haspopup="true"
            style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 48 }}
          >
            <span>จำนวนชั้นที่ต้องการวางซ้อน</span>
          </Row>
          <Menu.Item>
            <Row>
              <Col span={3}>
                <InputNumber
                  min={1}
                  max={10}
                  step={1}
                  value={inputFloorvalue}
                  formatter={(value) => `${value}`}
                  onChange={onChangeFloormodel}
                />
              </Col>
              <Col span={5}>
                <label>ชั้น</label>
              </Col>
            </Row>
          </Menu.Item>
          <Row
            role="button"
            aria-expanded="false"
            aria-haspopup="true"
            style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 46 }}
          >
            <Button type="primary" onClick={msgVolume}>
              คำนวณ
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => window.location.reload()}
              style={{ marginLeft: 12 }}
            >
              รีเซ็ท
            </Button>
            <label className="custom-file-upload" style={{ borderRadius: 2 }}>
              <input type="file" onChange={onLoadModelTexture} />
              <Button icon={<UploadOutlined />} /> อัพโหลดรูปภาพ
            </label>
            <img
              src={thumbnail}
              style={{ marginLeft: 12, display: thumbnail ? 'block' : 'none' }}
            />
          </Row>
        </SubMenu> */}
        <SubMenu icon={<CodepenOutlined />} title="กล่องรูปทรงอื่น">
          <SubMenu title="Food boxes">
            <Menu.Item>
              <a href="/food1171">food-1171</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/food1202">food-1202</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/food1207">food-1207</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Snap lock boxes">
            <Menu.Item>
              <a href="/">snap-boxes</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/snap191">snap-1910</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Tray boxes">
            <Menu.Item>
              <a href="/tray1171">tray-1171</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/tray">tray-11a05</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/tray21701">tray-21701</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Shirt boxes">
            <Menu.Item>
              <a href="/shirt">shirt-12405</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Standard boxes">
            <Menu.Item>
              <a href="/stand11d02">stand-11d02</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Glove boxes">
            <Menu.Item>
              <a href="/glovebox">glove-boxes</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Carry boxes">
            <Menu.Item>
              <a href="/carry">carry-0000</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Carton bags & pillows">
            <Menu.Item>
              <a href="/cartoonbag">cartoonbag-1210c</a>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Lock boxes">
            <Menu.Item>
              <a href="/threelock">lock boxes</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/threeduallock">lock boxes - twin</a>
            </Menu.Item>
            <Menu.Item>
              <a href="/threelockul">lock boxes - upper & bottom</a>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Fragment>
  );
};

export default Menus;
