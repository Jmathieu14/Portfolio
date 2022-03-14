import React from 'react';
import PageTitle from './components/PageTitle';
import { FontImport } from './components/FunctionComponents';
import PageHeader from './components/PageHeader';
import SectionList from './components/SectionList';
import { imageHelper } from './utility/ImageHelper';
import { fontImportLink, myOpacityStyle, pageHeaderLayout } from './utility/PageLayoutHelper'


// Set up layout of homepage
const pageLayout = {
    "font-import-link" : fontImportLink,
    "pageTitle": "Jacques Mathieu - Work Examples",
    "page-header": pageHeaderLayout("work examples"),
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
                    "logo": imageHelper.utilityLogos.imageIcon,
                    "hoverBG": "#00BA65",
                    "hoverBGName": "sparkGreen",
                    "target": "MODAL",
                    "modalSpecs": {
                        "contentType": "imageSlider",
                        "title": "ex. of work @ sparksales",
                        "close": imageHelper.utilityLogos.closeIcon,
                        "imageSliderSpecs": {
                            "images": [
                                {
                                    "path": imageHelper.exampleWork.achievementsPage,
                                    "text": "Achievements Page"
                                },
                                {
                                    "path": imageHelper.exampleWork.agentDashboard,
                                    "text": "Sales Agent Dashboard"
                                },
                                {
                                    "path": imageHelper.exampleWork.salesAgentResourcePage,
                                    "text": "Sales Agent Resource Page"
                                },
                                {
                                    "path": imageHelper.exampleWork.welcomePage,
                                    "text": "Client Welcome Page"
                                },
                                {
                                    "path": imageHelper.exampleWork.setupStep1,
                                    "text": "Client Setup Process: Step 1"
                                },
                                {
                                    "path": imageHelper.exampleWork.setupStep2,
                                    "text": "Client Setup Process: Step 2"
                                },
                                {
                                    "path": imageHelper.exampleWork.setupStep3,
                                    "text": "Client Setup Process: Step 3"
                                },
                                {
                                    "path": imageHelper.exampleWork.setupReminder,
                                    "text": "Client Setup Process: Step 3 | Reminder"
                                },
                                {
                                    "path": imageHelper.exampleWork.setupStep4,
                                    "text": "Client Setup Process: Step 4"
                                }                        
                            ]
                        }
                    }
                },
                {
                    "name": "videos",
                    "url": "https://github.com/Jmathieu14/Portfolio/tree/master/video/Sparksales",
                    "logo": imageHelper.utilityLogos.videoIcon,
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
                    "logo": imageHelper.utilityLogos.imageIcon,
                    "hoverBG": "#14558F",
                    "hoverBGName": "agoBlue",
                    "target": "MODAL",
                    "modalSpecs": {
                        "contentType": "imageSlider",
                        "title": "ex. of work @ AGO",
                        "close": imageHelper.utilityLogos.closeIcon,
                        "imageSliderSpecs": {
                            "images": [
                                {
                                    "path": imageHelper.exampleWork.mluAfter,
                                    "text": "Improved MLU Form"
                                },
                                {
                                    "path": imageHelper.exampleWork.oml,
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

console.log(pageLayout["pageTitle"]);

function ExampleWork() {
    return (
        <>
            <PageTitle text={pageLayout["pageTitle"]} />
            <FontImport path="https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900|Roboto|Source+Sans+Pro&display=swap" />
            <PageHeader pageHeader={pageLayout["page-header"]} sections={pageLayout["angular-sections"]} />
            <SectionList sections={pageLayout["angular-sections"]} />
        </>
    );
}

export default ExampleWork;
