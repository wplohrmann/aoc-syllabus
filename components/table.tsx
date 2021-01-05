import React, { FunctionComponent } from 'react';
import styles from '../styles/Table.module.css';
import classNames from 'classnames/bind';

import type {Problem} from '../src/problems';


type Props = {
  rows: Problem[];
  headers: string[];
  onHeaderClick: (key: string) => void;
  rowLink: (problem: Problem) => string;
  headerElement: (key: string) => any;
}

export default function Table(props: Props) {
        return <div className={styles.table}>
        <table>
            <thead><tr>
                    {props.headers.map(key =>
                    <th key={key} style={{"textAlign":"left"}}
                      className={classNames(styles.highlightable)}
                      onClick={(_) => props.onHeaderClick(key)}>
                            {props.headerElement(key)}
                        </th>
                    )}
            </tr></thead>
            <tbody className={styles.tbody}>
                {props.rows.map(problem => (
                    <tr key={problem.Title} className={styles.highlightable}>
                        {Object.keys(problem).map(key => <td className={styles.element}>
                            <a className={styles.problemLink} href={props.rowLink(problem)}>
                                {problem[key as keyof Problem]}
                            </a>
                        </td>)}
                    </tr>
                ))}
            </tbody>
        </table>
        {props.rows.length === 0 ? "No results" : ""}
        </div>
}
