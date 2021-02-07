import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightText};
    border-color: ${({ theme }) => theme.colors.highlightText};
  }

  &:disabled {
    background-color: #FFF;
    color: #000;
    cursor: not-allowed;
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
