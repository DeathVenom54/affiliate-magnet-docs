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
    <img className={styles.avatar} src={props.avatar || "https://cdn.discordapp.com/avatars/289677961349824512/7d84502d8d56d7fb96ec9cf81b261d4e.webp?size=80"} alt=""/>
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