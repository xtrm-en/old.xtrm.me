import SocialLink from './SocialLink'

function Header() {
    return (
        <div className="align-center inline-flex">
            <img src="https://avatars.githubusercontent.com/u/26600206?v=4" alt="xtrm-logo" className="rounded w-20"></img>
            <div className="flex-col px-1">
                <p className="font-bold ">
                    Heya 👋 I'm xtrm.
                </p>
                <div className="px-2">
                    <SocialLink />
                </div>
            </div>
        </div>
    )
}

export default Header