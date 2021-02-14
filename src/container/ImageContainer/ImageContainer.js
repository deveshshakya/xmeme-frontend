import React, {Component} from "react";
import ImageWithInfo from "../../components/ImageWithInfo/ImageWithInfo";

class ImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memes: []
        }
    }

    componentDidMount() {
        fetch('http://ec2-52-66-214-28.ap-south-1.compute.amazonaws.com:8081/memes', {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        })
            .then(memes => {
                return memes.json();
            })
            .then(memes => {
                this.setState({
                    memes: memes.map(meme => ({
                        id: meme.id,
                        name: meme.name,
                        caption: meme.caption,
                        url: meme.url
                    }))
                });
            })
            .catch(console.log)
    }

    render() {
        const {memes} = this.state;
        const images = memes.map(meme => <ImageWithInfo key={meme.id} name={meme.name} caption={meme.caption} url={meme.url}/>);

        return (
            <div className="container-fluid d-flex flex-wrap justify-content-start">
                {images}
            </div>
        )
    }
}

export default ImageContainer;