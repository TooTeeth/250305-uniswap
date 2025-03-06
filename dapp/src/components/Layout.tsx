import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ethers, JsonRpcSigner } from "ethers";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Contract } from "ethers";
import TokenMakerABI from "@/abis/TokenMakerABI.json";
import LiquidityPoolABI from "@/abis/LiquidityPoolABI.json";

export interface OutletContext {
  signer: JsonRpcSigner | null;
  setSigner: Dispatch<SetStateAction<JsonRpcSigner | null>>;
  tokenAContract: Contract;
  tokenBContract: Contract;
  liquidityPoolContract: Contract;
}

function Layout() {
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [tokenAContract, setTokenAContract] = useState<Contract | null>(null);
  const [tokenBContract, setTokenBContract] = useState<Contract | null>(null);
  const [liquidityPoolContract, setLiquidityPoolContract] = useState<Contract | null>(null);

  useEffect(() => {
    if (!signer) return;

    setTokenAContract(new ethers.Contract(import.meta.env.VITE_TOKEN_A_ADDRESS, TokenMakerABI, signer));

    setTokenBContract(new ethers.Contract(import.meta.env.VITE_TOKEN_B_ADDRESS, TokenMakerABI, signer));

    setLiquidityPoolContract(new ethers.Contract(import.meta.env.VITE_LIQUIDITY_POOL_ADDRESS, LiquidityPoolABI, signer));
  }, [signer]);

  return (
    <>
      <Header signer={signer} setSigner={setSigner} />
      <Flex justifyContent="center" alignItems="center" my={5}>
        <Text fontSize={40} fontWeight={"bold"} color={"blue.500"}>
          TokenA/TokenB
        </Text>
      </Flex>

      <Box as="main" bgColor="gray.100" maxW={1024} mx="auto">
        <Outlet context={{ signer, setSigner, tokenAContract, tokenBContract, liquidityPoolContract }} />
      </Box>
    </>
  );
}

export default Layout;
