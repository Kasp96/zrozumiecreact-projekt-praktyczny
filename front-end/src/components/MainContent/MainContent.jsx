import style from '../MainContent/MainContent.module.css'

export const MainContent = ({ children }) => {
  return <div className={style.mainContent}>{children}</div>;
};
