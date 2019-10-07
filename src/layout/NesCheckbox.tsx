import React from 'react';

export const NesCheckbox: React.FC<{
  name: string;
  checked: boolean;
  onChange: any;
}> = React.memo(({ name, checked, onChange }) => (
  <label>
    <input
      name={name}
      type="checkbox"
      className="nes-checkbox"
      checked={checked}
      onChange={onChange}
    />
    <span>{name}</span>
  </label>
));

export default NesCheckbox;
