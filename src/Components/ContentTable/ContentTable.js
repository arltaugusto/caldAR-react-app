import React from 'react';
import ListItem from '../ListItem/ListItem';
import tableStyles from './content-table.module.css';

const ContentTable = (props) => (
        <div className={tableStyles.handleOverflow}>
            <table className={`${tableStyles.tableCell} ${tableStyles.tableStyle}`}>
                <thead className={tableStyles.tableTitles}>
                    <tr>
                        {props.columns.map((column) => <th key={column}>{column}</th>)}
                    </tr>
                </thead>
                {
                    props.items.map((value) => <ListItem
                            key={value.id}
                            id={value.id}
                            item={value}
                    />)
                }
            </table>
        </div>

);
export default ContentTable;
