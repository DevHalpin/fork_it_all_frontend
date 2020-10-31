import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/App.scss';
import axios from "axios";
import { Container, Row } from "react-bootstrap"

function Slug(props) {
  const history = useHistory();
  let slug = props.match.params.slug
  // const [state, setState] = useState(1);

  useEffect(() => {
    axios.get(`/api/slug?slug=${slug}`)
    .then((response) => {
      // console.log(response.data.recipe_id);
      history.push(`/recipes/${response.data.recipe_id}/twists/${response.data.twist_id}`)
    });
  });

  return (
    <Container>
      <Row>
        Loading.....
      </Row>
    </Container>    
    );
}

export default Slug;