import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

// According to documentation
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
