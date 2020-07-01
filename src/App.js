import React from 'react';

import Table from './components/Table/Table';

function App() {
    const students = [
        {
            name: 'Yono',
            age: 17,
            address: 'Serang',
            sex: 'male',
        },
        {
            name: 'Icha',
            age: 20,
            address: 'Pekanbaru',
            sex: 'female',
        },
        {
            name: 'Ahmad',
            age: 30,
            address: 'Jakarta',
            sex: 'male',
        },
        {
            name: 'Lily',
            age: 15,
            address: 'Bandung',
            sex: 'female',
        },
    ];
    return (
        <div className='App'>
            <Table />
        </div>
    );
}

export default App;
