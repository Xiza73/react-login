import { useAuth } from "@/context";
import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const MAGIC_TOKEN = "abc123";

export const Login: React.FC = () => {
  const { login } = useAuth();
  const [magicToken, setMagicToken] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMagicToken(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!magicToken || magicToken !== MAGIC_TOKEN) return;
    login();
  };

  return (
    <Flex
      width="full"
      height="full"
      sx={{
        paddingTop: "20vh",
      }}
      align="center"
      justifyContent="center"
    >
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Your Token:</FormLabel>
              <Input
                type="text"
                placeholder="abc123..."
                borderColor="gray.300"
                onChange={handleInputChange}
                value={magicToken}
              />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              backgroundColor="blue.300"
              _hover={{ backgroundColor: "blue.200" }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};
