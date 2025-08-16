import React from 'react';

const Message: React.FC = () => {

    const name = "Sims";
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
};

export default Message;