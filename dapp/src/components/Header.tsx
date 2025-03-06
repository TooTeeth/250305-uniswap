import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import MetaMaskButton from "./MetamaskButton";
import { Dispatch, SetStateAction } from "react";
import { JsonRpcSigner } from "ethers";

interface HeaderProps {
  signer: JsonRpcSigner | null;
  setSigner: Dispatch<SetStateAction<JsonRpcSigner | null>>;
}

function Header({ signer, setSigner }: HeaderProps) {
  return (
    <Box as="header" bgColor="gray.100" py={4}>
      <Flex justifyContent="space-between" alignItems="center" maxW={1024} mx="auto">
        <Box fontSize="2xl" fontWeight="semibold">
          <Link to="/">
            <Image src=".\public\bcs.png"></Image>
          </Link>
        </Box>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="ghost" colorPalette={"blue"} size="sm">
              Trade
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuButton value="🏛️Swap" href="/liquidity" />
            <MenuButton value="💰Buy Crypto" href="/" />
          </MenuContent>
        </MenuRoot>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="ghost" colorPalette={"blue"} size="sm">
              Explore
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuButton value="🏛️Swap" href="/liquidity" />
            <MenuButton value="💰Buy Crypto" href="/" />
          </MenuContent>
        </MenuRoot>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="ghost" colorPalette={"blue"} size="sm">
              <Link to="/stake">Pool</Link>
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuButton value="🏛️Swap" href="/liquidity" />
            <MenuButton value="💰Buy Crypto" href="/" />
          </MenuContent>
        </MenuRoot>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="ghost" colorPalette={"blue"} size="sm">
              <Link to="/stake">Stake</Link>
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuButton value="🏛️Swap" href="/liquidity" />
            <MenuButton value="💰Buy Crypto" href="/" />
          </MenuContent>
        </MenuRoot>

        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="ghost" colorPalette={"blue"} size="sm">
              Menu
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuButton value="🏛️Liquidity pool" href="/liquidity" />
            <MenuButton value="💰Swap Token" href="/" />
            <MetaMaskButton signer={signer} setSigner={setSigner} />
          </MenuContent>
        </MenuRoot>
      </Flex>
    </Box>
  );
}

export default Header;
