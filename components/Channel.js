import Messages from "./Messages"
import Footer from "./Footer"
import styles from "../styles/chat.module.css"

export default function Channel({user,messages}) {
    return (
        <div className={styles.channel}>
            <div className={styles.header}>
                <img src={user.avatar} />
                <div className={styles.info}>
                    <div className={styles.name}>{user.name}</div>
                </div>
            </div>
            <Messages messages={messages} />
            <Footer />
        </div>
    )
}