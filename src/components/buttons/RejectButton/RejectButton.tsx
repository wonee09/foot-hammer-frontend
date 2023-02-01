import { StyledButton } from './style';

type Props = {
  children: string;
};

const RejectButton = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default RejectButton;
