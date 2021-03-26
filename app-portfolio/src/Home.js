import React from 'react';
import PageTitle from './components/PageTitle';
import { FontImport } from './components/FunctionComponents';
import PageHeader from './components/PageHeader';
import SectionList from './components/SectionList';
import { imageHelper } from './utility/ImageHelper';
import { fontImportLink, myOpacityStyle, pageHeaderLayout } from './utility/PageLayoutHelper'


// Set up layout of homepage
const pageLayout = {
    "font-import-link": fontImportLink,
    "pageTitle": "Jacques Mathieu - Home",
    "page-header": pageHeaderLayout(),
    "angular-sections": [
        {
            "name": "music",
            "hoverBGName": "lightGrey",
            "hoverBG": "#DDD",
            "bannerSpecs": {
                "bannerImg": imageHelper.customLogos.jmMusicLogo
            },
            "sectionLinks": [
                {
                    "name": "SoundCloud",
                    "url": "https://soundcloud.com/jacques_mathieu",
                    "logo": imageHelper.appLogos.soundcloudLogo,
                    "hoverBG": "#F50",
                    "hoverBGName": "scloudOrange",
                    "target": "_blank"
                }
            ],
            "expandableContentSpecs": {
                "show": false,
                "icon": imageHelper.utilityLogos.expandIcon
            },
            "opacityAsTab": myOpacityStyle
        },
        {
            "name": "projects",
            "hoverBGName": "lightBlueGrey",
            "hoverBG": "#DDEEDD",
            "bannerSpecs": {
                "bannerImg": imageHelper.customLogos.jmProjectLogo
            },
            "sectionLinks": [
                {
                    "name": "GitHub",
                    "url": "https://github.com/Jmathieu14",
                    "logo": imageHelper.appLogos.githubLogo,
                    "hoverBG": "#A54AB0",
                    "hoverBGName": "githubDesktopPurple",
                    "target": "_blank"
                },
                {
                    "name": "Codepen.io",
                    "url": "https://codepen.io/jmathieu145",
                    "logo": imageHelper.appLogos.codepenLogo,
                    "hoverBG": "#0EBEFF",
                    "hoverBGName": "hyperlinkBlue",
                    "target": "_blank"
                }
            ],
            "opacityAsTab": myOpacityStyle
        },
        {
            "name": "work",
            "hoverBGName": "gray",
            "hoverBG": "#AAA",
            "bannerSpecs": {
                "bannerImg": imageHelper.customLogos.jmWorkLogo
            },
            "sectionLinks": [
                {
                    "name": "LinkedIn",
                    "url": "https://www.linkedin.com/in/jacques-mathieu-743389119/",
                    "logo": imageHelper.appLogos.linkedinLogo,
                    "hoverBG": "#0077B5",
                    "hoverBGName": "linkedInHoverBlue",
                    "target": "_blank"
                },
                {
                    "name": "Resume",
                    "url": "../pdf/JSMathieu Resume Redesign - 04-09-2020.pdf",
                    "logo": imageHelper.utilityLogos.resumeIcon,
                    "hoverBG": "#33ff5f",
                    "hoverBGName": "goodGreen",
                    "target": "_blank"
                },
                {
                    "name": "Example Work",
                    "url": "/example-work",
                    "routerLink": true,
                    "logo": imageHelper.utilityLogos.exampleWorkIcon,
                    "hoverBG": "#3dffb9",
                    "hoverBGName": "turqoise",
                    "target": "_self"
                }
            ],
            "opacityAsTab": myOpacityStyle
        }
    ]
}

console.log(pageLayout["pageTitle"]);

function Home() {
    return (
        <>
            <PageTitle text={pageLayout["pageTitle"]} />
            <FontImport path="https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap" />
            <PageHeader pageHeader={pageLayout["page-header"]} sections={pageLayout["angular-sections"]} />
            <SectionList sections={pageLayout["angular-sections"]} />
        </>
    );
}

export default Home;
