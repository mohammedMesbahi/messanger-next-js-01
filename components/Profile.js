import styles from "../styles/chat.module.css"

export default function Profile({user}){
    return (
        <div className={styles.me} >
                <img src={user.avatar} />
                <div className={styles.info}>
                    <div className={styles.name}>{user.name}</div>
                    <div className={styles.lastMessage}>{user.email}</div>
                </div>
            </div>
    )
}