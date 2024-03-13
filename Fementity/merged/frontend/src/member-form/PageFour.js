import {
    Button, Checkbox, Flex,
    FormControl,
    FormLabel, Input, Radio, RadioGroup, Select,
    Text
} from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink} from 'react-router-dom';

const PageFour = ({onButtonClick}) => {

    return (
        <>
            <Flex
                direction={"column"}
                w={1200}
                boxShadow="md"
                rounded="lg"
                bg="background"
                margin={"auto"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Text
                    fontSize={['3xl', '4xl', '5xl','5xl']}
                    fontWeight={100}
                    color='#B97375'
                    textAlign="center"
                >
                    MEMBERSHIP FORM
                </Text>

                <FormControl as='fieldset' margin={5}>
                    <FormLabel as='legend' textAlign={"center"} fontSize="20px">PAYMENT INFORMATION</FormLabel>
                    <RadioGroup defaultValue='CREDIT'>
                        <Flex
                            spacing='24px'
                            justifyContent={"space-between"}
                            width={"40%"}
                            margin={"auto"}
                        >
                            <Radio value='CREDIT'>CREDIT CARD (VISA OR MASTER CARD)</Radio>
                            <Radio value='PAYPAL'>PAYPAL</Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>

                <FormControl w={"60%"} margin={5} isRequired>
                    <Flex
                        justifyContent={"center"}
                        alignContent={"center"}
                    >
                        <FormLabel fontSize="18px" whiteSpace={"nowrap"}>FULL NAME ON CARD</FormLabel>
                        <Input
                            type={'text'}
                            rounded={2}
                            boxShadow={'md'}
                            outlineColor={'gray'}
                            variant={''}
                            backgroundColor={''}
                            aria-label=""
                            size='xs'
                        ></Input>
                    </Flex>
                </FormControl>

                <FormControl w={"60%"} margin={5} isRequired>
                    <Flex
                        justifyContent={"center"}
                        alignContent={"center"}
                    >
                        <FormLabel fontSize="18px" whiteSpace={"nowrap"}>CARD NUMBER</FormLabel>
                        <Input
                            type={'text'}
                            rounded={2}
                            boxShadow={'md'}
                            outlineColor={'gray'}
                            variant={''}
                            backgroundColor={''}
                            aria-label=""
                            size='xs'
                        ></Input>
                    </Flex>
                </FormControl>

                <Flex
                    margin={5}
                    width={"60%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Flex
                        mr={2}
                        alignItems={"center"}
                    >
                        <FormControl isRequired>
                            <Flex
                                justifyContent={"space-between"}
                                alignContent={"center"}
                                mr={10}
                            >
                                <FormLabel fontSize="18px" mr={2} whiteSpace={"nowrap"}>EXPIRY DATE</FormLabel>
                                <Select
                                    placeholder='MM'
                                    rounded={2}
                                    boxShadow={'md'}
                                    outlineColor={'gray'}
                                    variant={''}
                                    type={'text'}
                                    aria-label=""
                                    size='xs'
                                >
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </Select>
                                <Text fontSize={18} mr={2} ml={2}>/</Text>
                                <Select
                                    placeholder='YY'
                                    rounded={2}
                                    boxShadow={'md'}
                                    outlineColor={'gray'}
                                    variant={''}
                                    type={'text'}
                                    aria-label=""
                                    size='xs'
                                    onFocus={() => {
                                        this.value = 5;
                                    }}
                                    onBlur={() => {
                                        this.value = 5;
                                    }}
                                >
                                    <option>{new Date().getFullYear()}</option>
                                    <option>{new Date().getFullYear() + 1}</option>
                                    <option>{new Date().getFullYear() + 2}</option>
                                    <option>{new Date().getFullYear() + 3}</option>
                                    <option>{new Date().getFullYear() + 4}</option>
                                    <option>{new Date().getFullYear() + 5}</option>
                                    <option>{new Date().getFullYear() + 6}</option>
                                    <option>{new Date().getFullYear() + 7}</option>
                                    <option>{new Date().getFullYear() + 8}</option>
                                    <option>{new Date().getFullYear() + 9}</option>
                                    <option>{new Date().getFullYear() + 10}</option>
                                    <option>{new Date().getFullYear() + 11}</option>
                                    <option>{new Date().getFullYear() + 12}</option>
                                    <option>{new Date().getFullYear() + 13}</option>
                                    <option>{new Date().getFullYear() + 14}</option>
                                    <option>{new Date().getFullYear() + 15}</option>
                                    <option>{new Date().getFullYear() + 16}</option>
                                    <option>{new Date().getFullYear() + 17}</option>
                                    <option>{new Date().getFullYear() + 18}</option>
                                    <option>{new Date().getFullYear() + 19}</option>
                                    <option>{new Date().getFullYear() + 20}</option>
                                </Select>
                            </Flex>
                        </FormControl>
                    </Flex>

                    <FormControl isRequired ml={2} w={"30%"}>
                        <Flex
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px">CVV</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label=""
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>
                </Flex>

                <FormControl as='fieldset' margin={2} width={"60%"}>
                    <FormLabel as='legend' textAlign={"center"} fontSize="20px"></FormLabel>
                    <Flex
                        spacing='24px'
                        justifyContent={"left"}
                        width={"60%"}
                        margin={"auto"}
                    >
                        <Checkbox value='KEEP CARD' defaultChecked={true}>KEEP CREDIT CARD INFORMATION FOR FUTURE FEM ENTITY PURCHASES</Checkbox>
                    </Flex>
                </FormControl>

                <FormControl as='fieldset' width={"60%"}>
                    <FormLabel as='legend' textAlign={"center"} fontSize="20px"></FormLabel>
                    <Flex
                        spacing='24px'
                        justifyContent={"left"}
                        width={"60%"}
                        margin={"auto"}
                    >
                        <Checkbox value='KEEP CARD'>
                            <RouteLink
                                to="/privacyPolicy"
                                target="_blank"
                                style={{textDecoration:"underline"}}
                            >
                            ACCEPT TERMS AND CONDITIONS
                            </RouteLink>
                        </Checkbox>
                    </Flex>
                </FormControl>

                <Flex>
                    <Button
                        type="submit"
                        backgroundColor={'primary'}
                        color={'white'}
                        aria-label="login"
                        margin={10}
                        size={"lg"}
                        width={200}
                        onClick={() => onButtonClick("pageThree")}
                    >
                        BACK
                    </Button>

                    <Button
                        type="submit"
                        backgroundColor={'primary'}
                        color={'white'}
                        aria-label="login"
                        margin={10}
                        size={"lg"}
                        width={200}
                        onClick={() => onButtonClick("pageFive")}
                    >
                        SUBMIT
                    </Button>
                </Flex>

            </Flex>

        </>
    );
}

export default PageFour;