import styles from "../styles/chat.module.css"
export default function DirecChatsProvider({chats}) {
    return (
        <div className={styles.directChats}>
            {
                chats.map(user => {
                    <div className={styles.directChat} key={user.id}>
                        <img src={user.profileUrl} />
                        <div className="info">
                            <div className={styles.name}>{user.name}</div>
                            <div className={styles.lastMessage}>{user.custom.title}</div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}