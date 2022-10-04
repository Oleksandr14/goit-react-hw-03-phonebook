import styled from 'styled-components';

export const LabelContainer = styled.label`
  display: block;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const SpanName = styled.span`
  display: block;
  color: green;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid gray;
  outline: ${p => p.theme.borders.none};
  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  }
`;
