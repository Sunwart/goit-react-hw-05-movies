import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: #fff;
  background-color: #3d85c6;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  padding-top: 8px;
  opacity: 0.5;
  transition: opacity 300ms linear;
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 0 8px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SerchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
