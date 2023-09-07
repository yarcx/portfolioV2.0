import {
  ModalFooter,
  ModalBody,
  Button,
  ModalHeader,
  HStack,
  VStack,
  Text,
  Checkbox,
  useColorMode,
} from "@chakra-ui/react";
import useUiContext from "../hooks/useUiContext";
import useDisplayHooks from "../hooks/useDisplayHooks";
import { App_Ui_Colors, DARK_MODE, LIGHT_MODE } from "../utils/constants";
import { MdCheck } from "react-icons/md";

const DisplaySettingsModal = () => {
  const {
    state: { modalProps, uiColor },
    closeSettingsModal,
    changeUiColor,
  } = useUiContext();
  const { borderColor, displayUiBg } = useDisplayHooks();
  const { colorMode, setColorMode } = useColorMode();

  const title = modalProps?.title as string;

  return (
    <>
      <ModalHeader textAlign='center' fontSize='xl' fontWeight='extrabold'>
        {title || "Modal Title"}
      </ModalHeader>
      <ModalBody>
        <Text textAlign='center' color=''>
          Use the settings bellow to customize the feel and look of the app
        </Text>
        <VStack align='start' mt={4}>
          <Text fontSize='12px' fontWeight='bold' color='gray.500'>
            Color
          </Text>
          <HStack
            bg={displayUiBg}
            w='full'
            py='6px'
            px='8px'
            rounded='lg'
            flexWrap='wrap'
            justify='space-between'
          >
            {App_Ui_Colors.map((color) => (
              <HStack
                align='center'
                justify='center'
                key={color}
                rounded='full'
                cursor='pointer'
                w='2.6rem'
                h='2.6rem'
                bg={color}
                onClick={() => {
                  changeUiColor(color);
                }}
              >
                {uiColor === color && <MdCheck color='white' size='20' />}
              </HStack>
            ))}
          </HStack>
        </VStack>
        <VStack align='start' mt={4}>
          <Text fontSize='12px' fontWeight='bold' color='gray.500'>
            Background
          </Text>
          <HStack
            bg={displayUiBg}
            w='full'
            py='10px'
            px='8px'
            rounded='lg'
            flexWrap='wrap'
            justify='center'
            gap='1rem'
          >
            <Button
              leftIcon={
                <Checkbox
                  borderColor={borderColor}
                  isChecked={colorMode === LIGHT_MODE}
                  value={LIGHT_MODE}
                  onChange={() => setColorMode(LIGHT_MODE)}
                >
                  Default
                </Checkbox>
              }
              bg='white'
              onClick={() => setColorMode(LIGHT_MODE)}
              color='black'
              size='lg'
              fontSize='bold'
              py='2rem'
              px='2rem'
              border={colorMode === LIGHT_MODE ? "2px solid" : ""}
              borderColor={uiColor}
              _hover={{ bg: "white", opacity: ".7" }}
            ></Button>
            <Button
              leftIcon={
                <Checkbox
                  borderColor={borderColor}
                  isChecked={colorMode === DARK_MODE}
                  value={DARK_MODE}
                  onChange={() => setColorMode(DARK_MODE)}
                >
                  Light out
                </Checkbox>
              }
              bg='black'
              onClick={() => setColorMode(DARK_MODE)}
              color='white'
              size='lg'
              fontSize='bold'
              py='2rem'
              px='2rem'
              border={colorMode === DARK_MODE ? "2px solid" : ""}
              borderColor={uiColor}
              _hover={{ bg: "black", opacity: ".7" }}
            ></Button>
          </HStack>
        </VStack>
      </ModalBody>

      <ModalFooter>
        <HStack justifyContent='center' align='center' w='full'>
          <Button
            mr={3}
            _hover={{ bg: uiColor, opacity: ".7" }}
            bg={uiColor}
            color='white'
            onClick={closeSettingsModal}
          >
            Done
          </Button>
        </HStack>
      </ModalFooter>
    </>
  );
};

export default DisplaySettingsModal;
