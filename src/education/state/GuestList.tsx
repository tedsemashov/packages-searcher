import React, { useState, useRef, useEffect } from "react";


const GuestList: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const onClick = () => {
        setName('');
        setGuests([...guests, name])
    };

    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => (
                <li key={guest}>{guest}</li>
            ))}
        </ul>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} type="text"/>
        <button onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList;