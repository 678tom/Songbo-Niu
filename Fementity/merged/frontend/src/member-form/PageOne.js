import React, {createRef, useRef, useState} from 'react';
import {
    Button, Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
    RadioGroup,
    Radio, Alert, AlertIcon
} from "@chakra-ui/react";

const PageOne = ({onButtonClick, handleFormData, values}) => {

    // handle submit
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if all input validate, if ture, go next page
        if (validate()) {
            setConfirmPassword = (e.target.value);
            
            onButtonClick("pageTwo")
        }
    };

    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const errorRef = createRef();

    //Check if input validate
    const validate = () => {
        // const nameRegex = /^([a-z]+[,.]? ?|[a-z]+['-]?)+$/gi;
        const emailRegEx =
            /^([\w\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
        const passwordRegEx =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#_]{8,}$/;
        const phoneRegEx =
            /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

        if (!emailRegEx.test(values.emailAddress)) {
            setError('Please enter a valid email');
            return false;
        } else if (!passwordRegEx.test(values.password)) {
            setError('Password must contain at least 1 Alphabet, 1 Number, 1 Special Character, 1 Upper case letter, and must be at least 8 letters long',);
            return false;
        } else if (values.password !== confirmPassword) {
            setError('Passwords do not match');
            return false;
        } else if (!phoneRegEx.test(values.phoneNumber)) {
            setError('Please enter a valid phone number');
            return false;
        }

        return true;
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
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>FIRST NAME</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="firstname"
                                name="firstName"
                                defaultValue={values.firstName}
                                onChange={handleFormData("firstName")}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>

                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>LAST NAME</FormLabel>
                            <Input
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                type={'text'}
                                aria-label="lastname"
                                name="lastName"
                                defaultValue={values.lastName}
                                onChange={handleFormData("lastName")}
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
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>DATE OF BIRTH</FormLabel>
                            <Input
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                type={'date'}
                                aria-label="dateOfBirth"
                                name="dateOfBirth"
                                defaultValue={values.dateOfBirth}
                                onChange={handleFormData("dateOfBirth")}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>

                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>PHONE NUMBER</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="phoneNumber"
                                name="phoneNumber"
                                defaultValue={values.phoneNumber}
                                onChange={handleFormData("phoneNumber")}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>
                </Flex>

                <FormControl isRequired w={"80%"} margin={5}>
                    <Flex
                        justifyContent={"center"}
                        alignContent={"center"}
                    >
                        <FormLabel fontSize="18px" whiteSpace={"nowrap"}>PREFERRED EMAIL</FormLabel>
                        <Input
                            type={'text'}
                            rounded={2}
                            boxShadow={'md'}
                            outlineColor={'gray'}
                            variant={''}
                            backgroundColor={''}
                            aria-label="emailAddress"
                            name="emailAddress"
                            defaultValue={values.emailAddress}
                            onChange={handleFormData("emailAddress")}
                            size='xs'
                        ></Input>
                    </Flex>
                </FormControl>

                <Flex
                    margin={5}
                    width={"80%"}
                    justifyContent={"space-between"}
                >
                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>PASSWORD</FormLabel>
                            <Input
                                type={'password'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="password"
                                name="password"
                                onChange={handleFormData("password")}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>

                    <FormControl isRequired w="45%">
                        <Flex
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>CONFIRM PASSWORD</FormLabel>
                            <Input
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                type={'password'}
                                aria-label="confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                size='xs'
                            ></Input>
                        </Flex>
                    </FormControl>
                </Flex>

                <FormControl as='fieldset' margin={5}>
                    <FormLabel as='legend' textAlign={"center"} fontSize="20px">MEMBERSHIP TYPE</FormLabel>
                    <RadioGroup defaultValue={values.memberType}>
                        <Flex
                            spacing='24px'
                            justifyContent={"space-between"}
                            width={"60%"}
                            margin={"auto"}
                            name="memberType"
                            defaultValue={values.memberType}
                            onChange={handleFormData("memberType")}
                        >
                            <Radio value='basic'>BASIC</Radio>
                            <Radio value='princess'>PRINCESS</Radio>
                            <Radio value='queen'>QUEEN</Radio>
                            <Radio value='empress'>EMPRESS</Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>

                {error && (
                    <Alert width={"80%"} rounded={5} ref={errorRef} status="error">
                        <AlertIcon /> {error}
                    </Alert>
                )}

                <Button
                    type="submit"
                    backgroundColor={'primary'}
                    color={'white'}
                    aria-label="login"
                    margin={5}
                    size={"lg"}
                    width={200}
                >
                    CONTINUE
                </Button>
            </Flex>
        </form>
    );
};

export default PageOne;
