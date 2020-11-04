import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/App.scss';
import axios from "axios";
import { Container, Row } from "react-bootstrap"

function Slug(props) {
  const history = useHistory();
  let slug = props.match.params.slug

  useEffect(() => {
    axios.get(`https://stark-shelf-20245.herokuapp.com/api/slug?slug=${slug}`, {
      headers: {
        authorization: `Token token=${localStorage.getItem('access_token')}`,
      },
    })
    .then((response) => {
      history.push(`/recipes/${response.data.recipe_id}/twists/${response.data.twist_id}`)
    })
    .catch(function(error) {
      console.log(error);
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