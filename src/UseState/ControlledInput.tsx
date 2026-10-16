import React, {useState} from "react";

export function ControlledInput(){
    const [text,setText] = useState('');

    const handleChange
        = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    return (
      <div>
          <input type="text" value={text} onChange={handleChange} />
          <p>Name: {text}</p>
      </div>
    );
}