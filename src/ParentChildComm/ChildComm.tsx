interface ChildProps {
handleReceivingMessage:(message: string) => void;
}

export function ChildComm({handleReceivingMessage}:ChildProps){
    return (
        <button onClick={() => handleReceivingMessage('Hello from the child!')} >
            Send message
        </button>
    );
}