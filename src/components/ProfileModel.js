import React, { Component } from 'react'
import { Modal, Button, Card, ListGroup, ListGroupItem, Tab, Tabs, } from 'react-bootstrap'


export class ProfileModel extends Component {

    render() {
        return (
            <div>
                 <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header>
                    <Card.Title>{this.props.title}</Card.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="400" height="200" src={`https://www.youtube.com/embed/${this.props.trailerKey}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                    <Tabs defaultActiveKey="Overview" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Overview" title="Overview" >
                            <p className='overview'> {this.props.overview} </p>
                        </Tab>
                        <Tab eventKey="Details" title="Details">
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{`Release Date: ${this.props.release_date}`}</ListGroupItem>
                                <ListGroupItem>{`Popularity: ${this.props.popularity}`}</ListGroupItem>
                                <ListGroupItem>{`Vote Count: ${this.props.vote_count}`}</ListGroupItem>
                                <ListGroupItem>{`Average Vote: ${this.props.vote_average}`}</ListGroupItem>
                            </ListGroup>
                        </Tab>
                    </Tabs>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={() => this.props.deleteMovie(this.props.index)}>
                        Remove From Favorites
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

export default ProfileModel

