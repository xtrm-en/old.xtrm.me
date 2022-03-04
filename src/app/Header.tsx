import Icon from '@ailibs/feather-react-ts'

function Header() {
    return (
        <div className="container max-w-screen-sm mx-auto pb-10 flex justify-center">
            <img src="https://avatars.githubusercontent.com/u/26600206?v=4" alt="xtrm-logo" className="rounded h-32"></img>
            <div className="px-4">
                <h1 className="font-bold text-2xl">
                    Heya 👋 I'm xtrm.
                </h1>
                <div className="px-1 py-2 inline-flex">
                    <div className='px-1'>
                        <a href='https://github.com/xtrm-en'>
                            <Icon name='github' strokeWidth={1.3} />
                        </a>
                    </div>
                    <div className='px-1'>
                        <a href='https://twitter.com/xtrmdev'>
                            <Icon name='twitter' strokeWidth={1.3} />
                        </a>
                    </div>
                    <div className='px-1'>
                        <a href='https://youtube.com/c/xtrmdev'>
                            <Icon name='youtube' strokeWidth={1.3} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header