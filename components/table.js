import styles from '../styles/Table.module.css';

export default function Table(props) {
        return <>
        <table className={styles.table}>
            <thead><tr>
                    {props.headers.map(key =>
                        <th key={key} className={styles.highlightable + " " + (sortKey===key ? styles.selected : styles.button)} onClick={props.onHeaderClick}>
                            {key} {sortKey===key ? (ascending ? <i className="down arrow"/> : <i className="up arrow"/>) : ""}
                        </th>
                    )}
            </tr></thead>
            <tbody>
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
        {filtered.length === 0 ? "No results" : ""}
        </>
}
