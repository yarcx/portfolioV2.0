import {
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Drawer,
  Heading,
} from "@chakra-ui/react";
import useDisplayHooks from "../hooks/useDisplayHooks";
import useUiContext from "../hooks/useUiContext";
import { Link } from "react-router-dom";
import { SideBarButtons } from "./Layout/LeftSideBar";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: IProps) => {
  const { bgColor, borderColor } = useDisplayHooks();
  const {
    state: { uiColor },
  } = useUiContext();

  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={bgColor} borderRight={`1px solid`} borderColor={borderColor}>
        <DrawerCloseButton />
        <DrawerHeader>
          <Heading color={uiColor} pl={3} className='logoFonts' fontWeight={600}>
            <Link to='/'>Yarcx</Link>
          </Heading>
        </DrawerHeader>

        <DrawerBody>
          <SideBarButtons />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileSidebar;
