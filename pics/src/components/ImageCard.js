import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    // reason we used componentDidMount, we can reach ref after the component renders itself
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // setSpans is a arrow function, because if we make it normal function
    // this keyword became problem.
    setSpans =  () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10 + 1) // we add 1 because I don't know
        // below equal to this.setState( { spans: spans}) ES2015
        this.setState( { spans })

    }


    render() {
        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard