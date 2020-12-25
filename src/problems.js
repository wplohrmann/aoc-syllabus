import React, { useState } from 'react';

const problems = [
    {"Day": 1, "Title": "Haha", "Year": "2020"},
    {"Day": 2, "Title": "Hoho", "Year": "2021"},
    {"Day": 2, "Title": "Hihi", "Year": "2021"},
];

export default function Problems() {
    const [filterInput, setFilterInput] = useState("");

    return <>
        <label>Filter<input type="text" value={filterInput} onChange={(x) => setFilterInput(x.target.value)}/></label>
        <table>
        <tbody>
        <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Day</th>
        </tr>
        {problems.filter(problem => {console.log(problem, filterInput); return problem.Title.includes(filterInput);}).map(problem => (
            <tr key={problem.Title}>
                <td>{problem.Title}</td>
                <td>{problem.Year}</td>
                <td>{problem.Day}</td>
            </tr>
        ))}
        </tbody>
        </table>
    </>
}
