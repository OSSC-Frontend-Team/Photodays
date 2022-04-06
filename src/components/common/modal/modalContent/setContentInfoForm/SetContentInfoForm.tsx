import React from 'react';

import { useRecoilState } from 'recoil';
import { tmpInfoState } from '../../../../../recoil/photoInfo';
import type { InfoType } from '../../../../../recoil/photoInfo';

import * as S from './SetContentInfoForm.style';
import Button from '../../../button/Button';

const SetContentInfoForm: React.FC = () => {
  const [tmpInfo, setTmpInfo] = useRecoilState<InfoType>(tmpInfoState);

  const changeSubInfoValue = (e: React.ChangeEvent<HTMLUListElement>) => {
      const currentEventTarget = e.target;
      
      if(currentEventTarget.nodeName !== 'INPUT' && currentEventTarget.nodeName !== 'TEXTAREA') return;
      else {
        const currentValue = (currentEventTarget as unknown as HTMLInputElement).value;
        const currentName = (currentEventTarget as unknown as HTMLInputElement).name;
        console.log(currentName, currentValue);
        setTmpInfo({...tmpInfo, [currentName]: currentValue});
      }
  }
  
  return (
    <S.Container>
      <S.Date>2022.03.06</S.Date>
      <S.Thumbnail src={tmpInfo.img_url as string}/>
      <S.SetContentInputList onChange={changeSubInfoValue}>
        <S.SetContentInputSort>
          <S.SetContentInput placeholder="제목" name="title"/>
        </S.SetContentInputSort>
        <S.SetContentInputSort>
          <S.SetContentInput placeholder="장소" name="location"/>
        </S.SetContentInputSort>
        <S.SetContentInputSort>
          <S.SetContentDescription placeholder="설명" name="description"/>
        </S.SetContentInputSort>
      </S.SetContentInputList>
      <Button sort="modal" name="저장" />
    </S.Container>
  );
};

export default SetContentInfoForm;
