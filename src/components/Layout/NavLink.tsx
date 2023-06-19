import { Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, to }) => (
  <Link to={to}>
    <Box
      px={2}
      py={1}
      rounded={"md"}
      cursor="pointer"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Box>
  </Link>
);
