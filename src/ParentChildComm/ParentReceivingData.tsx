import {ChildSendingData, type User} from "./ChildSendingData.tsx";


export function ParentReceivingData(){
    const handleUserSelected = (user: User) => {
        console.log("Selected user:",user);
    }

    return (
        <ChildSendingData onUserSelected={handleUserSelected} />
    );
}