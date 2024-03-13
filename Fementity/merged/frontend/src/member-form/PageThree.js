import React, {useRef, useState} from "react";
import {
    Button,
    Checkbox,
    CheckboxGroup,
    Flex,
    FormControl, FormHelperText,
    FormLabel, IconButton,
    Select,
    Text,
    Wrap,
} from "@chakra-ui/react";
import {ArrowUpIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";

const PageThree = ({onButtonClick, handleFormData, values}) => {

    const themes = ["FEMININITY", "SELF CARE", "DARK FEMININE", "MANIFESTATION", "CRYSTALS", "CHAKRA", "EMPOWERMENT", "COMMUNITY", "AFFIRMATIONS", "MINDFULNESS", "MEDITATION", "SELF-DISCOVERY", "ENERGY WORK", "BALANCE", "EMOTIONS", "MENTAL HEALTH", "ASTROLOGY", "DIVINE FEMININE", "DIVINE MASCULINE", "GRATITUDE", "YONI", "LIMITING BELIEFS", "SHADOW WORK", "SEXUALITY"];
    const [primaryTopics, setPrimaryTopics] = useState(new Array(themes.length).fill(false));
    const [disabled, setDisabled] = useState(new Array(themes.length).fill(false));

    // handle submit
    const submitFormData = (e) => {
        e.preventDefault();
        onButtonClick("pageFour")
    };

    const updateTopics = (topic) => {
        const newSelection = primaryTopics.map((state, key) =>
            key === topic ? !state : state
        );
        setPrimaryTopics(newSelection);
        howManyBoxesSelected(newSelection);
    };

    const howManyBoxesSelected = (selected) => {
        let count = 0;
        for (let i = 0; i < selected.length; i++) {
            if (selected[i] === true) {
                count++;
            }
        }
        disableBoxes(count, selected);
    };

    const disableBoxes = (count, selected) => {
        const disabledBoxes = new Array(themes.length).fill(false);
        if (count < 5) {
            setDisabled(disabledBoxes);
        } else {
            for (let i = 0; i < selected.length; i++) {
                if (selected[i] === false) {
                    disabledBoxes[i] = true;
                }
            }
        }
        setDisabled(disabledBoxes);
    }

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
                        mb={10}
                    >
                        MEMBERSHIP FORM
                    </Text>

                    <Flex
                        margin={5}
                        width={"80%"}
                        justifyContent={"space-between"}
                    >
                        <FormControl w="45%">
                            <Flex
                                justifyContent={"space-between"}
                                alignContent={"center"}
                            >
                                <FormLabel fontSize="18px">SALUTATIONS</FormLabel>
                                <Select
                                    placeholder='SELECT SALUTATIONS'
                                    rounded={2}
                                    boxShadow={'md'}
                                    outlineColor={'gray'}
                                    variant={''}
                                    type={'text'}
                                    aria-label="salutations"
                                    name="salutations"
                                    defaultValue={values.salutations}
                                    onChange={handleFormData("salutations")}
                                    size='xs'
                                >
                                    <option>Sir</option>
                                    <option>Madam</option>
                                    <option>Ms</option>
                                    <option>Mr</option>
                                    <option>Mrs</option>
                                    <option>Your Last Name</option>
                                </Select>
                            </Flex>
                        </FormControl>

                        <FormControl w="45%">
                            <Flex
                                justifyContent={"center"}
                                alignContent={"center"}
                            >
                                <FormLabel fontSize="18px">PRONOUNS</FormLabel>
                                <Select
                                    placeholder='SELECT PRONOUNS'
                                    rounded={2}
                                    boxShadow={'md'}
                                    outlineColor={'gray'}
                                    variant={''}
                                    type={'text'}
                                    aria-label="pronouns"
                                    name="pronouns"
                                    defaultValue={values.pronouns}
                                    onChange={handleFormData("pronouns")}
                                    size='xs'
                                >
                                    <option>he/him</option>
                                    <option>she/her</option>
                                    <option>they/them</option>
                                </Select>
                            </Flex>
                        </FormControl>
                    </Flex>

                    <Flex
                        width={"80%"}
                        justifyContent={"space-between"}
                        mb={10}
                    >
                        <FormControl w="25%">
                            <Flex
                                justifyContent={"center"}
                                mb={2}
                            >
                                <IconButton mr={2} size={"sm"} aria-label='Sun Sign' backgroundColor={'primary'} color={'background'} icon={<SunIcon />}  />
                                <FormLabel fontSize="18px" textAlign={"center"}>SUN SIGN</FormLabel>
                            </Flex>
                            <Select
                                placeholder='SELECT SUN SIGN'
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="sunSign"
                                name="sunSign"
                                defaultValue={values.sunSign}
                                onChange={handleFormData("sunSign")}
                                size='xs'
                            >
                                <option>Capricorn</option>
                                <option>Aquarius</option>
                                <option>Pisces</option>
                                <option>Aries</option>
                                <option>Taurus</option>
                                <option>Gemini</option>
                                <option>Cancer</option>
                                <option>Leo</option>
                                <option>Virgo</option>
                                <option>Libra</option>
                                <option>Scorpio</option>
                                <option>Sagittarius</option>
                            </Select>
                        </FormControl>

                        <FormControl w="25%">
                            <Flex
                                justifyContent={"center"}
                                mb={2}
                            >
                                <IconButton mr={2} size={"sm"} aria-label='Moon Sign' backgroundColor={'primary'} color={'background'} icon={<MoonIcon />}  />
                                <FormLabel fontSize="18px" textAlign={"center"}>MOON SIGN</FormLabel>
                            </Flex>
                            <Select
                                placeholder='SELECT MOON SIGN'
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="moonSign"
                                name="moonSign"
                                defaultValue={values.moonSign}
                                onChange={handleFormData("moonSign")}
                                size='xs'
                            >
                                <option>Capricorn</option>
                                <option>Aquarius</option>
                                <option>Pisces</option>
                                <option>Aries</option>
                                <option>Taurus</option>
                                <option>Gemini</option>
                                <option>Cancer</option>
                                <option>Leo</option>
                                <option>Virgo</option>
                                <option>Libra</option>
                                <option>Scorpio</option>
                                <option>Sagittarius</option>
                            </Select>
                        </FormControl>

                        <FormControl w="25%">
                            <Flex
                                justifyContent={"center"}
                                mb={2}
                            >
                                <IconButton mr={2} size={"sm"} aria-label='Rising Sun' backgroundColor={'primary'} color={'background'} icon={<ArrowUpIcon />}  />
                                <FormLabel fontSize="18px" textAlign={"center"}>RISING SIGN</FormLabel>
                            </Flex>
                            <Select
                                placeholder='SELECT RISING SIGN'
                                type={'text'}
                                rounded={2}
                                boxShadow={'md'}
                                outlineColor={'gray'}
                                variant={''}
                                backgroundColor={''}
                                aria-label="risingSign"
                                name="risingSign"
                                defaultValue={values.risingSign}
                                onChange={handleFormData("risingSign")}
                                size='xs'
                            >
                                <option>Capricorn</option>
                                <option>Aquarius</option>
                                <option>Pisces</option>
                                <option>Aries</option>
                                <option>Taurus</option>
                                <option>Gemini</option>
                                <option>Cancer</option>
                                <option>Leo</option>
                                <option>Virgo</option>
                                <option>Libra</option>
                                <option>Scorpio</option>
                                <option>Sagittarius</option>
                            </Select>
                        </FormControl>
                    </Flex>

                    <FormControl
                        margin={5}
                        w={"80%"}
                    >
                        <FormLabel fontSize="20px" textAlign={"center"}>HOW DO YOU WANT TO BE INVOLVED WITH FEM ENTITY?</FormLabel>
                        <FormHelperText textAlign={"center"} mb={3}>(SELECT MAX 5)</FormHelperText>
                        <CheckboxGroup>
                        <Wrap spacing={4}>
                            {themes.map((item, key) => {
                                return (
                                    <Checkbox
                                        bg="white"
                                        p={2}
                                        rounded={4}
                                        boxShadow={'md'}
                                        outlineColor={'gray'}
                                        aria-label='topic'
                                        onChange={() => updateTopics(key)}
                                        isDisabled={disabled[key]}
                                    >
                                        {themes[key]}
                                    </Checkbox>
                                );
                            })}
                        </Wrap>
                    </CheckboxGroup>
                </FormControl>

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

        </>
    );
};

export default PageThree;