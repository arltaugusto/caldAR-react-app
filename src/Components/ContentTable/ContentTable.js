import React from 'react';
import ListItem from '../ListItem/ListItem';
import tableStyles from './content-table.module.css';

const ContentTable = (props) => (
        <div className={tableStyles.handleOverflow}>
            <table className={`${tableStyles.tableCell} ${tableStyles.tableStyle}`}>
                <thead className={tableStyles.tableTitles}>
                    <tr>
                        {props.columns.map((column) => <th key={column}>{column}</th>)}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map((value) => <ListItem
                                key={value._id}
                                id={value._id}
                                item={value}
                                notToShowKeys={props.notToShowKeys}
                                getForm={props.getForm}
                                handleUpdate={props.handleUpdate}
                                updateTitle={props.updateTitle}
                                deleteAction={props.removeAction}
                        />)
                    }
                </tbody>
            </table>
        </div>
);

export default ContentTable;
