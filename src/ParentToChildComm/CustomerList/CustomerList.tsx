import { useState } from "react";
import { type Customer } from "../../types/Customer.tsx";
import { CustomerCard } from "./CustomerCard.tsx";
import { buttonStyle } from "../../styles/ButtonStyle.tsx";

const initialCustomers: Customer[] = [
    {
        id: 1,
        name: "Marcelo",
        email: "marcelo@example.com"
    },
    {
        id: 2,
        name: "Mary",
        email: "mary@example.com"
    },
    {
        id: 3,
        name: "John",
        email: "john@example.com"
    }
];

export function CustomerList() {

const [card, setCard] = useState<Customer[]>(initialCustomers);

const handleRemove = (idToRemove: number) => {
        setCard(currentCustomers => 
            currentCustomers.filter(customer => customer.id !== idToRemove));
};

const handleReset = () => {
        setCard(initialCustomers);
}

    return(
        <CustomerCard userData={card} onHandleRemove={handleRemove}>
            <button style={buttonStyle} onClick={handleReset}>
                Reset
            </button>
        </CustomerCard>
    )
}