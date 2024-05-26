import Card from 'react-bootstrap/Card';
import Tag from './Tag';
import React from 'react';

const DogCard = ({image, name, description, tagColor, tagText}) => {

  return (
    <div classname="card">
    <Card style={{ width: '18rem', height: '450px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <Card.Title><strong>{name}</strong></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tag tagColor={tagColor} tagText={tagText}/>
      </Card.Body>
    </Card>
    </div>
);
};
export default DogCard;