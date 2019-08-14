//babel --plugins @babel/plugin-transform-react-jsx pre/pre-jsx/overhaul.js -d pre/pre-build-js-o && 
class SectionLink extends React.Component {
    constructor(props) {
        super(props);
        this.url = props.url;
        this.logo = props.logo;
    }
    render() {
        return (
            <div class='section-link'>
                <img src={this.logo}>
                    <a href={this.url} target='_blank'></a>
                </img>
            </div>
        );
    }
}
class AngularDivider extends React.Component {
    constructor(props) {
        super(props);
        this.divOrientation = props.divOrientation;
        this.baseName = "angular-divider";
    }
    genClassName() {
        if (this.divOrientation === undefined || this.divOrientation === "") {
            return this.baseName;
        } else {
            return this.baseName + "-" + this.divOrientation;
        }
    }
    render() {
        const cName = this.genClassName();
        return (
            <div class='ang-div-wrapper'>
                <div class={cName}></div>
            </div>
        );
    }
}
class AngularSection extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.color = props.color;
        this.bannerImg = props.bannerImg;
        this.divOrientation = props.divOrientation;
    }
    render() {
        return (
            <React.Fragment>
                <div id={this.name} class="angular-section">
                    <div class="angular-content">
                        <div class="banner-title-img">
                            <img src={this.bannerImg} />
                        </div>
                    </div>
                </div>
                <AngularDivider divOrientation={this.divOrientation} />
            </React.Fragment>
        );
    }
}
class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.counter = 0;
    }
    // Get orientation of angular divider given the section index
    divOrientation() {
        this.counter++;
        if (this.counter % 2 === 0) {
            return "rev";
        }
        return "";
    }
    render() {
        const my_sections = this.sections.map((obj) => <AngularSection name={obj.name} color={obj.color} bannerImg={obj.bannerImg} divOrientation={this.divOrientation()} />);
        return (
            <section class="section-list">
                {my_sections}
            </section>
        );
    }
}

// Load in mainPageSects variable
//const mainPageSects = require("./layouts/main-page-layout.json");
const mainPageSects = {
    "angular-sections": [
        {
            "name": "jmusic",
            "colorName": "scloudOrange",
            "color": "#F50",
            "bannerImg": "../img/page/jm logo 3 -- music - clean.svg"
        },
        {
            "name": "jprojects",
            "colorName": "sharpYellow",
            "color": "#FFDD0E",
            "bannerImg": "../img/page/jm logo 3 -- project.svg"
        }
    ]
}

// Render to main view
ReactDOM.render(
  <SectionList sections={mainPageSects["angular-sections"]} />,
  document.getElementById('page-content')
);
