import SocialLink from './SocialLink'

function Header() {
    return (
        <div className="container max-w-screen-sm mx-auto pb-10 flex justify-center">
            <img src="https://avatars.githubusercontent.com/u/26600206?v=4" alt="xtrm-logo" className="rounded h-32"></img>
            <div className="px-4">
                <h1 className="font-bold text-2xl">
                    Heya 👋 I'm xtrm.
                </h1>
                <div className="px-2 inline-flex">
                    <SocialLink icon='fa-brands fa-github' url='https://github.com/xtrm-en' />
                    <SocialLink icon='fa-brands fa-twitter' url='https://twitter.com/xtrmdev' />
                </div>
            </div>
        </div>
    )
}

export default Header