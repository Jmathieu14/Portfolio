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
        this.orientation = props.orientation;
    }
    className() {
        let baseName = "angular-divider";
        if (this.orientation === null || this.orientation.equals("")) {
            return baseName;
        } else {
            return baseName + props.orientation;
        }
    }
    render() {
        return (
            <div class='ang-div-wrapper'>
                <div class={this.className}></div>
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
            <div id={this.name} class="angular-section">
                <div class="angular-content">
                    <div class="banner-title-img">
                        <img src={this.bannerImg} />
                    </div>
                </div>
            </div>
            <AngularDivider orientation={this.divOrientation} />
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

var scloudOrange = "#F50";
var sharpYellow = "#FFDD0E";

var pageSects = [
    {
        "name": "jmusic",
        "color": scloudOrange,
        "bannerImg": "../img/page/jm logo 3 -- music - clean.svg"
    },
    {
        "name": "jprojects",
        "color": sharpYellow,
        "bannerImg": "../img/page/jm logo 3 -- project.svg"
    }
];
// Render to main view
ReactDOM.render(
  <SectionList sections={pageSects} />,
  document.getElementById('page-content')
);
