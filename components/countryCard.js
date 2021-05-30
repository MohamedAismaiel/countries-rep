import Link from "next/link";
import { useContext } from "react";
import { CountryContext } from "./context/countryContext";

const Country = (props) => {
  const modectx = useContext(CountryContext).mode;
  const cardClass = modectx ? "card card-dark" : "card card-light";
  const cardtextClass = modectx
    ? "card-text card-text-dark card-text-pop"
    : "card-text card-text-light card-text-pop";
  const spanClass = modectx ? "textspan-dark " : "textspan-light ";
  return (
    <Link href={`/${props.code}`}>
      <div className={cardClass}>
        <img className="card-image" src={props.image} alt="country image"></img>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className={cardtextClass}>
            <span className={spanClass}>Population: </span>
            {props.population}
          </p>
          <p className="card-text-region card-text">
            <span className={spanClass}>Region: </span>
            {props.region}
          </p>
          <p className="card-text-capital card-text">
            <span className={spanClass}>Capital: </span>
            {props.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Country;

// (
//     <Row xs={1} md={4} className="g-4 ">
//       <Col className="mr-auto">
//         <Link href="/id">
//           <Card style={{ width: "18rem" }}>
//             <Card.Img
//               variant="top"
//               src="https://via.placeholder.com/300.png/09f/fff"
//             />
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//               <ListGroupItem>Cras justo odio</ListGroupItem>
//               <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//               <ListGroupItem>Vestibulum at eros</ListGroupItem>
//             </ListGroup>
//             <Card.Body>
//               <Card.Link href="#">Card Link</Card.Link>
//               <Card.Link href="#">Another Link</Card.Link>
//             </Card.Body>
//           </Card>
//         </Link>
//       </Col>

//     </Row>
//   );
