import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import MenuButton from "./MenuButton";
import { Dispatch, SetStateAction } from "react";
import { JsonRpcSigner } from "ethers";
import MetaMaskButton from "./MetamaskButton";
import { Link } from "react-router-dom";

interface HeaderProps {
  signer: JsonRpcSigner | null;
  setSigner: Dispatch<SetStateAction<JsonRpcSigner | null>>;
}

function Header({ signer, setSigner }: HeaderProps) {
  return (
    <Box as="header" bgColor="blue.200" py={4}>
      <Flex justifyContent="space-between" alignItems="center" maxW={1024} mx="auto">
        <Box fontSize="2xl" fontWeight="semibold" color="gray.700">
          <Link to="/">
            <Image src="./public\bcs.png"></Image>
          </Link>
        </Box>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button colorPalette="blue" variant="ghost" size="sm">
              Trade
            </Button>
          </MenuTrigger>

          <MenuContent bgColor="blue.50">
            <MenuButton value="Oder" href="/" />
            <MenuButton value="Swap Token" href="/swaptoken" />
            <MenuButton value="Send " href="/" />
            <MenuButton value="Buy" href="/" />
          </MenuContent>
        </MenuRoot>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button colorPalette="blue" variant="ghost" size="sm">
              Explore
            </Button>
          </MenuTrigger>

          <MenuContent bgColor="blue.50">
            <MenuButton value="Token" href="/" />
            <MenuButton value="Pool" href="/liquidity" />
            <MenuButton value="Transaction" href="/" />
          </MenuContent>
        </MenuRoot>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button colorPalette="blue" variant="ghost" size="sm">
              Stake
            </Button>
          </MenuTrigger>

          <MenuContent bgColor="blue.50">
            <MenuButton value="Stake" href="/" />
          </MenuContent>
        </MenuRoot>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button colorPalette="blue" variant="ghost" size="sm">
              Login
            </Button>
          </MenuTrigger>

          <MenuContent bgColor="blue.50">
            <MetaMaskButton signer={signer} setSigner={setSigner} />
          </MenuContent>
        </MenuRoot>
      </Flex>
    </Box>
  );
}

export default Header;
