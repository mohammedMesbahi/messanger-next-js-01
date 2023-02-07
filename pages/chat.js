import Router from 'next/router'
import { authInitialProps } from 'lib/auth';
import { NextResponse } from 'next/server';
import LeftSidebar from '@/components/LeftSideBar';
import Channel from '@/components/Channel';
import RightSidebar from '@/components/RightSidebar';
import styles from '../styles/chat.module.css';
import {messages,members } from '../localDatabase'
const chat = (props) => {
    const user = {
        id:"user_3c4400761cba4b65b77b6cae55fc21eb",
        name: "Mark Kelley",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        email: "hamza@gmail.com"
    };
    const chats = members;
    return (
        <>
            <div className={styles.container} >
                <LeftSidebar user={user} chats={chats} />
                <Channel user={user} messages={messages} />
                <RightSidebar members={members} />
            </div>
        </>
    );
}
export const getServerSideProps = authInitialProps(true);

export default chat;