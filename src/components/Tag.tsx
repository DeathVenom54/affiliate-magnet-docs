import React from "react"

interface TagProps {
  text: string
  color: string
  url?: string
}

export default ({ text, color, url }: TagProps) => {
  if (url) {
    return <a href={url} style={{
      background: color
    }} className="tag">{text}</a>
  } else {
    return <span style={{
      background: color
    }}  className="tag">{text}</span>
  }
}