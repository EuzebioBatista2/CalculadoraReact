import styles from './Button.module.css'
export default function Button(props) {
    return(
        <button className={styles.buttons}>{props.numero}</button>
    )

}