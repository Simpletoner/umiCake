import React from 'react';
import { Modal } from 'antd';
const BannerEditModel = (props: any) => {
  console.log(props);
  const handleOk = () => {};
  const handleCancel = () => {};
  return (
    <Modal
      title="Basic Modal"
      open={props.isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{props.editRow.bannerName}</p>
    </Modal>
  );
};

export default BannerEditModel;
