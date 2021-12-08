import AdminOnlyTag from "@site/src/components/tags/AdminOnlyTag";
import ServerOnlyTag from "@site/src/components/tags/ServerOnlyTag";
import GlobalTag from "@site/src/components/tags/GlobalTag";
import React from "react";

type tagName = 'adminOnly' | 'serverOnly' | 'global'

export default ({ tags }: { tags: tagName[] }) => {
  const tagComps = tags.map(tag => {
    switch (tag) {
      case 'adminOnly':
        return AdminOnlyTag
      case 'serverOnly':
        return ServerOnlyTag
      case 'global':
        return GlobalTag
    }
  })

  return <div className="tag-bar">
    {tagComps}
  </div>
}