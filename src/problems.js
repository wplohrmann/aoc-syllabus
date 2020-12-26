import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import * as data from '../data/problems.json';

const problems = data.default;

export default function Problems() {
    const [filterInput, setFilterInput] = useState("");

    const filtered = problems.filter(problem => { 
        return problem.Title.toLowerCase().includes(filterInput.toLowerCase());
    });

    return <>
        <p className={styles.description}>
            List of Advent of Code problems, filterable by title, year, topics etc.
        </p>
        <label>Filter: <input type="text" value={filterInput} onChange={(x) => setFilterInput(x.target.value)}/></label>
        <table>
        <tbody>
        <tr>
            {Object.keys(problems[0]).map(key => <th>{key}</th>)}
        </tr>
        {filtered.map(problem => (
            <tr key={problem.Title}>
                {Object.keys(problem).map(key => <td>{problem[key]}</td>)}
            </tr>
        ))}
        </tbody>
        </table>
        {filtered.length === 0 ? "No results" : ""}
    </>
}
