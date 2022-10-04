import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.normal};

  & + & {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  cursor: pointer;
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const Text = styled.p`
  margin-left: 8px;
`;
