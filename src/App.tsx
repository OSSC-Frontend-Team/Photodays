import React from 'react';

import { useRecoilState } from 'recoil';
import { tmpInfoState } from './recoil/photoInfo';
import type { InfoType } from './recoil/photoInfo';

import Modal from './components/common/modal/Modal';
import ModalTemplate from './components/common/modal/modalTemplate/ModalTemplate';
import AddImgForm from './components/common/modal/modalContent/addImgForm/AddImgForm';
import useModal from './hooks/useModal';
import SetContentInfoForm from './components/common/modal/modalContent/setContentInfoForm/SetContentInfoForm';

const App: React.FC = () => {
  const [tmpInfo, _] = useRecoilState<InfoType>(tmpInfoState);
  const { isShowing, modalInfo, setModalVisible } = useModal();

  return (
    <>
      <button onClick={setModalVisible}>show modal</button>
      <Modal isShowing={isShowing} hide={setModalVisible}>
        <ModalTemplate>
          {
            tmpInfo.img_url === 'empty' ? <AddImgForm /> : <SetContentInfoForm />
          }
        </ModalTemplate>
      </Modal>
    </>
  );
};

export default App;
