import {ChildComm} from "./ChildComm.tsx";

export function ParentComm(){
    const handleMessage =(message: string) => {
        console.log(message);
    };

    return (
        <div>
            <ChildComm handleReceivingMessage={handleMessage} />
        </div>
    );
}