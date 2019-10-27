import React from 'react';

type NesCheckboxProps = {
  name: string;
  checked: boolean;
  onChange: any;
};

export const NesCheckbox: React.FC<NesCheckboxProps> = ({
  name,
  checked,
  onChange,
  children
}) => (
  <label>
    <input
      name={name}
      type="checkbox"
      className="nes-checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span>{children || name}</span>
  </label>
);
export default NesCheckbox;

export const NesCheckboxMemo: React.FC<NesCheckboxProps> = React.memo(
  NesCheckbox
);
