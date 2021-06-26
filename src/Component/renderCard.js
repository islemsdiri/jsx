import "./MovieCard.css";
import { Card } from "react-bootstrap";
import Rate from './Rate'
const RenderCard = (card, index,props) => {
  // return (
  //     <p>{card.Title}</p>
  // )
  return (
    <Card style={{ width: "18rem" }} key={index} className="movie">
      <Card.Img variant="top" src="holder.js/100px180" src={card.Image} />
      <Card.Body>
        <Card.Title>{card.Title}</Card.Title>
        <Card.Text> {card.Text}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <div>   <Rate rating={props.Rating} style={{ height: "20px" }} />
</div>
      </Card.Body>
    </Card>
  );
};
export default RenderCard;
