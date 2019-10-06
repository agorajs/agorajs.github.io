import React from 'react';
export const NesCheckbox: React.FC<{
  name: string;
  checked: boolean;
  onChange: any;
}> = ({ name, checked, onChange }) => {
  return (
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
  );
};

export default NesCheckbox;
