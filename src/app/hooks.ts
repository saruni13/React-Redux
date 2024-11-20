import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import { RootState, AppDispatch } from './Store';
export const useAppDispatch = ()=>useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;