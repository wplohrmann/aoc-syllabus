import styles from '../styles/Footer.module.css'

export default function Footer(props) {
    return  <footer className={styles.footer}>
                <a className={styles.link} href={props.url}>{props.text}</a>
            </footer>
}
