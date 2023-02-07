import styles from "../styles/chat.module.css"
export default function Messages({ messages }) {
    return (
        <div className={styles.messages}>
            {
                messages.map((message) => {
                    return (
                        <div className={styles.message} key={message.id}>
                            <div className={styles.messageContent}>
                                <div className={styles.messageAuthor}>{message.author}</div>
                                <div className={styles.messageText}>{message.body}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}