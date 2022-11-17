import React from "react";
import Link from "../Link/Link"

function LinkBox({ children } : { children: React.ReactElement[] }) {
  return (
    <div className="py-6 text-center">
      {
        children
          .filter((el) => el.type === Link)  // Only keep children which are links
          .map((link, i, arr) =>
            <React.Fragment key={i /* react complains without this prop */}>
              <a /* for mastodon */ rel="me" href={link.props.url} className="px-1 hover:text-fuchsia-200 hover:underline">
                {link.props.children}
              </a>
              { // We add a separator after each element that is not the last
                i !== arr.length -1 && <>-</>
              }
            </React.Fragment>
          )
      }
    </div>
  )
}

export default LinkBox;
