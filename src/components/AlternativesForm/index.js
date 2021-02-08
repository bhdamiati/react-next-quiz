import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      color: ${({ theme }) => theme.colors.highlightText};
      border-color: ${({ theme }) => theme.colors.highlightText};

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    }
  }

  button {
    margin-top: 10px;
  }
`;

export default AlternativesForm;