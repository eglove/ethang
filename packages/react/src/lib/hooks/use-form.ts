import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";

export interface UseFormProperties {
    formActionAfterSubmit?: 'clear' | 'reset';
    onChange?: (event: ChangeEvent) => unknown;
    onSubmit?: (...arguments_: unknown[]) => unknown;
}

export interface UserFormReturn<StateType> {
    clearFieldErrors: () => void;
    clearForm: () => void;
    fieldErrors: Record<keyof StateType, string | undefined>;
    formState: StateType;
    handleInputChange: (event: ChangeEvent) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
    setFieldErrors: Dispatch<SetStateAction<Record<keyof StateType, string | undefined>>>
    setFormState: Dispatch<SetStateAction<StateType>>;
}

export const useForm = <StateType>(initialState: StateType, properties?: UseFormProperties) => {
    const [formState, setFormState] = useState(initialState);
    const [fieldErrors, setFieldErrors] = useState<Record<keyof StateType, string[] | undefined>>();

    const clearFieldErrors = () => {
        setFieldErrors(undefined);
    }

    const handleInputChange = (event: ChangeEvent): void => {
        const eventTarget = event.target as unknown as {
            files: File[];
            name: string;
            type: string;
            value: string | number | File;
        };

        let {value} = eventTarget;
        const {name, type, files} = eventTarget;

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

        if (typeof properties?.onChange !== 'undefined') {
            properties.onChange(event);
        }
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
            properties.onSubmit();
        }
    }

    return {
        clearFieldErrors,
        clearForm,
        fieldErrors,
        setFieldErrors,
        formState,
        handleInputChange,
        handleSubmit,
        resetForm,
        setFormState,
    }
}
