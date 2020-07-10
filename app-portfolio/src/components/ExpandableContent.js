const React = require('react');
const { genKey, checkObjAndKey } = require('./Utility');
const { ImageSlider } = require('./ImageSlider');
// Part of an Angular Section that allows one to expand and view additional content (if included in layout file)
class ExpandableContent extends React.Component {
    constructor(props) {
        super(props);
        this.eCSpecs = props.eCSpecs;
        this.handleContentExpansion = props.handleContentExpansion;
        this.state = props.state;
        this.updateParentObject = this.updateParentObject.bind(this);
        this.toggleLocalState = this.toggleLocalState.bind(this);
    }
    // Toggle the local state of this object
    toggleLocalState() {
        if (this.state !== null) {
            this.setState({ contentExpanded: !this.state.contentExpanded })
        }
    }
    updateParentObject() {
        this.toggleLocalState();
        this.props.handleContentExpansion();
    }
    getECClassName() {
        if (this.state !== null && this.state.contentExpanded) {
            return "expandable-content-wrapper expanded";
        } else return "expandable-content-wrapper"; 
    }
    render() {
        if (checkObjAndKey(this.eCSpecs, 'show') && this.eCSpecs['show']) {
            let imageSlider = null;
            if (checkObjAndKey(this.eCSpecs, 'imageSliderSpecs') && this.eCSpecs.imageSliderSpecs !== null) {
                imageSlider = <ImageSlider specs={this.eCSpecs.imageSliderSpecs}
                id={genKey("IMAGE_SLIDER")} 
                key={genKey("IMAGE_SLIDER_KEY")}
                />
            }
            return (
                <div className={this.getECClassName()}>
                    <div className="ec-menu-bar">
                        <button onClick={this.updateParentObject} className="ec-button">
                            <img className="ec-icon" src={this.eCSpecs['icon']}>
                            </img>
                        </button>
                    </div>
                    <div className="expandable-content">
                        {imageSlider}
                    </div>
                </div>
            );
        } else return null;
    }
}
module.exports = {
    ExpandableContent: ExpandableContent
};
