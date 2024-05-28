import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';
import Button from '../button';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className={style.footer}>
      <Button onClick={() => handleNavigation('cookies')} className={style.footerItem}>Cookies</Button>
      <Button onClick={() => handleNavigation('notifications')} className={style.footerItem}>Notifications</Button>
      <Button onClick={() => handleNavigation('general-policies')} className={style.footerItem}>General Policies</Button>
    </div>
  );
};

export default Footer;
