export type User = {
    id: number;
    name: string;
};

interface ChildProps {
    onUserSelected:(user: User) => void;
}

export function ChildSendingData({onUserSelected}:ChildProps) {
    const user: User = {
        id: 10,
        name: "Marcelo"
    };

    return (
      <button onClick={() => onUserSelected(user)}> Select User </button>
    );
}