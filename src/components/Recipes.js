import React from "react";
import {Dropdown, DropdownButton, Card, CardDeck, Container, Col, Button, Form} from 'react-bootstrap';

const Recipes = () => {
  return (
    // Recipe options menu
    <>
      <Container>
        <Col>
          < DropdownButton title="Recipe Options" align="right" className="recipe-dropdown">
            <Dropdown.Item href="#/action-1">Share</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Rate</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Create Twist</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Add to Favorites</Dropdown.Item>
          </DropdownButton>
        </Col>

        {/* // Recipe display */}
        <CardDeck className="recipe-columns">
          <Card className="recipe-card" >
            <Card.Img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
            <Card.Body className="recipe-body">
              <Card.Header as="h5" className="text-center">Juicy Mini Burgers!</Card.Header>
              <Card.Text className="recipe-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper gravida pharetra. Phasellus commodo, sapien eu cursus dictum, augue sapien volutpat eros, nec commodo nisl dui in arcu. Nulla nec sodales ipsum. Donec ut orci eu elit vulputate porta a sodales elit. Morbi sagittis ultrices est hendrerit commodo. Quisque interdum tempor nisi lobortis venenatis. Nam nunc leo, maximus sit amet nulla eget, dapibus ultricies risus.

                Suspendisse porta venenatis maximus. Aenean id eros at sapien vulputate faucibus. Ut auctor enim vestibulum, laoreet risus ac, fringilla orci. Suspendisse velit libero, laoreet quis ligula nec, consectetur tempor est. Duis quis tristique elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dolor dolor, commodo eget sapien eu, faucibus gravida nunc. Nam ut sem id turpis posuere volutpat sed in mauris. Etiam in justo elit. Mauris ante arcu, tincidunt tincidunt dapibus gravida, cursus ac urna. Maecenas finibus, enim et commodo pulvinar, lacus nisi molestie mi, eget consequat felis est ac enim. Duis ut nulla maximus, porttitor enim ut, eleifend tortor. In vitae ligula sit amet mauris sodales blandit vitae ac metus. Phasellus lobortis vestibulum est, nec facilisis augue sodales sit amet. Nulla ullamcorper nisl leo, at placerat lacus dignissim.
            </Card.Text>
            </Card.Body>
          </Card>
          {/* Twist display */}
          <Card className="text-center twist-card">
            <Card.Header as="h5">User Twists!</Card.Header>
            <Card.Body>
              <Card.Title>User@handle suggests including the following twist:</Card.Title>
              <Card.Text>
                Try to parse the SMTP alarm, maybe it will quantify the auxiliary feed!
              </Card.Text>
              <Button variant="primary">Find a random Twist</Button>
            </Card.Body>
            <Form>
              <Form.Group as={Col}>
                <Form.Label>Find Twists by User</Form.Label>
                <Form.Control size="md" type="text" placeholder="Enter a user handle" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Search by Twist Type</Form.Label>
                <Form.Control as="select" id="inlineFormCustomSelect"
                  custom>
                  <option value="0">Select an option</option>
                  <option value="1">Ingredient Replacement</option>
                  <option value="2">Cooking Time</option>
                  <option value="3">Healthy Options</option>
                  <option value="4">Add Something Extra</option>
                  <option value="5">Take Something Out</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Disable Twists" />
              </Form.Group>
            </Form>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
};

export default Recipes;