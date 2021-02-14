import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            caption: undefined,
            url: undefined
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onCaptionChange = (event) => {
        this.setState({caption: event.target.value})
    }

    onURLChange = (event) => {
        this.setState({url: event.target.value})
    }

    onSubmit = () => {
        const {name, caption, url} = this.state;

        if (!name || !caption || !url) {
            alert("Field can't be empty.");
        } else {
            fetch('ec2-52-66-214-28.ap-south-1.compute.amazonaws.com:8081/memes', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    caption: caption,
                    url: url
                })
            })
                .then(id => id.json())
                .then(console.log)
                .catch(console.log)
        }
    }

    render() {
        return (
            <div className="container-fluid h-auto">
                <div className="mt-3 mb-3">
                    <h2 className="text-center font-weight-bold">Meme Stream</h2>
                </div>
                <div>
                    <form className="w-75 container">
                        <div className="mb-3">
                            <label>Meme Owner</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your full name"
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Caption</label>
                            <input
                                type="text"
                                className="form-control"
                                id="caption"
                                placeholder="Be creative with the caption"
                                onChange={this.onCaptionChange}
                            />
                        </div>
                        <div className="mb-5">
                            <label>URL</label>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="url"
                                    placeholder="Enter URL of your meme here"
                                    onChange={this.onURLChange}
                                />
                                <div className="input-group-append">
                                    <button
                                        style={{color: 'black', backgroundColor: 'lightsteelblue'}}
                                        className="btn btn-outline-secondary" onClick={this.onSubmit}>Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;