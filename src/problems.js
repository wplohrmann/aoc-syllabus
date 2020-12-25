import React, { useState } from 'react';
import * as data from '../data/problems.json';

const problems = data.default;

export default function Problems() {
    const [filterInput, setFilterInput] = useState("");

    const filtered = problems.filter(problem => { 
        return problem.Title.toLowerCase().includes(filterInput.toLowerCase());
    });

    return <>
        <label>Filter: <input type="text" value={filterInput} onChange={(x) => setFilterInput(x.target.value)}/></label>
        <table>
        <tbody>
        <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Day</th>
        </tr>
        {filtered.map(problem => (
            <tr key={problem.Title}>
                <td>{problem.Title}</td>
                <td>{problem.Year}</td>
                <td>{problem.Day}</td>
            </tr>
        ))}
        </tbody>
        </table>
        {filtered.length === 0 ? "No results" : ""}
    </>
}
