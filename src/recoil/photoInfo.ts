import { atom } from 'recoil';

// date => 적합 날짜에 랜더링
export interface InfoType {
    date: string;
    img_url: string;
    title: string;
    location: string;
    description: string;
}

export const tmpInfoState = atom<InfoType>({
    key: 'tmpInfoState',
    default: {
        date: 'empty', // YYYYMMDD => 20220318
        img_url: 'empty', 
        title: 'empty',
        location: 'empty',
        description: 'empty'
    },
})

// const [infoList, setInfoList] = useRecoilState<InfoType[]>(infoListState);

export const infoListState = atom<InfoType[]>({
    key: 'infoList',
    default: []
}) 