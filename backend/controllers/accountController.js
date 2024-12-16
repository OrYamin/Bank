exports.getAccount = (req, res) => {
    const accounts = [
        { id: 1, name: 'Savings Account', balance: 10400 },
        { id: 2, name: 'Checking Account', balance: 200 },
    ];
    res.json(accounts); // Send JSON response to the frontend
};
