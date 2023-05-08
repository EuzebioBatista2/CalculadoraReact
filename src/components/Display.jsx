import styles from './Display.module.css'
export default function Display(props) {
    let classes = `${styles.valueDisplay}`
    let container = `${styles.container}`
    classes += props.historic ? ` ${styles.historic}` : ''
    container += props.memory ? ` ${styles.memory}` : ''
    return (
        <div className={container}>
            <div className={classes}>
                <h1>{props.value}</h1>
            </div>
        </div>
    )
}