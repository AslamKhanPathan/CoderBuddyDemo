import  { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { simpleGetCall } from '../api/ApiServices';
import { ApiConfig } from '../api/ApiConfig';
import Loader from '../comman/Loader';
const PostCard = () => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCardData = () => {
        simpleGetCall(ApiConfig.USER_LIST)
            .then((res) => {
                setCardData(res?.data); // Replace with res.data in actual implementation
            })
            .catch((error) => {
                console.error('Error fetching card data:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCardData()
    }, []);

    return (
        <div className="main-post-wrapper">
            {loading ? (
                <Loader />
            ) : (
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {cardData.length > 0 ? (
                            cardData.map((post) => (
                                <Col key={post.id}>
                                    <Card className="h-100 post-card me-2">
                                        <div className="card-image-container">
                                            <Card.Img
                                                variant="top"
                                                src={post.image}
                                                alt="Post Image"
                                                className="post-image"
                                            />
                                        </div>
                                        <Card.Body>
                                            <div className="avatar-container">
                                                <img
                                                    src={post.avatar}
                                                    alt="Author Avatar"
                                                    className="avatar-img"
                                                />
                                                <Card.Title>{post.firstName} {post.lastName}</Card.Title>
                                            </div>
                                            <Card.Text>{post.writeup}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col>
                                <p>No Data Found</p>
                            </Col>
                        )}
                    </Row>
                </Container>
            )}
        </div>
    );
};

export default PostCard;
