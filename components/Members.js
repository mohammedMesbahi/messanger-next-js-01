import styles from "../styles/chat.module.css"

export default function Members({ members }) {
    
    return (
        <div>
            <ul className={styles.listOfMembers}>
                {members.map(member => (
                    <li className={styles.memeber} key={member.id}>
                        <img src={member.profileUrl} />
                        <div className={styles.info}>
                            <div className={styles.name}>{member.name}</div>
                            <div className={styles.lastMessage}>{member.custom.title}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}