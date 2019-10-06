import { useCallback, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { PayloadAC } from 'typesafe-actions';

export function useToggleAll(setAll: PayloadAC<string, boolean>) {
  const dispatch = useDispatch();
  return useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setAll(event.target.checked));
    },
    [dispatch, setAll]
  );
}
export default useToggleAll;
