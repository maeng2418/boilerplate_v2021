declare module 'sample' {
  import { IStyledComponentProps } from 'styled-components-props';
  interface ISampleProps extends IStyledComponentProps {
    onClick?: () => {};
  }
}
