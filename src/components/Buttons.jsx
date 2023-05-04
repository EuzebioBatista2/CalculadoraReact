import styles from './Buttons.module.css'
import Button from "./Button";

export default function Buttons(props) {
    return (
        <div className={styles.inputs}>
            <Button numero={'7'} />
            <Button numero={'8'} />
            <Button numero={'9'} />
            <Button numero={'/'} />
            <Button numero={'DEL'} />
            <Button numero={'C'} />
            <Button numero={'4'} />
            <Button numero={'5'} />
            <Button numero={'6'} />
            <Button numero={'*'} />
            <Button numero={'('} />
            <Button numero={')'} />
            <Button numero={'1'} />
            <Button numero={'2'} />
            <Button numero={'3'} />
            <Button numero={'-'} />
            <Button numero={'x²'} />
            <Button numero={'ROOT'} />
            <Button numero={'0'} />
            <Button numero={','} />
            <Button numero={'%'} />
            <Button numero={'+'} />
            <Button numero={'='} />
            <Button numero={'='} />
        </div>
        
    )
}