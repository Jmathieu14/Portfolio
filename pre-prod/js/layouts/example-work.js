const myOpacity = 0.85;
const myOpacityStyle = {opacity: myOpacity};
// Set up layout of work examples page
const pageLayout = {
    "font-import-link" : "https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap",
    "pageTitle": "Jacques Mathieu - Work Examples",
    "page-header": {
        "title": "work examples",
        "logo": "../img/page/jm logo 3 - white.svg",
        "logoURL": "../html/home.html",
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
            "name": "work @ sparksales",
            "hoverBGName": "lightGreyBlue",
            "hoverBG": "#CCCCFF",
            "bannerSpecs": {
                "bannerText": "work @ sparksales"
            },
            "sectionLinks": [
                {
                    "name": "screenshots",
                    "url": "../img/Sparksales",
                    "logo": "../img/page/Google Icons/folderx2_36dp.png",
                    "hoverBG": "#00BA65",
                    "hoverBGName": "sparkGreen",
                    "target": "_blank"
                },
                {
                    "name": "videos",
                    "url": "../video/Sparksales",
                    "logo": "../img/page/Google Icons/video_icon.png",
                    "hoverBG": "#58c8B9",
                    "hoverBGName": "sparkBlueGreen",
                    "target": "_blank"
                }
            ],
            "opacityAsTab": myOpacityStyle
        }
    ]
}

// Variable that stores DOM element in which all react components will be rendered under
const renderTarget = document.getElementById('react-content');

// Render layout to main view
ReactDOM.render(
    <React.Fragment>
        <PageTitle text={pageLayout["pageTitle"]} />
        <FontImport path={pageLayout["font-import-link"]} />
        <PageHeader pageHeader={pageLayout["page-header"]} sections={pageLayout["angular-sections"]} />
        <SectionList sections={pageLayout["angular-sections"]} />
    </React.Fragment>,
    renderTarget
);