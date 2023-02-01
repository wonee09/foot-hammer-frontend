import { StyledButton } from './style';

type Props = {
  children: string;
};

const ConfirmButton = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default ConfirmButton;
