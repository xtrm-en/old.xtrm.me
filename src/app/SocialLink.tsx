import React from 'react'

interface SocialLinkProps {
    icon: string,
    url: string,
}

class SocialLink extends React.Component<SocialLinkProps, {}> {
    render() {
        const { icon, url } = this.props;
        return (
            <div className='m-1'>
                <a href={url}>
                    {icon}
                </a>
            </div>
        )
    }
}


export default SocialLink