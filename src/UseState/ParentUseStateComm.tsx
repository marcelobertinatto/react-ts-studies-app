import {ChildUseStateComm} from "./ChildUseStateComm.tsx";

export function ParentUseStateComm(){
    const handleUserNameChange = (name:string) => {
        console.log("name: ", name);
    }

    return (
        <ChildUseStateComm onUserNameChange={handleUserNameChange} />
    );
}