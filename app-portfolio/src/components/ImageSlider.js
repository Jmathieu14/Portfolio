const { $ } = require('jquery');
const React = require('react');
const { genKey } = require('./Utility');
// An image slider component that uses the slick jQuery library
class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.specs = props.specs;
        this.images = this.specs.images;
        this.slider = null;
        this.id = props.id;
        this.settings = {
            dots: true,
            arrows: true
        }
    }
    componentDidMount() {
        $('#' + this.id).slick(this.settings);
    }
    render() {
        let imageElements = this.images.map((obj) => 
            <div key={genKey(obj.text)}>
                <img alt={obj.text} src={obj.path} />
            </div>
        );
        return (
            <div id={this.id} className="ec-image-slider container">
                {imageElements}
            </div>
        );
    }
}
module.exports = {
    ImageSlider: ImageSlider
};
