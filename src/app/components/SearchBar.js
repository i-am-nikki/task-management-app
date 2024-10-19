import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px"
            }}
        />
    );
};

export default SearchBar;