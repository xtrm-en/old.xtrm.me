import React from "react";
import Link from "../Link/Link"

function SocialBox({ children } : { children: React.ReactElement[] }) {
  return (
    <div className="px-1 py-2 flex flex-row justify-center items-center">
      {
        children
          .filter((el) => el.type === Link)  // Only keep children which are links
          .map((link, i) =>
            <React.Fragment key={i /* react complains without this prop */}>
              <a /* mastodon verification */ rel="me" href={link.props.url} className="px-2 hover:text-fuchsia-100">
                {link.props.children}
              </a>
            </React.Fragment>
          )
      }
    </div>
  )
}

export default SocialBox;
