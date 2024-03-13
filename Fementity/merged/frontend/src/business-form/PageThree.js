import React, {createRef, useRef, useState} from "react";
import {
    Alert, AlertIcon, Avatar,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input, Spacer,
    Text,
    Textarea,
} from "@chakra-ui/react";


const PageTwo = ({onButtonClick, handleFormData, values}) => {

    // handle submit
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if all input validate, if ture, go next page
        if (validate()) {
            onButtonClick("pageFour")
        }
    };

    const [error, setError] = useState('');
    const errorRef = createRef();

    //Check if input validate
    const validate = () => {
        if (values.description === '') {
            setError('Please enter a description');
            return false;
        }
        return true;
    };

    // const handleFiles = () => {
    //     if (brandingImages.length === 0) {
    //         setError('Please upload at least 1 image');
    //         return false;
    //     } else if (brandingImages.length > 3) {
    //         setError("Can't upload more than 3 images");
    //         return false;
    //     }
    //
    //     for (let i = 0; i < brandingImages.length; i++) {
    //         if (!brandingImages[i].type.includes('image')) {
    //             setError(`File '${brandingImages[i].name}' has to be an image`);
    //             return false;
    //         }
    //     }
    //     return true;
    // };

    const form = useRef();

    return (
        <>
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
                    >
                        BUSINESS DIRECTORY FORM
                    </Text>

                    <FormControl
                        isRequired
                        margin={10}
                    >
                        <FormLabel fontSize="20px" textAlign={"center"}>BUSINESS DESCRIPTION</FormLabel>
                        <Center>
                            <Textarea
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                aria-label="description"
                                name="description"
                                defaultValue={values.description}
                                onChange={(e) => handleFormData(e)}
                                width={"80%"}
                            ></Textarea>
                        </Center>
                    </FormControl>

                    <Flex
                        margin={10}
                        w={"80%"}
                        justifyContent={"center"}
                    >
                        <Flex
                            direction={"column"}
                            width={"45%"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <FormControl>
                                <Flex
                                    justifyContent={"space-between"}
                                >
                                    <Avatar
                                        mr={2}
                                        size={'sm'}
                                        src={
                                            'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png'
                                        }
                                    />
                                    <FormLabel fontSize="20px">WEBSITE</FormLabel>
                                    <Input
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        aria-label="officialWebsite"
                                        name="website"
                                        defaultValue={values.website}
                                        onChange={(e) => handleFormData(e)}
                                        size={"xs"}
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl>
                                <Flex>
                                    <Avatar
                                        mr={2}
                                        size={'sm'}
                                        src={
                                            'https://openvisualfx.com/wp-content/uploads/2019/10/1509135364flat-facebook-logo-png-icon-circle.png'
                                        }
                                    />
                                    <FormLabel fontSize="20px">FACEBOOK</FormLabel>
                                    <Input
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        aria-label={'facebook'}
                                        name={'facebook'}
                                        defaultValue={values.facebook}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl>
                                <Flex>
                                    <Avatar
                                        mr={2}
                                        size={'sm'}
                                        src={
                                            'https://thumbnail.imgbin.com/7/11/21/instagram-logo-icon-bN801b8t_t.jpg'
                                        }
                                    />
                                    <FormLabel fontSize="20px">INSTAGRAM</FormLabel>
                                    <Input
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        aria-label={'instagram'}
                                        name={'instagram'}
                                        defaultValue={values.instagram}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl>
                                <Flex>
                                    <Avatar
                                        mr={2}
                                        size={'sm'}
                                        src={
                                            'https://i.pinimg.com/736x/45/26/95/45269542660b7a985dd967451c31b2d0.jpg'
                                        }
                                    />
                                    <FormLabel fontSize="20px">TWITTER</FormLabel>
                                    <Input
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        aria-label={'twitter'}
                                        name={'twitter'}
                                        defaultValue={values.twitter}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>
                        </Flex>

                        <Spacer />

                        <Flex
                            direction={"column"}
                            width={"45%"}
                            alignContent={"center"}
                        >
                            <FormControl>
                                <Flex>
                                    <Avatar
                                        mr={2}
                                        size={'sm'}
                                        src={
                                            'https://www.freepnglogos.com/uploads/youtube-logo-icon-transparent---32.png'
                                        }
                                    />
                                    <FormLabel fontSize="20px">YOUTUBE</FormLabel>
                                    <Input
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        aria-label={'youtube'}
                                        name={'youtube'}
                                        defaultValue={values.youtube}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl>
                                <Flex>
                                    <Avatar
                                        size={'sm'}
                                        mr={2}
                                        src={
                                            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png'
                                        }
                                    />
                                    <FormLabel fontSize="20px">LINKEDIN</FormLabel>
                                    <Input
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        aria-label={'linkedin'}
                                        name={'linkedin'}
                                        defaultValue={values.linkedin}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>

                            <FormControl>
                                <Flex>
                                    <Avatar
                                        mr={2}
                                        size={'sm'}
                                        src={
                                            'https://e1.pngegg.com/pngimages/893/800/png-clipart-spotify-for-os-x-el-capitan-spotify-icon.png'
                                        }
                                    />
                                    <FormLabel fontSize="20px">SPOTIFY</FormLabel>
                                    <Input
                                        rounded={2}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        variant={''}
                                        type={'text'}
                                        aria-label={'spotify'}
                                        name={'spotify'}
                                        defaultValue={values.spotify}
                                        onChange={(e) => handleFormData(e)}
                                        size='xs'
                                    ></Input>
                                </Flex>
                            </FormControl>
                        </Flex>
                    </Flex>


                    <Flex
                        width={"45%"}
                        margin={"auto"}
                        justifyContent={"space-between"}
                    >
                        <Text fontSize={20} width={"50%"} textAlign={"center"}>BRANDING IMAGES</Text>
                        <FormControl width={"50%"}>
                            <input
                                style={{textAlign: "center", margin: "auto"}}
                                type="file"
                                accept="image/*"
                                color={'white'}
                                //Todo
                                // multiple
                                // onChange={(e) => setBrandingImages(e.target.files)}
                                name="images"
                            ></input>
                        </FormControl>
                    </Flex>

                    {error && (
                        <Alert width={"80%"} rounded={5} ref={errorRef} status="error">
                            <AlertIcon /> {error}
                        </Alert>
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
                            onClick={() => onButtonClick("pageTwo")}
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

        </>
    );
};

export default PageTwo;