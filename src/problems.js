import React, { useState } from 'react';
import styles from '../styles/Problems.module.css';
import * as data from '../data/problems.json';

const problems = data.default;

export default function Problems() {
    const [filterInput, setFilterInput] = useState("");
    const [sortKey, setSortKey] = useState("Year");
    const [ascending, setAscending] = useState(true);

    const filtered = problems.filter(problem => {
        return problem.Title.toLowerCase().includes(filterInput.toLowerCase());
    }).sort((p1, p2) => {
        const cmp = p1[sortKey] - p2[sortKey];
        const cmp2 = p1[sortKey].localeCompare(p2[sortKey]);
        return (ascending ? 1 : -1) * (!isNaN(cmp) ? cmp : (2 * p1[sortKey].localeCompare(p2[sortKey]) - 1));
    });

    return <>
        <p className={styles.description}>
            List of Advent of Code problems, filterable by title, year, topics etc.
        </p>
        <label>Filter: <input type="text" value={filterInput} onChange={(x) => setFilterInput(x.target.value)}/></label>
        <table>
        <tbody>
        <tr>
            {Object.keys(problems[0]).map(key => <th key={key}><button className={sortKey===key ? styles.selected : styles.button} onClick={() => {
                if (sortKey == key) {
                    setAscending(!ascending);
                } else {
                    setAscending(true);
                }
                return setSortKey(key);
            }}>{key} {sortKey===key ? (ascending ? <i className="down arrow"/> : <i className="up arrow"/>) : ""}</button></th>)}
        </tr>
        {filtered.map(problem => (
            <tr key={problem.Title} className={styles.row}>
                {Object.keys(problem).map(key => <td>{key=="Title" ? <a href={`https://adventofcode.com/${problem["Year"]}/day/${problem["Day"]}`}>{problem[key]}</a> : problem[key]}</td>)}
            </tr>
        ))}
        </tbody>
        </table>
        {filtered.length === 0 ? "No results" : ""}
    </>
}
