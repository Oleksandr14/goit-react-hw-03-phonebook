import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;

  margin-bottom: ${p => p.theme.space[4]}px;

  padding: ${p => p.theme.space[3]}px;
  width: 320px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
`;

export const Input = styled.input`
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  border: 1px solid gray;
  border-radius: ${p => p.theme.radii.normal};
  outline: ${p => p.theme.borders.none};
  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  }
`;

export const NameLabel = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.primary};
`;

export const Button = styled.button`
  display: inline-block;
  width: 116px;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  cursor: pointer;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
