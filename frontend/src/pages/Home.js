import React, { useState, useEffect } from 'react';

function Home() {
    const [accounts, setAccounts] = useState([]);

    // Fetch data from the backend API
    useEffect(() => {
        fetch('/api/accounts') // Assumes the backend runs on the same server or uses a proxy
            .then(response => response.json())
            .then(data => setAccounts(data))
            .catch(error => console.error('Error fetching accounts:', error));
    }, []);

    return (
        <div className="home">
            <h2>Welcome to Your Banking App</h2>
            <p>Here are your accounts:</p>
            <ul>
                {accounts.map(account => (
                    <li key={account.id}>
                        {account.name}: ${account.balance}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
