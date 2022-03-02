import { InlineShareButtons } from "sharethis-reactjs";
import "./index.css";

const ShareButtons = ({ page }) => {
  return (
    <InlineShareButtons
      config={{
        alignment: "center",
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

export default ShareButtons;
