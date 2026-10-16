import React, {useState} from "react";

type UserFormProps = {
    onUserNameChange(value: string): void;
}

export function ChildUseStateComm({onUserNameChange}: UserFormProps) {
    const [name,setName] = useState("");

    const handleUpdateUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName);
        onUserNameChange(newName);
    }

    return (
        <input type="text"
               value={name}
               onChange={handleUpdateUserName} />
    );
}