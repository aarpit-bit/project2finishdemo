import React, { useState } from "react";

/* REACT BOOTSTRAP */
import { Button, Form } from "react-bootstrap";

/* REACT ROUTER DOM */
import { useNavigate } from "react-router-dom";

function SearchBox() {
  /* STATE */
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  /* HANDLER */
  const submitHandler = (e) => {
    e.preventDefault();

    // WHEN USER HITS SUBMIT, REDIRECT TO HOME PAGE TO SEE PRODUCTS AND APPEND ?keyword=...IN URL
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`); // Using navigate instead of history.push
    } else {
      // IF WE HIT SUBMIT WITHOUT KEYWORD, WE DON'T WANT THE USER TO GET REDIRECTED, SO STAY ON CURRENT PAGE
      navigate(window.location.pathname); // Navigate to the current page if no keyword
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2 mx-sm-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
