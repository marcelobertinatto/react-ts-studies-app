export type User = {
    id: number,
    name: string
};

interface UserCardProps {
    usersData: User[];
    onDelete(): void;
    onChangeName(name: string): void;
}

export function UserCard({ usersData, onDelete, onChangeName }: UserCardProps ) {
    return (<div>
            {usersData.map((user) => (
                <div key={user.id} className="user-card">
                    <p>id: {user.id}</p>
                    <p>name: {user.name}</p>
                    <button onClick={() => onChangeName(user.name)}> Change Name</button>
                </div>
            ))}
            <button onClick={() => onDelete()}> Delete</button>

        </div>
    )
}