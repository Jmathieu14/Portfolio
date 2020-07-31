import AngularSection from './AngularSection';
const { genKey, redirectToGitHubPages, SECT_DISPLAYED, SECT_LIST_CLASS } = require('./Utility');
const React = require('react');

// A component that wraps one or more AngularSection
class SectionList extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.counter = 0;
        this.key = "SECT_LIST";
        this.showSectionList = false;
        this.modalSpecs = { 'title': 'My Modal', 'close': './assets/img/page/Google Icons/baseline_close_white_48dp.png' };
    }
    // Get orientation of angular divider given the section index
    divOrientation() {
        this.counter++;
        if (this.counter % 2 === 0) {
            return "rev";
        }
        return "";
    }
    // Add 'show' to end of the class name if mobile view is enabled;
    // Otherwise, onload will handle it.
    handleClassName() {
        if (this.showSectionList) {
            SECT_DISPLAYED = true;
            return SECT_LIST_CLASS + " show";
        } else {
            return SECT_LIST_CLASS;
        }
    }
    componentDidMount() {
        redirectToGitHubPages();
        this.showSectionList = true;
    }
    render() {
        const my_sections = this.sections.map((obj) =>
            <AngularSection
                key={genKey(obj.name)}
                name={obj.name} 
                hoverBG={obj.hoverBG}
                bannerSpecs={obj.bannerSpecs}
                eCSpecs={obj.expandableContentSpecs}
                divOrientation={this.divOrientation()}
                sectionLinks={obj.sectionLinks}
            />
        );
        return (
            <React.Fragment>
                <section className={this.handleClassName()}>
                    {my_sections}
                </section>
            </React.Fragment>
        );
    }
}

export default SectionList;
