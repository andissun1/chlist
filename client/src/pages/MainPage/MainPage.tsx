import { ActionBlock } from '../../components/ActionBlock/ActionBlock';
import { Map } from '../../components/Map/Map';
import { AboutUs } from '../../components/AboutUs/AboutUs';

import style from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <AboutUs />
      <ActionBlock />
      <Map />
    </div>
  );
};
