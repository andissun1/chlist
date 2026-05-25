import { ActionBlock } from '../../components/ActionBlock/ActionBlock';
import { Map } from '../../components/Map/Map';
import { UserPain } from '../../components/UserPain/UserPain';
import style from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={style.mainPage}>
      <UserPain />
      <ActionBlock />
      <Map />
    </div>
  );
};
