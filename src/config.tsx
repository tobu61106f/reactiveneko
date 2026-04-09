import {
    TbBrandGithub,
    TbBrandTelegram,
    TbBrandTwitter,
    TbBrandWeibo,
    TbCpu,
    TbSourceCode,
    TbMathMin,
    TbBrandMastodon,
} from 'react-icons/tb';
import { HiAcademicCap } from "react-icons/hi";
import { 
    PiCpu,
    PiFunctionFill,
} from "react-icons/pi";
import { IoLogoFlickr } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

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
        title: 'academic-degree',
        tags: [
            {
                tag: 'Bachelor of Science, 2025',
                icon: <HiAcademicCap />,
            },
            {
                tag: 'Master of Science, 2026',
                icon: <HiAcademicCap />,
            },
            {
                tag: 'Ph.D. (Doctor of Philosophy) (Incoming)',
                icon: <HiAcademicCap />,
            },
        ],
    },
    {
        title: 'majored-in',
        tags: [
            {
                tag: 'Electrical Engineering',
                icon: <PiCpu />,
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
        title: 'research',
        tags: [
            {
                tag: 'GPGPU',
                icon: <TbCpu />,
            },
            {
                tag: 'Optimization Method',
                icon: <TbMathMin />,
            },
            {
                tag: 'NumMethodForPDE',
                icon: <PiFunctionFill />,
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
                comment: 'bi·lin·gual'
            },
            {
                tag: 'ja-JP',
                comment: 'mid-fluent',
            },
            {
                tag: 'ko-KR',
                comment: 'learning',
            },
            {
                tag: 'es-ES',
                comment: 'Forgot',
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
                platform: 'mastodon.social',
                name: '@Namuru',
                url: 'https://mastodon.social/@Namuru',
                icon: <TbBrandMastodon />,
                iconBackground: '#6a5acd',
            },
            {
                platform: 'Twitter',
                name: '@42__hayabusa',
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
                iconBackground: '#1da1f2aa',
            },
            {
                platform: 'Flickr',
                name: '日野下花帆',
                url: 'https://flickr.com/kasumi_8972m/',
                icon: <IoLogoFlickr />,
                iconBackground: '#6a5acd',
            },
            {
                platform: 'Instagram',
                name: 'igbt460',
                url: 'https://www.instagram.com/igbt460/',
                icon: <FaInstagram />,
                iconBackground: '#ff00ff',
            },
        ],
    },
]

export const WHOAMI_PARAGRAPHS = (
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>WHO AM I?</DescriptionTitle>
            <Paragraph>Zhiyun Yu is a Shanghai, China Borned American-Chinese, he has been an OTAKU and Train Nerd for over 15 years. Originally getting his start ass sit in the University at Buffalo, received his Bachelor of Science degree in Electrical Engineering, and then working with the LISP, Python, Ruby, MATLAB, and IEEE, ECS communities.</Paragraph>
            <Paragraph>Most of his formative work was closely to the Japanese Train-nerd Communities and people call him Shiromaru.</Paragraph>
            <Paragraph>HE recently in favored to put Electronic Components (be more specifically, the Electronic gabbages) together to built some funny sh*t based on ESP-32, ESP-8266 and Raspberry Pi Platform. </Paragraph>
            <Paragraph>ESP32架构电子垃圾爱好者</Paragraph>
            <Paragraph>占星师说我一定会成为ASIC工程师</Paragraph>
            <Paragraph>上帝造我并不完美，刚出生的时候脑袋就坏掉了(AuDHD发育障碍)</Paragraph>
            <Paragraph>提倡自由互联网</Paragraph>
            <Paragraph>想为社会转型正义做出贡献</Paragraph>
            <Paragraph>SDGs賛成:多様性重視</Paragraph>
            <Paragraph>My office is a safe place.</Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>自我介绍</DescriptionTitle>
            <Paragraph>讀者你好！我是IGBT，or Yu Zhiyun, 感謝你點進這個頁面。雖然日本網友叫我４６０（＝しろまる）、IGBTニキ的情況相當多。</Paragraph>
            <Paragraph>如果你不急的話，可以駐足閱讀一下簡短的介紹。</Paragraph>
            <Paragraph>目前（2026 年 3 月），我的 Twitter 是不公開的，這個 rule 我追隨了約八年，因爲資訊的質量和用戶的素質真的是年年在下降。我在 Bluesky 主要關注那些從 Twitter 遷徙去的日本朋友的朋友們，以及大量從事Computer Science業界的工程師。</Paragraph>
            <Paragraph>我對於任何形式的性別戰爭、身份政治類的仇恨言论会感到不适。我認爲中文社群變成整天打打殺殺的這樣子，我們當中沒有一個能免罪。</Paragraph>
            <Paragraph>目前我主要在 Telegram 上小範圍地活動，具體是用作 RSS 訂閲器看凍鰻和新聞，中文訊息脫離了中國本土也可以變得很美。</Paragraph>
            <Paragraph>我在 GitHub 會存放一些過往在學習時寫的代碼，像聚類分析和貝葉斯分類器是主要内容，目前還沒有勇氣公開，git 的版本控制我用得比較菜。所以點進去會發現主要 contributes 會是 LaTex. </Paragraph>
            <Paragraph>大約一個月一次的頻率在 Instagram 上分享拍攝的風景之類的。器材點進 flickr 的 about 卷軸 check-out 就好啦！</Paragraph>
            <Paragraph>如果你先前已經在其他地方與我有過接觸，你也可以看看我在工作上所展現的其他方面。</Paragraph>
        </Description>
    </Row>
)



export const DESCRIPTION_PARAGRAPHS = (
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>what am i doing?</DescriptionTitle>
            <Paragraph>Pursuing a Master Degree in Electrical Engineering</Paragraph>
            <Paragraph>Research Scientisit(?). </Paragraph>
            <Paragraph>Train Enthusiast</Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>what do i love?</DescriptionTitle>
            <Paragraph>Pokemon</Paragraph>
            <Paragraph>アイドル</Paragraph>
            <Paragraph>じょせいせいゆう</Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>Miscs</DescriptionTitle>
            <Paragraph>蓮ノ空女学院スクールアイドルクラブ: 村野さやか (CV: 野中ここな)、日野下花帆 (CV: 楡井希実)</Paragraph>
            <Paragraph>学園アイドルマスター: 葛城リーリヤ (Katsuragi Riiriya, CV: 花岩香奈)</Paragraph>
            <Paragraph>BanGDream! Morfonica：二葉つくし (CV：mika)</Paragraph>
            <Paragraph>and more …</Paragraph>
            <Paragraph>乗り物: 録り, 撮り</Paragraph>
        </Description>
    </Row>
    
)

export const ADDITIONAL_PARAGRAPHS = (
    <Row background={PANEL_BACKGROUND}>
        <Description>
            <DescriptionTitle smallCaps>travel-history</DescriptionTitle>
            <Paragraph>Japan: 41/47 都府道県</Paragraph>
            <Paragraph>Korea, Republic of: 6/17 特別市/特别自治市/廣域市/道</Paragraph>
            <Paragraph>United States: 7/50 State(s)</Paragraph>
            <Paragraph>Canada: 2 Province(s)</Paragraph>
            <Paragraph>Russia Federal: 2 State(s)</Paragraph>
            <Paragraph>Taiwan (Republic of China): 10/22 Countie(s)/City(ies)/ </Paragraph>
        </Description>
        <Description>
            <DescriptionTitle smallCaps>frequently-traveler</DescriptionTitle>
            <Paragraph>I'm a UA and Delta Members since I came to U.S. You may see me in Economy (挂壁粮仓) Class on...</Paragraph>
            <Paragraph>ANA: NH107/108/111/112/967/968 on HND↔️SFO, HND↔️ORD, HND↔️PVG </Paragraph>
            <Paragraph>Delta: DL26/166/167/189/274/275/388/389 on ICN↔️ATL, SEA↔️HND, DTW↔️HND, DTW↔️PVG</Paragraph>
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
