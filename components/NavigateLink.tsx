import React from 'react';
import Link from 'next/link';
import style from '../pages/style.module.css';
import { INavigationLink } from '../types/generalType';

const NavigateLink: React.FC<INavigationLink> = ({ text, href, children, className }) => {
  return (
    <Link href={href} className={className}>
      <nav>
        {children}
        <h2 className={style.link}>{text}</h2>
      </nav>
    </Link>
  );
};

export default NavigateLink;
