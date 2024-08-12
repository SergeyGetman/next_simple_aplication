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
  children?: ReactNode;
  keywords?: string;
}

export interface AppProps {
  children?: React.ReactNode;
  childrenElement?: React.JSX.Element;
  style?: React.CSSProperties;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  props?:  React.ComponentPropsWithoutRef<"button">;
  sx?: SxProps<Theme>;

}

interface EventTarget {
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
  value: any;
}



export interface IEvent {
  target: EventTarget;
  e: React.ChangeEvent<HTMLInputElement>;
  preventDefault(): void;
  stopPropagation(): void;
  handleSubmit(): void;
  handleChangeEmail(): void;
  handleChangePass(): void;
  handleChangeEmail(): void;
}

export interface SyntheticEvent<T> {

  currentTarget: EventTarget & T | React.ChangeEvent<HTMLInputElement> ;
  target?: EventTarget;
  preventDefault(): void;
  stopPropagation(): void;
}