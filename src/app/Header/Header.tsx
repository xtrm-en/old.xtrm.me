import { Youtube, Twitter, Github, Discord } from '@icons-pack/react-simple-icons';

function Header() {
    return (
        <div className="container max-w-screen-sm mx-auto pb-10 flex justify-center">
            <img src="https://avatars.githubusercontent.com/u/26600206?v=4" alt="xtrm-logo" className="rounded h-32"></img>
            <div className="px-4">
                <h1 className="font-bold text-2xl">
                    Heya 👋 I'm xtrm.
                </h1>
                <div className="px-1 py-2 inline-flex">
                    <div className='px-3'>
                        <a href='https://youtube.com/c/xtrmdev' className="hover:text-fuchsia-100">
                            <Youtube size={24} />
                        </a>
                    </div>
                    <div className='px-3'>
                        <a href='https://twitter.com/xtrmdev' className="hover:text-fuchsia-100">
                            <Twitter size={24} />
                        </a>
                    </div>
                    <div className='px-3'>
                        <a href='https://github.com/xtrm-en' className="hover:text-fuchsia-100">
                            <Github size={24} />
                        </a>
                    </div>
                    <div className='px-3'>
                        <a href='https://discord.stardustenterprises.fr' className="hover:text-fuchsia-100">
                            <Discord size={24} />
                        </a>
                    </div>
                </div>
                <p className='py-6'>
                    <a href="mailto:contact@xtrm.me" className="px-1 hover:text-fuchsia-200 hover:underline">
                        contact
                    </a>
                    -
                    <a href="https://portfolio.xtrm.me" className="px-1 hover:text-fuchsia-200 hover:underline">
                        portfolio
                    </a>
                    -
                    <a href="https://source.xtrm.me" className="px-1 hover:text-fuchsia-200 hover:underline">
                        sources
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Header