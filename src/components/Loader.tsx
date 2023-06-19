import { useLoader } from "@/context";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { Dna } from "react-loader-spinner";
import { useState } from "react";

export const Loader: React.FC = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isLoading } = useLoader();
  const { onClose } = useDisclosure();
  const [overlay] = useState(<OverlayOne />);

  return (
    <Modal
      isCentered
      isOpen={isLoading}
      onClose={onClose}
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      {overlay}
      <ModalContent
        bg="transparent"
        boxShadow="none"
        border="none"
        borderRadius="none"
        display={isLoading ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
      >
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </ModalContent>
    </Modal>
  );
};
