import { Youtube, Twitter, Github, Discord, Facebook } from "@icons-pack/react-simple-icons";

import SocialBox from "./SocialBox";
import LinkBox from "./LinkBox";
import Link from "./Link";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white font-light">
        <div className="container max-w-screen-sm mx-auto pb-10 flex justify-center">
            <img src="./i/logo.png" alt="xtrm-logo" className="rounded h-32"></img>
            <div className="px-4">
                <h1 className="font-bold text-2xl">
                    Heya 👋 I'm killian.
                </h1>
                <SocialBox>
                    <Link url="https://youtube.com/c/xtrmdev"><Youtube /></Link>
                    <Link url="https://twitter.com/xtrmdev"><Twitter /></Link>
                    <Link url="https://github.com/xtrm-en"><Github /></Link>
                    <Link url="https://discord.stardustenterprises.fr"><Discord /></Link>
                    <Link url="https://youtu.be/-pHhb4biR9k"><Facebook /></Link>
                </SocialBox>
                <LinkBox>
                    <Link url="mailto:contact@xtrm.me">contact</Link>
                    <Link url="https://test.xtrm.me">testing</Link>
                    <Link url="https://source.xtrm.me">sources</Link>
                </LinkBox>
            </div>
        </div>
    </div>
  )
}

export default App
