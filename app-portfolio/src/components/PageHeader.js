import { Link } from "react-router-dom";
const { HeaderTabs } = require('./HeaderTabs');
const React = require('react');

// Top menu bar for site
class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.sections = props.sections;
        this.key = "PAGE_HEADER"
        this.pageHeaderSpecs = props.pageHeader;
        this.state = {
            "description": "active",
            "backgroundColor": this.pageHeaderSpecs['background'],
            "fontColor": this.pageHeaderSpecs['fontColor'],
            "fontFamily": this.pageHeaderSpecs['fontFamily'],
            "headerFontOpacity": this.pageHeaderSpecs['headerFontOpacity']
        }
    }
    getStyle() {
        return {
            backgroundColor: this.state.backgroundColor,
            color: this.state.fontColor,
            fontFamily: this.state.fontFamily
        };
    }
    getHeaderStyle() {
        let hStyle = {
            opacity: this.state.headerFontOpacity
        };
        if (this.pageHeaderSpecs['title'].trim() === "") {
            hStyle.display = "None";
        }
        return hStyle;
    }
    render() {
        return (
            <section id={this.key} className="page-header" style={this.getStyle()}>
                <div className="header-logo-wrapper" style={this.pageHeaderSpecs['logoStyle']}>
                    <Link to={this.pageHeaderSpecs['logoURL']}>
                        <img alt="page logo" src={this.pageHeaderSpecs['logo']}>
                        </img>
                    </Link>
                </div>            
                <div className="header-title" style={this.getHeaderStyle()}>
                    {this.pageHeaderSpecs['title']}
                </div>
                <HeaderTabs sections={this.sections} moreIcon={this.pageHeaderSpecs['mobileMoreIcon']} moreStyle={this.pageHeaderSpecs['mobileMoreStyle']} />
            </section>
        );
    }
}

export default PageHeader;
