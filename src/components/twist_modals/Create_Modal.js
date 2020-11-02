import React, {useState} from "react";
import {Modal, Button, Form, Col} from "react-bootstrap";
import axios from "axios";
import faker from "faker";

const TwistCreateModal = (props) => {
  const {show, onHide, user, recipe, random} = props;
  const [state, setState] = useState({
    content: "",
    private: false,
    category: "Ingredient Replacement",
  });
  //handle state changes for checkbox and field content
  const handleChange = (event) => {
    const {type, checked} = event.target;
    const eventValue = event.target.value;
    setState({
      ...state,
      [event.target.name]: eventValue,
      [event.target.name]: type === "checkbox" ? checked : eventValue,
    });
  };

  const handleSubmit = (event) => {
    axios
      .post("/api/twists", {
        content: state.content,
        recipe_id: recipe,
        user_id: user.id,
        tags: state.category,
        slug: faker.lorem.slug(1),
        is_private: state.private,
        sort_order: 1,
      })
      .then(() => {
        random();
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    event.preventDefault();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header onClick={onHide} closeButton>
            <Modal.Title>Create a New Twist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} {...state}>
              <Form.Group>
                <Form.Label>
                  Do you have an idea to make this recipe better? Enter your
                  personal twist here to share it!
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter twist"
                  value={state.content}
                  onChange={handleChange}
                  required
                  name="content"
                />
                <Form.Group as={Col}>
                  <Form.Label>Select a Category for Twist</Form.Label>
                  <Form.Control
                    as="select"
                    id="inlineFormCustomSelect"
                    value={state.category}
                    onChange={handleChange}
                    name="category"
                    custom
                  >
                    <option value="Ingredient Replacement">
                      Ingredient Replacement
                    </option>
                    <option value="Cooking Time">Cooking Time</option>
                    <option value="Healthy Options">Healthy Options</option>
                    <option value="Add Something Extra">
                      Add Something Extra
                    </option>
                    <option value="Take Something Out">
                      Take Something Out
                    </option>
                  </Form.Control>
                </Form.Group>
              </Form.Group>
              <Button
                onClick={onHide}
                bsPrefix
                type="submit"
                className="gen-button login-buttons"
              >
                Submit Twist
              </Button>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  checked={state.private}
                  label="Set Twist Private"
                  name="private"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default TwistCreateModal;