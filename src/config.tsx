import {
    TbBrandGithub,
    TbBrandSteam,
    TbBrandTelegram,
    TbBrandTwitter,
    TbBrandWeibo,
    TbCookie,
    TbNetwork,
    TbSourceCode,
} from 'react-icons/tb'
import ProfilePictureOriginal from './assets/images/Kaho.jpg'
import ProfilePictureAvif from './assets/images/Kaho.jpg?format=avif'
import ProfilePictureJpeg from './assets/images/Kaho.jpg?format=jpeg'
import ProfilePicturePng from './assets/images/Kaho.jpg?format=png'
import ProfilePictureWebp from './assets/images/Kaho.jpg?format=webp'
import { ProfileNameStandout, ProfilePictureSources } from './components/display/header'
import { Description, DescriptionTitle, ExternalLink, Paragraph } from './components/typography'
import PanelBackground from './assets/images/blueprint-panels.svg'
import FooterBackground from './assets/images/blueprint-footer.svg'
import PageBackground from './assets/images/blueprint-bg.svg'
import { Row } from './components/layout'

export const PANEL_BACKGROUND = PanelBackground
export const FOOTER_BACKGROUND = FooterBackground
export const PAGE_BACKGROUND = PageBackground

export const PROFILE_PICTURE: ProfilePictureSources = {
    src: ProfilePictureOriginal,
    avif: ProfilePictureAvif,
    jpeg: ProfilePictureJpeg,
    png: ProfilePicturePng,
    webp: ProfilePictureWebp,
}

export const PROFILE_NAME = (
    <>
        {/* amphi[ne]ko */}
        <ProfileNameStandout
            backgroundColor="hsla(0, 100%, 82%, 0.25)"
            href="https://en.wikipedia.org/wiki/Insulated-gate_bipolar_transistor"
            hoverRuby="igbt"
            hoverColor="hsla(0, 35%, 57%, 0.75)"
            ruby="10"
        >
            460
        </ProfileNameStandout>
    </>
)

export const PROFILE_TAGS: ProfileHeaderTagGroup[] = [
    {
        title: 'also-known-as',
        tags: [
            {
                tag: 'shiromaru',
                comment: 'since 202?',
            },
            {
                tag: 'binbin',
                comment: 'since 201?',
            },
        ],
    },
    {
        title: 'area-of-work',
        tags: [
            {
                tag: 'Analog',
                icon: <TbCpu />,
            },
            {
                tag: 'System',
                icon: <TbSourceCode />,
            },
        ],
    },
    {
        title: 'languages',
        tags: [
            {
                tag: 'zh-Hans',
                comment: 'native',
            },
            {
                tag: 'en-US',
            },
            {
                tag: 'ja',
                comment: 'fluent',
            },
        ],
    },
]

export const ACCOUNTS: Accounts[] = [
    {
        type: 'oss',
        accounts: [
            {
                platform: 'GitHub',
                name: 'tobu61106f',
                url: 'https://github.com/tobu61106f/',
                icon: <TbBrandGithub />,
                iconBackground: '#000000',
            },
        ],
    },
    {
        type: 'social-accounts',
        accounts: [
            {
                platform: 'Telegram',
                name: '@TY5189F',
                url: 'https://telegram.me/TY5189F',
                icon: <TbBrandTelegram />,
                iconBackground: '#0088ccaa',
            },
            {
                platform: 'Twitter',
                name: '@igbt460',
                url: 'https://twitter.com/42__hayabusa/',
                icon: <TbBrandTwitter />,
                iconBackground: '#1da1f2aa',
            },
            {
                platform: 'Weibo',
                name: 'redacted',
                icon: <TbBrandWeibo />,
                iconBackground: '#ff9933aa',
                redacted: true,
            },
        ],
    },
]

export const DESCRIPTION_PARAGRAPHS = (
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>what am i doing?</DescriptionTitle>
            <Paragraph>FAANG network enginner since 2022.</Paragraph>
            <Paragraph>passionate full-stack software developer and open-source contributor.</Paragraph>
            <Paragraph>amateur network engineer operating own Internet autonomous systems.</Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>what do i love?</DescriptionTitle>
            <Paragraph>ardently love of FPS, simulation and AVG.</Paragraph>
            <Paragraph>rhythm game is LIFE!</Paragraph>
            <Paragraph>
                retired and mission-collection only{' '}
                <ExternalLink href="https://en.wikipedia.org/wiki/Ingress_(video_game)">Ingress</ExternalLink> agent.
            </Paragraph>
            <Paragraph>
                <del className="deleted">dreamed to be a civil aviation pilot.</del>
            </Paragraph>
        </Description>
    </Row>
)

export const COPYRIGHT = 'Copyright © 2015-2024 amphineko. Illustrations have their own licenses.'

interface Account {
    platform: string
    name: string | JSX.Element
    url?: string
    icon: JSX.Element
    iconBackground: string
    redacted?: boolean
}

interface Accounts {
    type: string
    accounts: Account[]
}

interface ProfileHeaderTag {
    tag: string
    comment?: string
    icon?: JSX.Element
}

interface ProfileHeaderTagGroup {
    title: string
    tags: ProfileHeaderTag[]
}
