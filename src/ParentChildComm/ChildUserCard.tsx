type User = {
    id: number;
    name: string;
}

type UserCardProps = {
    user: User;
}

export function ChildUserCard({user}:UserCardProps) {

    return (
        <div>
            {user.name}
        </div>
    );
}