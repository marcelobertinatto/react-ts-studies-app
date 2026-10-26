import { buttonStyle } from "../../styles/ButtonStyle.tsx";
import { type Customer } from "../../types/Customer.tsx";
interface CustomerCardProps {
userData: Customer[];
onHandleRemove: (id: number) => void;
children?: React.ReactNode;
}
export function CustomerCard({userData, onHandleRemove, children}: CustomerCardProps) {    

    const cardStyle = {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        fontFamily: 'system-ui, sans-serif'
    };

    const titleStyle = {
        margin: '0 0 8px 0',
        fontSize: '1.25rem',
        color: '#333333'
    };

    return (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '16px' }}>
            {userData?.map(customer => (
                    <div key={customer.id} style={cardStyle}>
                        <h3 style={titleStyle}>{customer.name}</h3>
                        <button style={buttonStyle} onClick={() => onHandleRemove(customer.id)}>
                            Remove
                        </button>
                    </div>
                ))
            }
            {children} 
        </div>
    )

}