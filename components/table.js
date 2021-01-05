import styles from '../styles/Table.module.css';
import classNames from 'classnames/bind'

export default function Table(props) {
        return <div className={styles.table}>
        <table>
            <thead><tr>
                    {props.headers.map(key =>
                        <th key={key} style={{"textAlign":"left"}} className={classNames(styles.highlightable, (props.sortKey===key ? styles.selected : styles.button))} onClick={props.onHeaderClick}>
                            {props.headerElement(key)}
                        </th>
                    )}
            </tr></thead>
            <tbody className={styles.tbody}>
                {props.rows.map(problem => (
                    <tr key={problem.Title} className={styles.highlightable}>
                        {Object.keys(problem).map(key => <td className={styles.element}>
                            <a className={styles.problemLink} href={props.rowLink(problem)}>
                                {problem[key]}
                            </a>
                        </td>)}
                    </tr>
                ))}
            </tbody>
        </table>
        {props.rows.length === 0 ? "No results" : ""}
        </div>
}
