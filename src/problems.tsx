import React, { useState } from 'react';
import * as data from '../data/problems.json';
import Table from '../components/table'

const problems = data.default;

export default function Problems() {
    const [filterInput, setFilterInput] = useState("");
    const [sortKey, setSortKey] = useState("Year");
    const [ascending, setAscending] = useState(true);

    const filtered = problems.filter(problem => {
        return problem.Title.toLowerCase().includes(filterInput.toLowerCase());
    }).sort((p1, p2) => {
        const cmp = p1[sortKey] - p2[sortKey];
        return (ascending ? 1 : -1) * (!isNaN(cmp) ? cmp : (2 * p1[sortKey].localeCompare(p2[sortKey]) - 1));
    });

    return <>
        <p>
            List of Advent of Code problems, filterable by title and sortable by each column
        </p>
        <label>Filter: <input type="text" value={filterInput} onChange={(x) => setFilterInput(x.target.value)}/></label>
        <Table 
            headers={Object.keys(problems[0])}
            rowLink={problem => `https://adventofcode.com/${problem["Year"]}/day/${problem["Day"]}`}
            onHeaderClick={(key) => {
                if (sortKey == key) {
                    setAscending(!ascending);
                } else {
                    setAscending(true);
                }
                return setSortKey(key);
            }}
            rows={filtered}
            headerElement={key => <>{key} {sortKey===key ? (ascending ? <i className="down arrow"/> : <i className="up arrow"/>) : ""}</>}
        />
               
    </>
}
