import { Badge } from "@chakra-ui/react";
import useUiContext from "../hooks/useUiContext";

const CustomBadge = ({ text = "Software Engineer" }: { text: string }) => {
  const {
    state: { uiColor },
  } = useUiContext();
  return (
    <Badge
      variant='outline'
      px='1'
      cursor='pointer'
      _hover={{ bg: uiColor, color: "white" }}
      transition='all .2s ease-in'
      border='0.5px solid'
      textTransform='capitalize'
    >
      {text}
    </Badge>
  );
};

export default CustomBadge;
