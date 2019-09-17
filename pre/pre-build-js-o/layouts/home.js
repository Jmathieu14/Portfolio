const myOpacity = 0.85;
const myOpacityStyle = {opacity: myOpacity};
// Set up layout of homepage
const pageLayout = {
    "font-import-link" : "https://fonts.googleapis.com/css?family=Montserrat:500|Open+Sans|Roboto|Source+Sans+Pro&display=swap",
    "page-header": {
        "title": "",
        "logo": "../../img/page/jm logo 3 - white.svg",
        "logoOpacity": myOpacity,
        "background": "#000",
        "backgroundName": "black",
        "fontColor": "#FFF",
        "fontColorName": "White",
        "headerFontOpacity": myOpacity,
        "fontFamily": "'Montserrat', 'Roboto', sans-serif",
        "mobileMoreIcon": "path2"
    },
    "angular-sections": [
        {
            "name": "music",
            "hoverBGName": "lightGrey",
            "hoverBG": "#DDD",
            "bannerImg": "../img/page/jm logo 3 -- music - clean.svg",
            "sectionLinks": [
                {
                    "name": "jmSoundcloud",
                    "url": "https://soundcloud.com/jacques_mathieu",
                    "logo": "../../img/page/Social Media/SVG/24/4419136 - cloud logo sound sound cloud soundcloud square icon.svg",
                    "hoverBG": "#F50",
                    "hoverBGName": "scloudOrange"
                }
            ],
            "opacityAsTab": myOpacityStyle
        },
        {
            "name": "projects",
            "hoverBGName": "lightBlueGrey",
            "hoverBG": "#DDEEDD",
            "bannerImg": "../img/page/jm logo 3 -- project.svg",
            "sectionLinks": [
                {
                    "name": "GitHub",
                    "url": "https://github.com/Jmathieu14",
                    "logo": "../../img/page/Social Media/SVG/24/4419165 - circle github outline social-media icon.svg",
                    "hoverBG": "#A54AB0",
                    "hoverBGName": "githubDesktopPurple"
                }
            ],
            "opacityAsTab": myOpacityStyle
        },
        {
            "name": "work",
            "hoverBGName": "gray",
            "hoverBG": "#AAA",
            "bannerImg": "../img/page/jm logo 3 -- work.svg",
            "sectionLinks": [
                {
                    "name": "LinkedIn",
                    "url": "https://www.linkedin.com/in/jacques-mathieu-743389119/",
                    "logo": "../../img/page/Social Media/SVG/24/4419149 - linkedin logo social icon.svg",
                    "hoverBG": "#0077B5",
                    "hoverBGName": "linkedInHoverBlue"
                },
                {
                    "name": "Resume",
                    "url": "../../pdf/JSMathieu Resume Redesign - Summer, Fall 19.pdf",
                    "logo": "../../img/page/Google Icons/list_alt-48dp.svg",
                    "hoverBG": "#33ff5f",
                    "hoverBGName": "goodGreen"
                }
            ],
            "opacityAsTab": myOpacityStyle
        }
    ]
}

// Render layout to main view
ReactDOM.render(
  <SectionList sections={pageLayout["angular-sections"]} pageHeader={pageLayout["page-header"]} customFontPath={pageLayout['font-import-link']} />,
  document.getElementById('page-content')
);