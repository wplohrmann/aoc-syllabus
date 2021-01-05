import styles from '../styles/Main.module.css'

type Props = {
  children: any
}

export default function Main(props: Props) {
    return <main className={styles.main}>{props.children}</main>
}
