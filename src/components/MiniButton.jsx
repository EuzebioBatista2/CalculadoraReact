import styles from './MiniButton.module.css'
export default function MiniButton(props) {
    return (
        <button className={ styles.button } style={{ backgroundColor:`${props.color}` }}></button>
    )
}