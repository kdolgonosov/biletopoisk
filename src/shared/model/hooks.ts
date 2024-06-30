import { useSelector, type TypedUseSelectorHook, useDispatch } from 'react-redux';
import type { RootState } from '@/app/rootReducer';
import type { AppDispatch } from '@/app/appStore';
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
