
import Tag from './Tag';
import React from 'react';

const DogCard = ({image, name, description, tagColor, tagText}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tag tagColor={tagColor} tagText={tagText}/>
      </Card.Body>
    </Card>
);
};
export default DogCard;