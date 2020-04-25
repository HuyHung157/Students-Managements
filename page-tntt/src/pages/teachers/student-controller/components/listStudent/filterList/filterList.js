import React, { useState, useRef } from 'react';

const FilterList = (props) => {
    const { onSubmit, onSubmitBirthDay } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermBirthDay, setSearchTermBirthDay] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        // console.log(e.target.name)
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;

        // SET -- 100 -- CLEAR, SET -- 500 --> SUBMIT
        // SET -- 500 --> SUBMIT
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value,
            };
            onSubmit(formValue)
        }, 500);
    }
    function handleSearchTermBirthday(e) {
        const value = e.target.value;
        setSearchTermBirthDay(value);
        if (!onSubmitBirthDay) return;

        // SET -- 100 -- CLEAR, SET -- 500 --> SUBMIT
        // SET -- 500 --> SUBMIT
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTermBirthDay: value
            };
            onSubmitBirthDay(formValue)
        }, 500);
    }

    return (
        <ul className="search__group">
            <li>
                <input type="text" placeholder="Tên"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    name="fullName"
                />
            </li>
            <li>
                <input type="number" placeholder="Năm sinh"
                    value={searchTermBirthDay}
                    onChange={handleSearchTermBirthday}
                    name="birthday"
                />
            </li>
            <li className="btn__search"><i className="fa fa-search"></i></li>
        </ul>
    );
}

export default FilterList;
