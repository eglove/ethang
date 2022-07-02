import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";

export interface UseFormProperties {
    formActionAfterSubmit?: 'clear' | 'reset';
    onChange?: (event: ChangeEvent) => unknown;
    onSubmit?: (...arguments_: unknown[]) => unknown;
}

export interface UserFormReturn<StateType> {
    clearForm: () => void;
    formState: StateType;
    handleInputChange: (event: ChangeEvent) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
    setFormState: Dispatch<SetStateAction<StateType>>;
}

export const useForm = <StateType>(initialState: StateType, properties: UseFormProperties) => {
    const [formState, setFormState] = useState(initialState);

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

        if (typeof properties.onChange !== 'undefined') {
            properties.onChange(event);
        }
    }

    const clearForm = (): void => {
        const blankState = Object.fromEntries(
            Object.entries(formState).map(([key]) => {
                return [key, ''];
            })
        ) as unknown as StateType;

        setFormState(blankState);
    };

    const resetForm = (): void => {
        setFormState(initialState);
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        if (properties.formActionAfterSubmit === 'clear') {
            clearForm();
        } else if (properties.formActionAfterSubmit === 'reset') {
            resetForm();
        }

        if (typeof properties.onSubmit !== 'undefined') {
            properties.onSubmit();
        }
    }

    return {
        clearForm,
        formState,
        handleInputChange,
        handleSubmit,
        resetForm,
        setFormState,
    }
}
