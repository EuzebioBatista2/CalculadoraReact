import styles from './Buttons.module.css'
import Button from "./Button";

export default function Buttons(props) {
    return (
        <div className={styles.inputs}>
            <Button numero={'7'} {...props}/>
            <Button numero={'8'} {...props}/>
            <Button numero={'9'} {...props}/>
            <Button numero={'÷'} {...props}/>
            <Button numero={'DEL'} {...props}/>
            <Button numero={'C'} {...props}/>
            <Button numero={'4'} {...props}/>
            <Button numero={'5'} {...props}/>
            <Button numero={'6'} {...props}/>
            <Button numero={'*'} {...props}/>
            <Button numero={'('} {...props}/>
            <Button numero={')'} {...props}/>
            <Button numero={'1'} {...props}/>
            <Button numero={'2'} {...props}/>
            <Button numero={'3'} {...props}/>
            <Button numero={'-'} {...props}/>
            <Button numero={'x^'} {...props}/>
            <Button numero={'√'} {...props}/>
            <Button numero={'0'} {...props}/>
            <Button numero={','} {...props}/>
            <Button numero={'%'} {...props}/>
            <Button numero={'+'} {...props}/>
            <Button numero={'='} double {...props}/>
        </div>
        
    )
}