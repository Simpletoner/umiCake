import React, { useEffect, useRef } from 'react';
import style from './index.less';
const Area = () => {
  let mapref = useRef();
  useEffect(() => {
    var map = new AMap.Map(mapref.current);
  }, []);
  return (
    <div>
      <div className={style.map} ref={mapref}></div>
    </div>
  );
};

export default Area;
