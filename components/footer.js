const style = {
    "display": "flex",
    "flexDirection":"column",
    "alignItems":"center",
};
const linkStyle = {
    "fontSize":"x-large",
    "textDecoration":"none",
    "color":"#cccccc"
};

export default function Footer(props) {
    return  <footer style={style}>
                <a style={linkStyle} href={props.url}>{props.text}</a>
            </footer>
}
