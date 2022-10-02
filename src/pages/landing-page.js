import { EventCard, LandingHeader } from "../components";

function LandingPage() {
  return (
    <section className="landing-section">
      <div className="landing-container">
        <LandingHeader />
        <EventCard />
      </div>
    </section>
  );
}

export { LandingPage };
