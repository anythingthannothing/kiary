import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ReactElement,
} from 'react';
import { PolymorphicComponentProps } from '@/components/polymorphic-component';

export type PolymorphicComponentType<
  Props = {},
  DefaultTag extends ElementType = 'div',
> = <Tag extends ElementType = DefaultTag>(
  props: PolymorphicComponentProps<Tag> &
    Props & {
      ref?: ComponentPropsWithoutRef<Tag>['ref'];
    },
) => ReactElement | null;
