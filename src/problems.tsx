import React, { useState } from 'react';
import problems from '../data/problems.json';
import Table from '../components/table'

export type Problem = {
  Title: string;
  Year: string;
  Day: string;
  "Solves (both stars)": string;
  "Solves (one star)": string;
  "First solve (both stars)": string;
  "100th solve (one star)": string;
};

// const problems: Problem[] = data.default;

export default function Problems() {
    const [filterInput, setFilterInput] = useState("");
    const [sortKey, setSortKey] = useState("Year");
    const [ascending, setAscending] = useState(true);

    const filtered = problems.filter(problem => {
        return problem.Title.toLowerCase().includes(filterInput.toLowerCase());
    }).sort((p1, p2) => {
        var cmp;
        const field1 = p1[sortKey as keyof Problem];
        const field2 = p2[sortKey as keyof Problem];
        if (typeof field1 === "string" && typeof field2 === "string") {
          cmp = 2 * field1.localeCompare(field2) - 1;
        } else if (typeof field1 === "number" && typeof field2 === "number") {
          cmp = field1 - field2;
        } else {
          throw Error;
        }
        return (ascending ? 1 : -1) * cmp;
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
                return setSortKey(key as keyof Problem);
            }}
            rows={filtered}
            headerElement={key => <>{key} {sortKey===key ? (ascending ? <i className="down arrow"/> : <i className="up arrow"/>) : ""}</>}
        />
    </>
}
