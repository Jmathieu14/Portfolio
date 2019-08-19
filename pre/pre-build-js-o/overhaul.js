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
    // Get the correct background color from the parent object
    getBackgroundFromParent() {
        return {backgroundColor: this.props.state.backgroundColor};
    }
    render() {
        const cName = this.genClassName();
        return (
            <div class='ang-div-wrapper' style={this.getBackgroundFromParent()}>
                <div class={cName}></div>
            </div>
        );
    }
}
class AngularSection extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.hoverBG = props.hoverBG;
        this.bannerImg = props.bannerImg;
        this.divOrientation = props.divOrientation;
        this.state = {
            text: "normal",
            backgroundColor: ""
        };
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState() {
        if (this.state.text === "normal") {
            this.setState({text: "hover", backgroundColor: this.hoverBG});
        } else {
            this.setState({text: "normal", backgroundColor: ""});
        }
    }
    getBackground() {
        return {backgroundColor: this.state.backgroundColor};
    }
    render() {
        return (
            <React.Fragment>
                <div onMouseLeave={this.toggleState} onMouseEnter={this.toggleState} id={this.name} style={this.getBackground()} class="angular-section">
                    <div class="angular-content">
                        <div class="banner-title-img">
                            <img src={this.bannerImg} />
                        </div>
                    </div>
                </div>
                <AngularDivider divOrientation={this.divOrientation} state={this.state} />
            </React.Fragment>
        );
    }
}
class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.counter = 0;
        this.key = "SECT_LIST";
    }
    // Get orientation of angular divider given the section index
    divOrientation() {
        this.counter++;
        if (this.counter % 2 === 0) {
            return "rev";
        }
        return "";
    }
    // Return a key for the current section given it's name
    genKey(n) {
        var k = n + "-" + Math.random().toString().substr(2,);
        return k;
    }
    render() {
        const my_sections = this.sections.map((obj) => <AngularSection key={this.genKey(obj.name)} name={obj.name} hoverBG={obj.hoverBG} bannerImg={obj.bannerImg} divOrientation={this.divOrientation()} />);
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
            "hoverBGName": "scloudOrange",
            "hoverBG": "#F50",
            "bannerImg": "../img/page/jm logo 3 -- music - clean.svg"
        },
        {
            "name": "jprojects",
            "hoverBGName": "sharpYellow",
            "hoverBG": "#FFDD0E",
            "bannerImg": "../img/page/jm logo 3 -- project.svg"
        }
    ]
}

// Render to main view
ReactDOM.render(
  <SectionList sections={mainPageSects["angular-sections"]} />,
  document.getElementById('page-content')
);
