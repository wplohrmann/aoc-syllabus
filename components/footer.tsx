import styles from '../styles/Footer.module.css'

type Props = {
  url: string,
  text: string
}

export default function Footer(props: Props) {
    return  <footer className={styles.footer}>
                <a className={styles.link} href={props.url}>{props.text}</a>
            </footer>
}
