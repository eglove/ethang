import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";

export interface UseFormProperties {
    formActionAfterSubmit?: 'clear' | 'reset';
    onChange?: (event: ChangeEvent) => unknown;
    onError?: () => unknown;
    onSubmit?: (...arguments_: unknown[]) => unknown;
}

type FieldError<StateType> = Record<keyof StateType, string[] | undefined> | undefined;

export interface UseFormReturn<StateType> {
    clearFieldErrors: () => void;
    clearForm: () => void;
    fieldErrors: FieldError<StateType>;
    formError: string | undefined;
    setFormError: Dispatch<SetStateAction<string | undefined>>
    formState: StateType;
    handleInputChange: (event: ChangeEvent) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
    setFieldErrors: Dispatch<SetStateAction<FieldError<StateType>>>;
    setFormState: Dispatch<SetStateAction<StateType>>;
}

export const useForm = <StateType>(initialState: StateType, properties?: UseFormProperties): UseFormReturn<StateType> => {
    const [formState, setFormState] = useState(initialState);
    const [formError, setFormError] = useState<string>();
    const [fieldErrors, setFieldErrors] = useState<Record<keyof StateType, string[] | undefined>>();

    const clearFieldErrors = () => {
        setFieldErrors(undefined);
    }

    const handleInputChange = (event: ChangeEvent): void => {
        const eventTarget = event.target as unknown as {
            checked?: boolean;
            files: File[];
            name: string;
            type: string;
            value: string | boolean | number | File;
        };

        let {value} = eventTarget;
        const {name, type, files} = eventTarget;

        if (type === 'checkbox' && typeof eventTarget.checked === 'boolean') {
            value = eventTarget.checked;
        }

        if (type === 'number' && typeof value === 'string') {
            value = Number.parseFloat(value.replaceAll(',', ''))
        }

        if (type === 'file') {
            [value] = files;
        }

        setFormState(formState_ => {
            return {
                ...formState_,
                [name]: value,
            }
        })

        properties?.onChange?.(event);
    }

    const clearForm = (): void => {
        const blankState = Object.fromEntries(
            Object.entries(formState).map(([key]) => {
                return [key, undefined];
            })
        ) as unknown as StateType;

        setFormState(blankState);
    };

    const resetForm = (): void => {
        setFormState(initialState);
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (properties?.formActionAfterSubmit === 'clear') {
            clearForm();
        } else if (properties?.formActionAfterSubmit === 'reset') {
            resetForm();
        }

        if (typeof properties?.onSubmit !== 'undefined') {
            try {
                properties.onSubmit();
                clearFieldErrors();
                setFormError(undefined);
            } catch (error: unknown) {
                properties?.onError?.();

                if (error instanceof Error) {
                    setFormError(error.message);
                }
            }
        }
    }

    return {
        clearFieldErrors,
        clearForm,
        formError,
        setFormError,
        fieldErrors,
        setFieldErrors,
        formState,
        handleInputChange,
        handleSubmit,
        resetForm,
        setFormState,
    }
}
