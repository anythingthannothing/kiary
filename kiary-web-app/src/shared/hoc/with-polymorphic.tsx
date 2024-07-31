import {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '@/components/polymorphic-component';
import {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactElement,
} from 'react';

export const withPolymorphic = <Props, Tag extends ElementType>(
  Component: (
    props: Props &
      PolymorphicComponentProps<Tag> & {
        PolymorphicComponent: typeof PolymorphicComponent;
      },
    ref?: ComponentPropsWithRef<Tag>['ref'],
  ) => ReactElement | null,
) => {
  return forwardRef((props: Props & PolymorphicComponentProps<Tag>, ref) => {
    return (
      <Component
        PolymorphicComponent={PolymorphicComponent}
        ref={ref}
        {...props}
      />
    );
  });
};
