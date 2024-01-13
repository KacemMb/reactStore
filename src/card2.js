import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import iphoneData from './Data/ipad.json';
import './cardIphone.css';
function BasicExample2() {
  return (
    <div className='iphoneBox'>
      {iphoneData.map((data, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px' , boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
          {/* Add an image_url property to your JSON data */}
          <Card.Img variant="top" src={data.image_url} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.information}</Card.Text>
            <Button variant="primary">{data.price}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BasicExample2;
