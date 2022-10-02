import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ImageUploader({ selectedImage, setSelectedImage }) {
  return (
    <div>
      {selectedImage && (
        <div className="preview-image">
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <Button variant="danger" onClick={() => setSelectedImage(null)}>
            Remove
          </Button>{" "}
          <br />
          {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
        </div>
      )}

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control
          type="file"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </Form.Group>

      {/* <input
        type="file"
        name="event-image"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}
    </div>
  );
}

export { ImageUploader };
