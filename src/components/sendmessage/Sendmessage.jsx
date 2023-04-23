import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Input = styled.textarea`
  width: 500px;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #0077ff;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0066cc;
  }
`;

const Sendmessage = () => {
  const [report, setReport] = useState("");

  const handleSend = () => {
    // Send the report to the server
    console.log("Sending report:", report);
    // Reset the input field
    setReport("");
    // Show an alert to the user
    alert("Report sent successfully!");
  };

  return (
    <Container>
      <Title>Report Page</Title>
      <Input
        value={report}
        onChange={(e) => setReport(e.target.value)}
        placeholder="Type your report here"
      />
      <Button onClick={handleSend}>Send Report</Button>
    </Container>
  );
};

export default Sendmessage;
