import React from 'react';

import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

class Table extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <TableHead />
                    <TableBody />
                </table>
            </div>
        );
    }
}

export default Table;
