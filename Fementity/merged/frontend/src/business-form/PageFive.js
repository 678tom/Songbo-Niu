import React from "react";
import {Button, Center, Flex, Text} from "@chakra-ui/react";
import { Link as RouteLink} from 'react-router-dom';

const PageFive = () => {
    return (
        <>
            <Flex
                direction={"column"}
                justifyContent={"center"}
                mt={100}
            >
                <Text
                    fontSize={['3xl', '4xl', '5xl','5xl']}
                    fontWeight={100}
                    color='#B97375'
                    textAlign="center"
                    mb={100}
                >
                    YOU ACCOUNT HAVE BEEN SUCCESSFULLY CREATED!
                </Text>

                <Center>
                    <RouteLink
                        to="/login"
                    >
                        <Button
                            type="submit"
                            backgroundColor={'primary'}
                            color={'white'}
                            aria-label="login"
                            margin={10}
                            width={200}
                            height={50}
                        >
                            BACK TO LOGIN PAGE
                        </Button>
                    </RouteLink>
                </Center>
            </Flex>
        </>
    );
}

export default PageFive;