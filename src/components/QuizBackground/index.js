// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-repeat: no-repeat;
      background-size: contain;
    background-position: top;
      background-image:
        linear-gradient(to top, #8954C3, #0F49AE,transparent, transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
