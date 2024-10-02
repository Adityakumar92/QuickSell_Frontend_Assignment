import React, { useMemo } from 'react';
import Card from "../Card/Card";
import './Column.css';
import add from "../../../public/icons_FEtask/add.svg"
import threeDot from "../../../public/icons_FEtask/3_dot_menu.svg"
import { getPriorityIcon, getStatusIcon } from '../../utils/Helper';
import UserIcon from '../Userlcon/Userlcon';

function Column({ tickets, grouping, groupBy, userIdToData }) {

    const title = useMemo(() => {
        if (grouping === "status")
            return groupBy;
        if (grouping === "priority")
            return groupBy;
        if (grouping === "user")
            return userIdToData[groupBy].name;
    }, [grouping, groupBy]);

    const icon = useMemo(() => {
        if (grouping === "status")
            return getStatusIcon(groupBy);
        if (grouping === "priority")
            return getPriorityIcon(groupBy);
        if (grouping === "user")
            return <UserIcon name={userIdToData[groupBy].name} available={userIdToData[groupBy].available} />;
    }, [grouping, groupBy]);

    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <img src={add} alt="" />
                    <img src={threeDot} alt="" />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket) => (
                    <Card 
                        key={ticket.id} 
                        ticket={ticket} 
                        userData={userIdToData[ticket.userId]} 
                        hideStatusIcon={grouping === "status"} 
                        hideProfileIcon={grouping === "user"} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Column;
