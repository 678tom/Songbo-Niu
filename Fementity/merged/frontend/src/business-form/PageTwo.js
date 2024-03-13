import React, {useRef, useState} from 'react';
import {
    Button, Flex,
    FormControl,
    FormLabel,
    Input,
    Text, Select, Checkbox
} from "@chakra-ui/react";

const PageTwo = ({onButtonClick, handleFormData, handleSameAddress, values}) => {

    const [sameAddress, setSameAddress] = useState(values.sameAddress);

    // handle submit
    const submitFormData = (e) => {
        e.preventDefault();

        onButtonClick("pageThree")
    };

    const dealSameAddress = (e) => {
        setSameAddress(!sameAddress);
        handleSameAddress(sameAddress);
        handleFormData(e);
    };

    const form = useRef();

    return (
        <form ref={form} onSubmit={submitFormData}>
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
                    mb={10}
                >
                    MEMBERSHIP FORM
                </Text>

                <Text
                    fontSize="20px"
                    mb={5}
                    as='b'
                >
                    ADDRESS
                </Text>

                <Flex
                    margin={5}
                    width={"80%"}
                    justifyContent={"space-between"}
                >
                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"space-between"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>HOUSE NUMBER/NAME</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="houseNumberName"
                                name="houseNumberName"
                                defaultValue={values.houseNumberName}
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>

                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"space-between"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>STREET NAME</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="streetName"
                                name="streetName"
                                defaultValue={values.streetName}
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>
                </Flex>

                <Flex
                    margin={5}
                    width={"80%"}
                    justifyContent={"space-between"}
                >
                    <FormControl  w="45%">
                        <Flex
                            justifyContent={"space-between"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>UNIT</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="unit"
                                name="unit"
                                defaultValue={values.unit}
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>

                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"space-between"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>POST CODE</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="postcode"
                                name="postcode"
                                defaultValue={values.postcode}
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>
                </Flex>

                <Flex
                    margin={5}
                    width={"80%"}
                    justifyContent={"space-between"}
                >
                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"space-between"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>CITY</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="city"
                                name="city"
                                defaultValue={values.city}
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>

                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>PROVINCE</FormLabel>
                            <Select
                                placeholder='PROVINCE'
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                type={'text'}
                                name="province"
                                defaultValue={values.province}
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                            >
                                <option value="Alberta">Alberta</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="Northwest Territories">Northwest Territories</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="Nunavut">Nunavut</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Saskatchewan">Saskatchewan</option>
                                <option value="Yukon">Yukon</option>
                            </Select>
                        </Flex>
                    </FormControl>
                </Flex>

                <FormControl margin={5} width={"60%"}>
                    <FormLabel textAlign={"center"} fontSize="20px"></FormLabel>
                    <Flex
                        spacing='24px'
                        justifyContent={"center"}
                        width={"60%"}
                        margin={"auto"}
                    >
                        <Checkbox
                            textAlign={"center"}
                            value='sameAddress'
                            name='sameAddress'
                            defaultChecked={values.sameAddress}
                            onChange={(e) => dealSameAddress(e)}
                        >USE THE SAME ADDRESS FOR BILLING</Checkbox>
                    </Flex>
                </FormControl>

                {!sameAddress && (

                    <Flex
                        width={"100%"}
                        direction={"column"}
                        margin={"auto"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text
                            fontSize="20px"
                            mb={5}
                            as='b'
                        >
                            BILLING ADDRESS
                        </Text>

                        <Flex
                            margin={5}
                            width={"80%"}
                            justifyContent={"space-between"}
                        >
                            <FormControl isRequired w="45%">
                                <Flex
                                    justifyContent={"space-between"}
                                    alignContent={"center"}
                                >
                                    <FormLabel fontSize="18px" whiteSpace={"nowrap"}>HOUSE NUMBER/NAME</FormLabel>
                                    <Input
                                        type={'text'}
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        backgroundColor={''}
                                        aria-label="billHouseNumberName"
                                        name="billHouseNumberName"
                                        defaultValue={values.billHouseNumberName}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl isRequired w="45%">
                                <Flex
                                    justifyContent={"space-between"}
                                    alignContent={"center"}
                                >
                                    <FormLabel fontSize="18px" whiteSpace={"nowrap"}>STREET NAME</FormLabel>
                                    <Input
                                        type={'text'}
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        backgroundColor={''}
                                        aria-label="billStreetName"
                                        name="billStreetName"
                                        defaultValue={values.billStreetName}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>
                        </Flex>

                        <Flex
                            margin={5}
                            width={"80%"}
                            justifyContent={"space-between"}
                        >
                            <FormControl isRequired w="45%">
                                <Flex
                                    justifyContent={"space-between"}
                                    alignContent={"center"}
                                >
                                    <FormLabel fontSize="18px" whiteSpace={"nowrap"}>UNIT</FormLabel>
                                    <Input
                                        type={'text'}
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        backgroundColor={''}
                                        aria-label="billUnit"
                                        name="billUnit"
                                        defaultValue={values.billUnit}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl isRequired w="45%">
                                <Flex
                                    justifyContent={"space-between"}
                                    alignContent={"center"}
                                >
                                    <FormLabel fontSize="18px" whiteSpace={"nowrap"}>POST CODE</FormLabel>
                                    <Input
                                        type={'text'}
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        backgroundColor={''}
                                        aria-label="billPostcode"
                                        name="billPostcode"
                                        defaultValue={values.billPostcode}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>
                        </Flex>

                        <Flex
                            margin={5}
                            width={"80%"}
                            justifyContent={"space-between"}
                        >
                            <FormControl isRequired w="45%">
                                <Flex
                                    justifyContent={"space-between"}
                                    alignContent={"center"}
                                >
                                    <FormLabel fontSize="18px" whiteSpace={"nowrap"}>CITY</FormLabel>
                                    <Input
                                        type={'text'}
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        backgroundColor={''}
                                        aria-label="billCity"
                                        name="billCity"
                                        defaultValue={values.billCity}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl isRequired w="45%">
                                <Flex
                                    justifyContent={"center"}
                                    alignContent={"center"}
                                >
                                    <FormLabel fontSize="18px" whiteSpace={"nowrap"}>PROVINCE</FormLabel>
                                    <Select
                                        placeholder='PROVINCE'
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        name="billProvince"
                                        defaultValue={values.billProvince}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    >
                                        <option value="Alberta">Alberta</option>
                                        <option value="British Columbia">British Columbia</option>
                                        <option value="Manitoba">Manitoba</option>
                                        <option value="New Brunswick">New Brunswick</option>
                                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                        <option value="Northwest Territories">Northwest Territories</option>
                                        <option value="Nova Scotia">Nova Scotia</option>
                                        <option value="Nunavut">Nunavut</option>
                                        <option value="Ontario">Ontario</option>
                                        <option value="Prince Edward Island">Prince Edward Island</option>
                                        <option value="Quebec">Quebec</option>
                                        <option value="Saskatchewan">Saskatchewan</option>
                                        <option value="Yukon">Yukon</option>
                                    </Select>
                                </Flex>
                            </FormControl>
                        </Flex>
                    </Flex>
                )}

                <Flex>
                    <Button
                        type={"button"}
                        backgroundColor={'primary'}
                        color={'white'}
                        aria-label="login"
                        margin={10}
                        size={"lg"}
                        width={200}
                        onClick={() => onButtonClick("pageOne")}
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
                    >
                        CONTINUE
                    </Button>
                </Flex>
            </Flex>
        </form>
    );
};

export default PageTwo;