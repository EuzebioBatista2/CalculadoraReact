import styles from './Button.module.css'
export default function Button(props) {
    let classes = `${styles.buttons}`
    classes += props.double ? ` ${styles.double}` : ''
    return(
        <button className={classes}  onClick={() => props.event(props.numero)}>{props.numero}</button>
    )

}