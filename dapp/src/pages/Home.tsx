import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

function Home() {
  return (
    <Box>
      <Box fontSize={70} fontWeight={"bold"} display="flex" justifyContent={"center"} my={10}>
        Trade
      </Box>

      <Box display={"flex"} flexDirection={"row"} justifyContent="center" gap={8}>
        <Flex fontSize={20} fontWeight="semibold" _hover={{ bg: "gray.100" }} bgColor={"gray.200"} rounded={10} px={2}>
          <Link to="/swaptoken">Swap</Link>
        </Flex>
        <Flex fontSize={20} fontWeight="semibold" _hover={{ bg: "gray.100" }} bgColor={"gray.200"} rounded={10} px={2}>
          <Link to="/swaptoken">Limit</Link>
        </Flex>
        <Flex fontSize={20} fontWeight="semibold" _hover={{ bg: "gray.100" }} bgColor={"gray.200"} rounded={10} px={2}>
          <Link to="/swaptoken">DCA</Link>
        </Flex>
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="center" bgColor="white" width="500px" height="200px" margin="auto" my={4} borderWidth="1px" borderRadius="8px">
        <Flex py={1} px={2} bgColor="red.100" width="500px" height="40px" color={"gray.400"}>
          sell
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" width="500px">
          <Input placeholder="0.0" height={"80px"} fontSize={30} border={"none"} />
          <DialogRoot>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" mx={2} px={4} rounded={"20px"}>
                <Image src="./public\bcs.png" />
                Crypto
              </Button>
            </DialogTrigger>
            <DialogContent bgColor={"yellow.100"}>
              <DialogHeader bgColor={"red.100"}>
                <DialogTitle alignContent={"center"}> Select a Token</DialogTitle>
              </DialogHeader>
              <DialogBody display="flex" flexDirection="column" alignItems={"flex-start"} bgColor={"blue.100"}>
                <Box>
                  <Button variant="outline" size="sm" border={"none"}>
                    <Image src="./public\bcs.png" />
                    BTC
                  </Button>
                  <Button variant="outline" size="sm" bgColor={"white"}>
                    <Image src="./public\bcs.png" />
                    ETH
                  </Button>
                  <Button variant="outline" size="sm" bgColor={"white"}>
                    <Image src="./public\bcs.png" />
                    SOL
                  </Button>
                  <Button variant="outline" size="sm" border={"none"}>
                    <Image src="./public\bcs.png" />
                    ONDO
                  </Button>
                </Box>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button>Save</Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
