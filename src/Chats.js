import React from "react";
import Chat from "./Chat";
import "./Chats.css";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Marilyn monroe"
        message="what's up?"
        timestamp="35 minutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3MDU5MTEzMzM4MTQ4/marilyn_monroe_photo_alfred_eisenstaedt_pix_inc_the_life_picture_collection_getty_images_53376357_cropped.jpg"
      />
    </div>
  );
}

export default Chats;
