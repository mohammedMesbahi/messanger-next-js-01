
import SendIcon from '@mui/icons-material/Send';
import styles from "../styles/chat.module.css"
export default function Footer(options) {
    return (
        <div className={styles.footer}>
            <input type="text" placeholder="Type a message"/>
            <SendIcon fontSize='small'/>
        </div>
    )
}