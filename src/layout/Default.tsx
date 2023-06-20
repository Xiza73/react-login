import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "@/components";
import { AuthRoutes, PublicRoutes, UserRoutes } from "@/router";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useSelector } from "@/redux";

const LinkLabels = [PublicRoutes.HOME, AuthRoutes.LOGIN];
const PrivateLinkLabels = [UserRoutes.PROFILE];

export interface DefaultProps {
  children: ReactNode;
}

export const Default: React.FC<DefaultProps> = ({ children }) => {
  const { logout } = useAuth();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to={PublicRoutes.HOME.path} replace>
              Logo
            </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {(isAuthenticated ? PrivateLinkLabels : LinkLabels).map(
                (route) => (
                  <NavLink key={route.path} to={route.path}>
                    {route.label}
                  </NavLink>
                )
              )}
            </HStack>
          </HStack>
          {isAuthenticated && (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                  />
                </MenuButton>
                <MenuList>
                  {[UserRoutes.PROFILE].map((route) => (
                    <MenuItem
                      key={route.path}
                      onClick={() => handleNavigate(route.path)}
                    >
                      {route.label}
                    </MenuItem>
                  ))}
                  <MenuDivider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {(isAuthenticated ? PrivateLinkLabels : LinkLabels).map(
                (route) => (
                  <NavLink key={route.path} to={route.path}>
                    {route.label}
                  </NavLink>
                )
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
};
