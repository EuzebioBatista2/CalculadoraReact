import styles from './Display.module.css'
export default function Display(props) {
    let classes = `${styles.valueDisplay}`
    classes += props.historic ? ` ${styles.historic}` : ''
    return (
        <div className={styles.container}>
            <h1 className={classes}>
                {props.value}
            </h1>
        </div>
    )
}