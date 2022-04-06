import React from 'react';

import { useRecoilState } from 'recoil';
import { tmpInfoState } from '../../../../../recoil/photoInfo';
import type { InfoType } from '../../../../../recoil/photoInfo';

import * as S from './AddImgForm.style';

import { parseFile } from '../../../../../utils/parseFile';

const AddImgForm: React.FC = () => {
  const [tmpInfo, setTmpInfo] = useRecoilState<InfoType>(tmpInfoState);

  const storeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement

    const result = target.files && await parseFile(target.files[0]);

    setTmpInfo({...tmpInfo, img_url: result});
  }

  return (
    <S.Container>
      <S.ContentTitle>티켓 추가하기</S.ContentTitle>
      <S.ContentInfo>티켓에 사진을 추가할 방법을 선택하세요</S.ContentInfo>
      <S.UpdateSortList>
        <S.UpdateSort>
          <S.FileBox>
            <S.FileLabel htmlFor="file">내 PC에서 불러오기</S.FileLabel>
            <S.FetchLocalPC type="file" id="file" onChange={storeImage}/>
          </S.FileBox>
        </S.UpdateSort>
      </S.UpdateSortList>
    </S.Container>
  );
};

export default AddImgForm;
