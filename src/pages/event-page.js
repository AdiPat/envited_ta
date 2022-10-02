import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import { ImCalendar, ImLocation } from "react-icons/im";
import { EventInfo } from "../components";
import { EVENT_IMAGE_HEIGHT, formatEndDate, formatStartDate } from "../utils";

function EventPage() {
  const location = useLocation();

  const {
    eventName,
    hostName,
    startDate,
    endDate,
    selectedImage,
    location: place,
  } = location?.state ?? {};

  return (
    <section className="event-section">
      <div className="event">
        <div className="event-header">
          <h1 className="event-header-h1">{eventName}</h1>
          <h4 className="event-header-sub">
            Hosted by{" "}
            <span className="event-header-sub-hostname">{hostName}</span>
          </h4>
          <div className="event-info-block">
            <EventInfo
              icon={
                <ImCalendar
                  style={{
                    color: "#8456EC",
                  }}
                  size="30px"
                />
              }
              title={`From ${formatStartDate(startDate)}`}
              subtitle={`To 12:30pm ${formatEndDate(endDate)}`}
            />
            <EventInfo
              icon={
                <ImLocation
                  style={{
                    color: "#8456EC",
                  }}
                  size="30px"
                />
              }
              title={place}
              subtitle={""}
            />
          </div>
        </div>
        <div className="event-image">
          <Image
            src={URL.createObjectURL(selectedImage)}
            height={EVENT_IMAGE_HEIGHT}
          />
        </div>
      </div>
    </section>
  );
}

export { EventPage };
