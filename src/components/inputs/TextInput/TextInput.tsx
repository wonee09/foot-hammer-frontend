import React from 'react';
import { StyledInput, StyledLabel } from './style';

type Props = {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const TextInput = ({ id, label, onChange, value }: Props) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{label}</StyledLabel> :
      <StyledInput id={id} onChange={onChange} value={value} />
    </div>
  );
};

export default TextInput;
