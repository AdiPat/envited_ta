function EventInfo({ icon, title, subtitle }) {
  return (
    <div className="event-info">
      <div className="event-info-icon">{icon}</div>
      <div>
        <p className="event-info-title">{title}</p>
        <p className="event-info-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export { EventInfo };
