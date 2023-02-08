import styles from "../styles/chat.module.css"
export default function DirectChats({ chats }) {
    return (
        <div className={styles.directChats}>
            {
                chats.map(user => {
                    return (
                        <div className={styles.directChat} key={user.id}>
                            <img src={user.profileUrl} />
                            <div className={styles.info}>
                                <div className={styles.name}>{user.name}</div>
                                <div className={styles.lastMessage}>{user.eTag}</div>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}