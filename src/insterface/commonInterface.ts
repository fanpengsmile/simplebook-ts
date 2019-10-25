import { List, Record } from 'immutable'

type NoPar = () => void

export interface IHeaderProps {
    focused: boolean,
    list: [],
    page: number,
    totalPage: number,
    mouseIn: boolean,
    login?: boolean,
    logout?: any,
    handleInputFocus?: any,
    handleInputBlur?: any,
    handleMouseEnter?: NoPar,
    handleMouseLeave?: any,
    switchList?: any
  }
export interface IHeaderState {
    focused?: boolean,
    list?: [],
    page?: number,
    totalPage?: number,
    mouseIn?: boolean,
    login?: boolean,
    spinIcon?: any
  }