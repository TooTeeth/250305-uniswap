import CurrentLiquidity from "@/components/CurrentLiquidity";
import { OutletContext } from "@/components/Layout";
import SwapToken from "@/components/SwapToken";
import useMetamask from "@/hooks/useMetamask";
import { Button, Flex } from "@chakra-ui/react";
import { useOutletContext } from "react-router-dom";

function SwapPage() {
  const { signer, setSigner, liquidityPoolContract } = useOutletContext<OutletContext>();

  const { connectWallet } = useMetamask(setSigner);

  if (!signer) {
    return (
      <Flex direction="column" spaceY={4} mt={8}>
        <CurrentLiquidity signer={signer} liquidityPoolContract={liquidityPoolContract} />
        <SwapToken />
      </Flex>
    );
  }

  return (
    <Button colorPalette="yellow" onClick={connectWallet}>
      SwapPage
    </Button>
  );
}

export default SwapPage;
