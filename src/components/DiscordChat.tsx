import React from "react";
import {FC} from "react";
import styles from './DiscordChat.module.css'

interface DiscordChatProps {
  username: string;
  avatar?: string;
  role?: string;
}

const DiscordChat: FC<DiscordChatProps> =  (props) => {
  const now = new Date()
  const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`

  return <div className={styles.discord}>
    <img className={styles.avatar} src={props.avatar || "https://media.discordapp.net/attachments/948776154586816542/953261878472224818/AvatarRound.png"} alt=""/>
    <div className={styles.message}>
      <div>
        <span className={styles.username} style={{ color: props.role || '#fff' }}>{props.username}</span>
        <span className={styles.time}>Today at {time}</span>
      </div>
      <pre className={styles.content}>{props.children}</pre>
    </div>
  </div>
}

export default DiscordChat