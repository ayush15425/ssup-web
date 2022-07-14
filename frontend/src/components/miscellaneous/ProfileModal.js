import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import React, { Component } from "react";
const updateProfile = () => {};

const ProfileModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = ChatState();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
          bg="#21242a"
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px" bg="#21242a">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
            color={"white"}
          >
            {user.name.toUpperCase()}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            color={"white"}
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />

            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
