import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Marilyn Monroe",
      img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3MDU5MTEzMzM4MTQ4/marilyn_monroe_photo_alfred_eisenstaedt_pix_inc_the_life_picture_collection_getty_images_53376357_cropped.jpg",
      message: "What's up",
    },
    {
      name: "Marilyn Monroe",
      img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3MDU5MTEzMzM4MTQ4/marilyn_monroe_photo_alfred_eisenstaedt_pix_inc_the_life_picture_collection_getty_images_53376357_cropped.jpg",
      message: "How it is going?",
    },
    {
      message: "Hi!!!",
    },
  ]);
  const handleFunc = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <>
      <div className="chatScreen">
        <p className="chatScreen__title">
          YOU MATCHED WITH MARILYN MONROE ON 15/10/21 ciao mtf
        </p>
        {messages.map((e) =>
          e.name ? (
            <div className="chatScreen__message">
              <Avatar className="chatScreen__image" alt={e.name} src={e.img} />
              <p className="chatScreen__text">{e.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{e.message}</p>
            </div>
          )
        )}
      </div>
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="chatScreen__inputField"
          placeholder="Type a message..."
        />
        <button
          onClick={handleFunc}
          type="submit"
          className="chatScreen__inputButton"
        >
          {" "}
          SEND
        </button>
      </form>
    </>
  );
}

export default ChatScreen;
