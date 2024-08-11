import React, { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

export interface INavigationLink {
  text: string;
  href: string;
  children?: ReactNode;
  handleClick?: () => void;
  className?: string;
}

export interface IMainContainer {
  children: ReactNode;
  keywords: string;
}

export interface AppProps {
  children?: React.ReactNode;
  childrenElement?: React.JSX.Element;
  style?: React.CSSProperties;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  props?:  React.ComponentPropsWithoutRef<"button">;
  sx?: SxProps<Theme>;

}

export interface SyntheticEvent<T> {

  currentTarget: EventTarget & T;

  preventDefault(): void;
}