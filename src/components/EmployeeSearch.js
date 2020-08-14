import React from "react";

import { SearchBar } from "../styles"

const EmployeeSearch = props => {
    return (
        // <h2>EmployeeSearch</h2>
        <SearchBar>
            <input
                type="text"
                name="searchTerm"
                id="searchTerm"
                placeholder="Search for employee here"
                onChange={props.handleInputChange}
                value={props.searchTerm}
            />
        </SearchBar>
    )
};

export default EmployeeSearch;