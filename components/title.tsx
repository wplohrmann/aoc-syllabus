import styles from '../styles/Title.module.css'

type Props = {
  text: string;
}

export default function Title(props: Props) {
    return <h1 className={styles.title}>{props.text}</h1>;
}
