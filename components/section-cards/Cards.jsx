import Image from "next/image";

import { Card } from "react-bootstrap";

export const Cards = ({ children, data }) => {
  return (
    <>
      <Card className="card__section">
        <Card.Header className="card__header">
          <Image src={children} alt="icono" />
          <Card.Title className={`text-center title_${data.page}`}>
            {data.title}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center"> {data.text} </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
