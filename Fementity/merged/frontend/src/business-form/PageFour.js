import {
    Button, Center, Checkbox, CheckboxGroup, Flex,
    FormControl,
    FormLabel,
    Text, Textarea,
} from "@chakra-ui/react";
import React, {useRef, useState} from "react";

const PageFour = ({onButtonClick, handleSubmit, handleFormData, values}) => {

    //Make sure when user check "I don't know...", unchecked and disable other checkboxes
    const [disabledItems, setDisabled] = useState([values.noInvolvements, values.noInvolvements, values.noInvolvements, values.noInvolvements, values.noInvolvements, values.noInvolvements])
    const disableOthers = disabledItems.every(Boolean)

    const unChecked = (disableOthers) => {
        if (disableOthers) {
            return false;
        }
    };

    const handleIDK = (e) => {
        handleFormData(e);
        setDisabled([e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked]);
    }

    const form = useRef();

    return (
        <>
            <form ref={form} onSubmit={handleSubmit}>
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
                        margin={10}
                    >
                        <FormLabel fontSize="20px" textAlign={"center"}>HOW DO YOU WANT TO BE INVOLVED WITH FEM ENTITY?</FormLabel>

                        <CheckboxGroup>
                            <Center>
                                <Flex
                                    direction={"column"}
                                    mr={2}
                                >
                                    <Checkbox
                                        aria-label="course"
                                        name="course"
                                        defaultChecked={values.course}
                                        onChange={(e) => handleFormData(e)}
                                        isDisabled={disabledItems[0]}
                                        isChecked={unChecked(disableOthers)}>SUBMIT A COURSE</Checkbox>
                                    <Checkbox
                                        aria-label="podcastYoutube"
                                        name="podcastYoutube"
                                        defaultChecked={values.podcastYoutube}
                                        onChange={(e) => handleFormData(e)}
                                        isDisabled={disabledItems[1]}
                                        isChecked={unChecked(disableOthers)}>PODCAST/YOUTUBE GUEST</Checkbox>
                                    <Checkbox
                                        aria-label="blog"
                                        name="blog"
                                        defaultChecked={values.blog}
                                        onChange={(e) => handleFormData(e)}
                                        isDisabled={disabledItems[2]}
                                        isChecked={unChecked(disableOthers)}>SUBMIT A BLOG POST</Checkbox>
                                </Flex>

                                <Flex
                                    direction={"column"}
                                >
                                    <Checkbox
                                        aria-label="event"
                                        name="event"
                                        defaultChecked={values.event}
                                        onChange={(e) => handleFormData(e)}
                                        isDisabled={disabledItems[3]}
                                        isChecked={unChecked(disableOthers)}>COLLABORATE ON EVENT</Checkbox>
                                    <Checkbox
                                        aria-label="workshop"
                                        name="workshop"
                                        defaultChecked={values.workshop}
                                        onChange={(e) => handleFormData(e)}
                                        isDisabled={disabledItems[4]}
                                        isChecked={unChecked(disableOthers)}>COLLABORATE ON WORKSHOP</Checkbox>
                                    <Checkbox
                                        aria-label="coupon"
                                        name="coupon"
                                        defaultChecked={values.coupon}
                                        onChange={(e) => handleFormData(e)}
                                        isDisabled={disabledItems[5]}
                                        isChecked={unChecked(disableOthers)}>COMMUNITY COUPON CODE</Checkbox>
                                </Flex>
                            </Center>
                            <Center>
                                <Checkbox
                                    aria-label="noInvolvements"
                                    name="noInvolvements"
                                    defaultChecked={values.noInvolvements}
                                    onChange={(e) => handleIDK(e)}
                                >I DON'T KNOW RIGHT NOW</Checkbox>
                            </Center>
                        </CheckboxGroup>
                    </FormControl>

                    <FormControl>
                        <FormLabel fontSize="20px" textAlign={"center"}>HOW DID YOU HEAR ABOUT FEM ENTITY?</FormLabel>
                        <Center>
                            <Textarea
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                aria-label="findMethod"
                                name="findMethod"
                                defaultValue={values.findMethod}
                                onChange={(e) => handleFormData(e)}
                                width={"80%"}
                            ></Textarea>
                        </Center>
                    </FormControl>

                    <FormControl
                        margin={10}
                    >
                        <FormLabel fontSize="20px" textAlign={"center"}>ANYTHING ELSE YOU WANT TO LET US KNOW?</FormLabel>
                        <Center>
                            <Textarea
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                name="additionalComment"
                                defaultValue={values.additionalComment}
                                onChange={(e) => handleFormData(e)}
                                width={"80%"}
                            ></Textarea>
                        </Center>
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
                        >
                            SUBMIT
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </>
    );
}

export default PageFour;