import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-2 my-3" onSubmit={handleSubmit}>
      <div className="w-full flex items-center">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="p-3 rounded text-white ml-2 bg-black">
          {loading ? (
            <div className="loading loading-spinner mx-auto"></div>
          ) : (
            <LuSendHorizonal />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
