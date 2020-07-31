import React from 'react';
import PageTitle from './components/PageTitle';
import { FontImport } from './components/FunctionComponents';
import PageHeader from './components/PageHeader';
import SectionList from './components/SectionList';
import AngularSection from './components/AngularSection';

const myOpacity = 0.85;
const myOpacityStyle = { opacity: myOpacity };
// Set up layout of homepage
const pageLayout = {
    "font-import-link": "https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap",
    "pageTitle": "Jacques Mathieu - Home",
    "page-header": {
        "title": "",
        "logo": "../img/page/jm logo 3 - white.svg",
        "logoURL": "#",
        "logoStyle": myOpacityStyle,
        "background": "#000",
        "backgroundName": "black",
        "fontColor": "#FFF",
        "fontColorName": "White",
        "headerFontOpacity": myOpacity,
        "fontFamily": "'Montserrat', 'Roboto', sans-serif",
        "mobileMoreIcon": "../img/page/Google Icons/baseline_menu_white_48dp.png",
        "mobileMoreStyle": { color: "#FFF", opacity: myOpacity }
    },
    "angular-sections": [
        {
            "name": "music",
            "hoverBGName": "lightGrey",
            "hoverBG": "#DDD",
            "bannerSpecs": {
                "bannerImg": "../img/page/sections/jm logo 3 -- music - text_to_path.svg"
            },
            "sectionLinks": [
                {
                    "name": "SoundCloud",
                    "url": "https://soundcloud.com/jacques_mathieu",
                    "logo": "../img/page/Social Media/SVG/24/4419136 - cloud logo sound sound cloud soundcloud square icon.svg",
                    "hoverBG": "#F50",
                    "hoverBGName": "scloudOrange",
                    "target": "_blank"
                }
            ],
            "expandableContentSpecs": {
                "show": false,
                "icon": "../img/page/Google Icons/expand_more-24px.svg"
            },
            "opacityAsTab": myOpacityStyle
        },
        {
            "name": "projects",
            "hoverBGName": "lightBlueGrey",
            "hoverBG": "#DDEEDD",
            "bannerSpecs": {
                "bannerImg": "../img/page/sections/jm logo 3 -- project - text_to_path.svg"
            },
            "sectionLinks": [
                {
                    "name": "GitHub",
                    "url": "https://github.com/Jmathieu14",
                    "logo": "../img/page/Social Media/SVG/24/4419165 - circle github outline social-media icon.svg",
                    "hoverBG": "#A54AB0",
                    "hoverBGName": "githubDesktopPurple",
                    "target": "_blank"
                },
                {
                    "name": "Codepen.io",
                    "url": "https://codepen.io/jmathieu145",
                    "logo": "../img/page/Other Icons/codepen-black-fill-small.png",
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
                "bannerImg": "../img/page/sections/jm logo 3 -- work - text_to_path.svg"
            },
            "sectionLinks": [
                {
                    "name": "LinkedIn",
                    "url": "https://www.linkedin.com/in/jacques-mathieu-743389119/",
                    "logo": "../img/page/Social Media/SVG/24/4419149 - linkedin logo social icon.svg",
                    "hoverBG": "#0077B5",
                    "hoverBGName": "linkedInHoverBlue",
                    "target": "_blank"
                },
                {
                    "name": "Resume",
                    "url": "../pdf/JSMathieu Resume Redesign - 04-09-2020.pdf",
                    "logo": "../img/page/Google Icons/list_alt-48dp.svg",
                    "hoverBG": "#33ff5f",
                    "hoverBGName": "goodGreen",
                    "target": "_blank"
                },
                {
                    "name": "Example Work",
                    "url": "../html/example-work.html",
                    "logo": "../img/page/example icon.svg",
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
