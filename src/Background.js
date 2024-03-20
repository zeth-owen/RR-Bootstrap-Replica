import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
                <Card style={{ width: "100%", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
                    <div style={{ padding: "20px" }}>
                        <Card.Title style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                        </Card.Title>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="Enter your address" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div style={{ flex: 1 }}>
                <img style={{ height: "428px", width: "100%", objectFit: "cover" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card" />
            </div>
        </div>
    )
}



