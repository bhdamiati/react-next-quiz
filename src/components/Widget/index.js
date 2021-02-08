import styled from 'styled-components';

const Widget = styled.div`
  margin: 24px 0;
  border: 6px solid #FFF;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};

  h1,h2,h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

`;

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.secondary};
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0
  }
`;

Widget.Topic = styled.a`
  outline:0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.highlightText};
    border-color: ${({ theme }) => theme.colors.highlightText};
  }
`;

export default Widget;
