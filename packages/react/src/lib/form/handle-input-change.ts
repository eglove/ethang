import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface HandleInputChangeProperties<StateType> {
    event: ChangeEvent;
    setFormState: Dispatch<SetStateAction<StateType>>;
    onChange?: (event: ChangeEvent) => void;
}

export const handleInputChange = <StateType>(properties: HandleInputChangeProperties<StateType>): void => {
    const eventTarget = properties.event.target as unknown as {
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

    properties.setFormState(formState_ => {
        return {
            ...formState_,
            [name]: value,
        }
    })

    properties?.onChange?.(properties.event);
}
