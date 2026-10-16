import {ChildUserCard} from "./ChildUserCard.tsx";
import type {User} from "./ChildSendingData.tsx";

export function ParentUserList(){
    const users: User[] = [
        { id: 3, name: "Mary" },
        { id: 1, name: "Marcelo" },
        { id: 2, name: "John" }
    ]

    return (
        <div>
            {
                users.map((u: User) => (
                    <ChildUserCard key={u.id} user={u} />
                ))
            }
        </div>
    );
}