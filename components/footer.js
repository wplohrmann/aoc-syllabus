const style = {
    "display": "flex",
    "flex-direction":"column",
    "align-items":"center",
};
const linkStyle = {
    "font-size":"x-large",
    "text-decoration":"none",
    "color":"#cccccc"
};

export default function Footer(props) {
    return  <footer style={style}>
                <a style={linkStyle} href={props.url}>{props.text}</a>
            </footer>
}
