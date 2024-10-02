import React from 'react';
import './Header.css';
import Display from "../Dropdowns/Dropdowns";

function Header({ grouping, setGrouping, ordering, setOrdering }) {
    return (
        <header>
            <Display
                grouping={grouping} 
                setGrouping={setGrouping} 
                ordering={ordering} 
                setOrdering={setOrdering} 
            />
        </header>
    );
}

export default Header;
