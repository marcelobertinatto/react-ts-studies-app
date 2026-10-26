import {type User, UserCard} from "./UserCard.tsx";
import {useState} from "react";

export function UserList() {
    const [count, setCount] = useState(0);
    const [newName, setName] = useState("");

    const users: User[] = [
        {id: 1, name: "Marcelo"},
        {id: 2, name: "Joao"}
    ];

    const handleDelete = () => {
        setCount(count + 1);
        console.log("count:"+count);
    }

    const handleChangeName = (name: string) => {
        alert("name before changing: "+newName);
        setName(name);
        alert("name after changing: "+name);
    }

    return <UserCard usersData={users} onDelete={handleDelete} onChangeName={handleChangeName} />;
}