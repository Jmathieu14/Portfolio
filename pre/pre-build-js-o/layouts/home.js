// Set up layout of homepage
const mainPageSects = {
    "angular-sections": [
        {
            "name": "jmusic",
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
            ]
        },
        {
            "name": "jprojects",
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
            ]
        },
        {
            "name": "jwork",
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
                    "url": "../../pdf/JSMathieu Resume Summer 2019.pdf",
                    "logo": "../../img/page/Google Icons/list_alt-48dp.svg",
                    "hoverBG": "#33ff5f",
                    "hoverBGName": "goodGreen"
                }
            ]
        }
    ]
}

// Render layout to main view
ReactDOM.render(
  <SectionList sections={mainPageSects["angular-sections"]} />,
  document.getElementById('page-content')
);