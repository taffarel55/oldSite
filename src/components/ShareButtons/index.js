import { InlineShareButtons, InlineReactionButtons } from "sharethis-reactjs";
import "./index.css";

const ShareButtons = ({ page }) => {
  return (
    <InlineShareButtons
      config={{
        alignment: "left",
        color: "social",
        enabled: true,
        font_size: 16,
        networks: ["telegram", "whatsapp", "linkedin", "twitter"],
        padding: 12,
        radius: 20,
        show_total: false,
        size: 40,
        show_mobile_buttons: true,

        // OPTIONAL PARAMETERS
        image: page.img, // (defaults to og:image or twitter:image)
        description: page.description, // (defaults to og:description or twitter:description)
        title: page.title, // (defaults to og:title or twitter:title)
        username: "taffarel55", // (only for twitter sharing)
      }}
    />
  );
};

const ReactingButtons = () => {
  return (
    <InlineReactionButtons
      config={{
        alignment: "center", // alignment of buttons (left, center, right)
        enabled: true, // show/hide buttons (true, false)
        language: "pt", // which language to use (see LANGUAGES)
        min_count: 0, // hide react counts less than min_count (INTEGER)
        padding: 20, // padding within buttons (INTEGER)
        reactions: [
          // which reactions to include (see REACTIONS)
          "slight_smile",
          "heart_eyes",
          "laughing",
          "astonished",
          "sob",
          "rage",
        ],
        size: 48, // the size of each button (INTEGER)
        spacing: 8, // the spacing between buttons (INTEGER)

        // OPTIONAL PARAMETERS
        url: "https://www.sharethis.com", // (defaults to current url)
      }}
    />
  );
};

export default ShareButtons;

export { ReactingButtons };
