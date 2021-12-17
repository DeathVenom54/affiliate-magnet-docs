import React from "react";
import {FC} from "react";

interface DiscordChatProps {
  username: string;
  avatar?: string;
  role?: string;
}

const DiscordChat: FC<DiscordChatProps> =  (props) => {
  const now = new Date()
  const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`

  return <div className="discord">
    <img src={props.avatar || "https://cdn.discordapp.com/avatars/289677961349824512/f382f399679d9f0aa5d94aada201eef9.webp?size=80"} alt=""/>
    <div className="message">
      <div>
        <span className="username" style={{ color: props.role || '#fff' }}>{props.username}</span>
        <span className="time">Today at {time}</span>
      </div>
      <pre className="content">{props.children}</pre>
    </div>
  </div>
}

export default DiscordChat