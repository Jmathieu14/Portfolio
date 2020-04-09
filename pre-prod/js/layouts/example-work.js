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
    "modalSpecs": {
        
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
                    "url": "",
                    "logo": "../img/page/Google Icons/baseline_photo_black_48dp.png",
                    "hoverBG": "#00BA65",
                    "hoverBGName": "sparkGreen",
                    "target": "MODAL",
                    "modalSpecs": {
                        "contentType": "imageSlider",
                        "title": "ex. of work @ sparksales",
                        "close": "../img/page/Google Icons/baseline_close_white_48dp.png",
                        "imageSliderSpecs": {
                            "images": [
                                {
                                    "path": "../img/Sparksales/Achievements Page.png",
                                    "text": "Achievements Page"
                                },
                                {
                                    "path": "../img/Sparksales/Agent Dashboard.png",
                                    "text": "Sales Agent Dashboard"
                                },
                                {
                                    "path": "../img/Sparksales/Agent Resources Page.png",
                                    "text": "Sales Agent Resource Page"
                                },
                                {
                                    "path": "../img/Sparksales/Welcome page - first page client sees on first login.png",
                                    "text": "Client Welcome Page"
                                },
                                {
                                    "path": "../img/Sparksales/Step 1 signup process.png",
                                    "text": "Client Setup Process: Step 1"
                                },
                                {
                                    "path": "../img/Sparksales/Step 2 signup process.png",
                                    "text": "Client Setup Process: Step 2"
                                },
                                {
                                    "path": "../img/Sparksales/Step 3 signup process.png",
                                    "text": "Client Setup Process: Step 3"
                                },
                                {
                                    "path": "../img/Sparksales/Step 3 reminder for client.png",
                                    "text": "Client Setup Process: Step 3 | Reminder"
                                },
                                {
                                    "path": "../img/Sparksales/Step 4 signup process.png",
                                    "text": "Client Setup Process: Step 4"
                                }                        
                            ]
                        }
                    }
                },
                {
                    "name": "videos",
                    "url": "https://github.com/Jmathieu14/Portfolio/tree/master/video/Sparksales",
                    "logo": "../img/page/Google Icons/video_icon.png",
                    "hoverBG": "#58c8B9",
                    "hoverBGName": "sparkBlueGreen",
                    "target": "_blank"
                }
            ],
            "opacityAsTab": myOpacityStyle
        },
        {
            "name": "work @ AGO",
            "hoverBGName": "matteLightGrey",
            "hoverBG": "#DDDDCC",
            "bannerSpecs": {
                "bannerText": "work @ AGO"
            },
            "sectionLinks": [
                {
                    "name": "screenshots",
                    "url": "",
                    "logo": "../img/page/Google Icons/baseline_photo_black_48dp.png",
                    "hoverBG": "#14558F",
                    "hoverBGName": "agoBlue",
                    "target": "MODAL",
                    "modalSpecs": {
                        "contentType": "imageSlider",
                        "title": "ex. of work @ AGO",
                        "close": "../img/page/Google Icons/baseline_close_white_48dp.png",
                        "imageSliderSpecs": {
                            "images": [
                                {
                                    "path": "../img/AGO/MLU after.png",
                                    "text": "Improved MLU Form"
                                },
                                {
                                    "path": "../img/AGO/OML.png",
                                    "text": "Improved OML Form"
                                }
                            ]
                        }
                    }
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
        <ModalRenderTarget />
    </React.Fragment>,
    renderTarget
);