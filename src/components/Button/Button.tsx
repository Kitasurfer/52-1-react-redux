import { MainButton } from "./styles";
// import {Event} from 'react';

interface ButtonProps {
  name?: string,
  type: 'submit' | 'button' | 'reset',
  onClick?: () => void,
	disabled?: boolean
}

function Button({
  name = "SEND",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={disabled} >
      {name}
    </MainButton>
  );
}
export default Button;
