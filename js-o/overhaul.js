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
        if (this.orientation == null || this.orientation.equals("")) {
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
    }
}
class SectionList extends React.Component {
    constructor(props) {
        super(props);
    }
}

// Render to main view
ReactDOM.render(
  <SectionLink />,
  document.getElementById('page-content')
);
