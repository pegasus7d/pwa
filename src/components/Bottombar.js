import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  ButtonGroup,
} from "@chakra-ui/react";

import { IoSend } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import { useState } from "react";

const Bottombar = (props) => {
  const [input, setInput] = useState("");
  console.log(input);
  let id1 = Math.random();
  let id2 = Math.random();
  const sendMessage = (e) => {
    e.preventDefault();
    props.chats.push({
      id: id1,
      message: input,
      sender: {
        image:
          "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
        is_kyc_verified: false,
        self: false,
        user_id: "a6c04ceed74b447280f5fa7ab053adcc",
      },
      time: "2023-05-12 15:32:16",
      key: id2,
    });
    console.log(props.chats);

    setInput("");
  };
  return (
    <FormControl p={3} onSubmit={sendMessage} as="form">
      <InputGroup>
        <Input
          placeholder="Type a message ...."
          autoComplete="off"
          bgColor="#FFFFFF"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></Input>
        <InputRightElement mr={6}>
          <ButtonGroup size="sm" isAttached>
            <Button variant="link">
              <FiPaperclip />
            </Button>
            <Button variant="link" type="submit" onClick={sendMessage}>
              <IoSend />
            </Button>
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default Bottombar;
