import React, {createRef, useRef, useState} from 'react';
import {
    Alert, AlertIcon,
    Button, Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
} from "@chakra-ui/react";

const PageOne = ({onButtonClick, handleFormData, values}) => {

    // handle submit
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if all input validate, if ture, go next page
        if (validate()) {
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
            setError('Password must contain at least one:\n' +
                'Lower Case Letter\n' +
                'Digit\n' +
                'Special Character - [ @$!%*?&#_ ]\n' +
                'Upper Case letter\n' +
                'And must be between 8 and 32 characters long.');
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
                    BUSINESS DIRECTORY FORM
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
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>LAST NAME</FormLabel>
                            <Input
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                type={'text'}
                                aria-label="lastName"
                                name="lastName"
                                defaultValue={values.lastName}
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
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>REGISTERED NAME</FormLabel>
                            <Input
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="registeredName"
                                name="registeredName"
                                defaultValue={values.registeredName}
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
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>CONSULTANT OR BUSINESS</FormLabel>
                            <Select
                                placeholder='SELECT TYPE'
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                type={'text'}
                                name="businessType"
                                defaultValue={values.businessType}
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                            >
                                <option value="Consultant">Consultant</option>
                                <option value="Business">Business</option>
                            </Select>
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
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <FormLabel fontSize="18px" whiteSpace={"nowrap"}>PASSWORD</FormLabel>
                            <Input
                                maxlength={32}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                type={'password'}
                                aria-label="password"
                                name="password"
                                onChange={(e) => handleFormData(e)}
                                size='xs'
                                maxLength={32}
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
                                maxlength={32}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                type={'password'}
                                aria-label="confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                size='xs'
                                maxLength={32}
                            ></Input>
                        </Flex>
                    </FormControl>
                </Flex>

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
