import { EmojiButton } from "./emoji-button";

function LandingHeader() {
  const handleOnCreate = () => {
    window.location = "/create";
  };

  return (
    <div className="landing-header">
      <h1 className="landing-header-title">
        Imagine if
        <br></br>
        <span className="landing-header-title-gradient">Snapchat</span>
        <br></br>
        had events.
      </h1>
      <h4 className="landing-header-sub">
        Easily host and share events with your friends.
        <br></br>
        across any social media.
      </h4>
      <EmojiButton
        emoji={"🎉"}
        text="Create my event"
        onClick={handleOnCreate}
      />
    </div>
  );
}

export { LandingHeader };
