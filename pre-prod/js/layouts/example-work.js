const myOpacity = 0.85;
const myOpacityStyle = {opacity: myOpacity};
// Set up layout of work examples page
const pageLayout = {
    "font-import-link" : "https://fonts.googleapis.com/css?family=Montserrat:500,800,900|Open+Sans|Roboto|Source+Sans+Pro&display=swap",
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
    }
}

const renderTarget = document.getElementById('example-work-content');
// Render layout to main view
ReactDOM.render(
    <React.Fragment>
        <PageTitle text={pageLayout["pageTitle"]} />
        <FontImport path={pageLayout["font-import-link"]} />
        <PageHeader pageHeader={pageLayout["page-header"]} sections={[]} />
    </React.Fragment>,
    renderTarget
);