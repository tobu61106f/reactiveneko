import {
    TbBrandGithub,
    TbBrandTelegram,
    TbBrandTwitter,
    TbBrandWeibo,
    TbCpu,
    TbSourceCode,
} from 'react-icons/tb'
import { HiAcademicCap } from "react-icons/hi";

import ProfilePictureOriginal from './assets/images/Kaho.jpg'
import ProfilePictureAvif from './assets/images/Kaho.jpg?format=avif'
import ProfilePictureJpeg from './assets/images/Kaho.jpg?format=jpeg'
import ProfilePicturePng from './assets/images/Kaho.jpg?format=png'
import ProfilePictureWebp from './assets/images/Kaho.jpg?format=webp'
import { ProfileNameStandout, ProfilePictureSources } from './components/display/header'
import { Description, DescriptionTitle, Paragraph } from './components/typography'
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
            hoverRuby="IGBT"
            hoverColor="hsla(0, 35%, 57%, 0.75)"
            ruby="10"
        >
            igbt
        </ProfileNameStandout>
        460
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
            {
                tag: 'Yu Zhiyun',
                comment: 'since i were born',
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
            {
                platform: 'academicpage',
                name: '@Zhiyun Yu',
                url: 'https://tobu61106f.github.io',
                icon: <HiAcademicCap />,
                iconBackground: '#ff9933aa',
                redacted: true,
            },
        ],
    },
]

export const WHOAMI_PARAGRAPHS = (
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>WHO AM I?</DescriptionTitle>
            <Paragraph>ESP32架构电子垃圾爱好者</Paragraph>
            <Paragraph>占星师说我一定会成为ASIC工程师</Paragraph>
            <Paragraph>上帝造我并不完美，刚出生的时候脑袋就坏掉了(AuDHD发育障碍)</Paragraph>
            <Paragraph>提倡自由互联网</Paragraph>
            <Paragraph>希望能为社会公义做出贡献</Paragraph>
            <Paragraph>SDGs賛成/多様性重視</Paragraph>
            <Paragraph>My office is a safe place.</Paragraph>
        </Description>
    </Row>
)



export const DESCRIPTION_PARAGRAPHS = (
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>what am i doing?</DescriptionTitle>
            <Paragraph>B.S. Electrical Engineer since 2025.</Paragraph>
            <Paragraph>Research Scientisit (?).</Paragraph>
            <Paragraph>Train Enthusiast</Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>what do i love?</DescriptionTitle>
            <Paragraph>Pokemon.</Paragraph>
            <Paragraph>Idol</Paragraph>
            <Paragraph>
                <del className="deleted">I want to be a girl.</del>
            </Paragraph>
        </Description>
    </Row>
)

export const ADDITIONAL_PARAGRAPHS = (
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>travel</DescriptionTitle>
            <Paragraph>Japan: 41/47 都府道県</Paragraph>
            <Paragraph>Korea, Republic of: 4/17 特別市/特别自治市/广域市/道/</Paragraph>
            <Paragraph>United States: 7/50 State(s)</Paragraph>
            <Paragraph>Canada: 2 Province(s)</Paragraph>
            <Paragraph>Russia: 2 State(s)</Paragraph>
            <Paragraph>Taiwan (Republic of China): 10/22 </Paragraph>
        </Description>
    </Row>
)

export const COPYRIGHT = 'Copyright © 2026 igbt460. Illustrations have their own licenses.'

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
