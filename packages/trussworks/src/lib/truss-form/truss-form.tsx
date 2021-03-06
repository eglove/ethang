import { ErrorMessage, Fieldset, Form } from '@trussworks/react-uswds';
import { OptionalFormProps } from '@trussworks/react-uswds/lib/components/forms/Form/Form';
import React, { FieldsetHTMLAttributes, FormEvent, ReactNode } from 'react';

interface FieldsetProperties {
  className?: string;
  legend?: ReactNode;
  legendStyle?: 'default' | 'large' | 'srOnly';
}

interface TrussFormProperties {
  children: ReactNode;
  disabled?: boolean;
  errorMessage?: string;
  fieldSetProperties?: FieldsetProperties &
    FieldsetHTMLAttributes<HTMLFieldSetElement>;
  formProperties?: OptionalFormProps;
  legend?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const TrussForm = ({
  onSubmit,
  formProperties,
  fieldSetProperties,
  errorMessage,
  children,
  disabled,
  legend,
}: TrussFormProperties): JSX.Element => {
  return (
    <Form onSubmit={onSubmit} {...formProperties}>
      <Fieldset
        aria-disabled={disabled}
        disabled={disabled}
        legend={legend}
        legendStyle="large"
        {...fieldSetProperties}
      >
        {typeof errorMessage !== 'undefined' && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        {children}
      </Fieldset>
    </Form>
  );
};
