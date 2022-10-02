import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-date-picker";
import { CreateEventHeader, ImageUploader } from "../components";
import { EmojiButton } from "../components/emoji-button";

function CreatePage() {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  let navigate = useNavigate();

  const handleSubmit = () => {
    if (
      eventName !== "" &&
      hostName !== "" &&
      location !== "" &&
      startDate &&
      endDate &&
      selectedImage
    ) {
      navigate("/event", {
        state: {
          eventName,
          hostName,
          location,
          startDate,
          endDate,
          selectedImage,
        },
      });
    } else {
      alert("Please enter all details. ");
    }
  };

  return (
    <section className="create-section">
      <div className="create">
        <CreateEventHeader />
        <div className="create-form">
          <InputGroup>
            <InputGroup.Text id="event-name">Event Name</InputGroup.Text>
            <Form.Control
              placeholder="John's Birthday"
              aria-label="EventName"
              aria-describedby="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </InputGroup>
          <hr />
          <InputGroup>
            <InputGroup.Text id="host-name">Host Name</InputGroup.Text>
            <Form.Control
              placeholder="Jane Doe"
              aria-label="hostName"
              aria-describedby="hostName"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
            />
          </InputGroup>
          <hr />
          <InputGroup>
            <InputGroup.Text id="location">Location</InputGroup.Text>
            <Form.Control
              placeholder="Melbourne"
              aria-label="location"
              aria-describedby="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </InputGroup>
          <hr />
          <InputGroup>
            <InputGroup.Text id="start-date">Start Date</InputGroup.Text>
            <DatePicker onChange={setStartDate} value={startDate} />
            <InputGroup.Text style={{ marginLeft: "8px" }} id="end-date">
              End Date
            </InputGroup.Text>
            <DatePicker onChange={setEndDate} value={endDate} />
          </InputGroup>
          <hr />
          <ImageUploader
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <hr />
          <div className="form-button-container">
            <EmojiButton onClick={handleSubmit} emoji={"✏️"} text="Next" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { CreatePage };
