import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
} from 'react';

export type PolymorphicComponentProps<Tag extends ElementType> = {
  as?: Tag;
  children?: ReactNode;
} & ComponentPropsWithoutRef<Tag>;

export const PolymorphicComponent = forwardRef(
  <Tag extends ElementType>(
    { as, children, ...restProps }: PolymorphicComponentProps<Tag>,
    ref: ComponentPropsWithRef<Tag>['ref'],
  ): ReactElement => {
    const Wrapper = as ?? 'div';
    return (
      <Wrapper ref={ref} {...restProps}>
        {children}
      </Wrapper>
    );
  },
);
