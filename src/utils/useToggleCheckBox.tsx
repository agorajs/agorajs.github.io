import { useCallback, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { PayloadAC } from 'typesafe-actions';

export function useToggleCheckBox(toggle: PayloadAC<string, string>) {
  const dispatch = useDispatch();
  return useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(toggle(event.target.name));
    },
    [dispatch, toggle]
  );
}

export default useToggleCheckBox;
