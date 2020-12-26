export default function filter(problem, query) {
    const queries = query.split(" ");
    return all(queries.map(singleQuery => {
        q_l = singleQuery.toLowerCase();
        return any(Object.keys(problem).map(_ => true));
    }));
}
