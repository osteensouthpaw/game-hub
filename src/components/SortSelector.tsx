import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: 
      </MenuButton>
      <MenuList>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Rating</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Popularity</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
