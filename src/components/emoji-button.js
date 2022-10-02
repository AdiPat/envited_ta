function EmojiButton({ emoji, text, onClick }) {
  return (
    <div onClick={onClick} class="emoji-button">
      {emoji}
      &nbsp;
      {text}
    </div>
  );
}

export { EmojiButton };
