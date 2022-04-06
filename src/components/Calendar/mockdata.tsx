import { InfoType } from '../../recoil/photoInfo';

export const mockData: InfoType[] = [
  {
    date: '20220407', // YYYYMMDD => 20220318
    img_url: 'images/test-thumbnail.jpg',
    title: 'empty',
    location: 'empty',
    description: 'empty',
  },
  {
    date: '20220418', // YYYYMMDD => 20220318
    img_url: 'images/testImage01.jpg',
    title: 'empty',
    location: 'empty',
    description: 'empty',
  },
  {
    date: 'empty', // YYYYMMDD => 20220318
    img_url: 'empty',
    title: 'empty',
    location: 'empty',
    description: 'empty',
  },
];
