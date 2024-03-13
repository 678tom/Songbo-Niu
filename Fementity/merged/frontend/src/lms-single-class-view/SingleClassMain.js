import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  Progress,
  Divider,
  Button,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Checkbox,
} from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import VideoEmbed from './VideoEmbed';
import './VideoEmbedStyles.css';
import Quiz from './Quiz';

export default function SingleClassMain() {
  const classContent = {
    classTitle: 'Let’s Balance Your Energies',
    classDescription:
      'Everyone has two sides of their consciousness - feminine and masculine energy; this is the yin and the yang to who you are as a divine being. You need both sides balanced and working together to live your soul purpose.',
    classDatePublished: 'March 16th, 2022',
    classPublisher: 'Fem Entity',
    videoEmbedLink: '6VB4bgiB0yA',
    classBodyText:
      'Subjects: Masculine and Feminine Energy, How Unbalanced Energy Impacts Your Life, Identifying Your Wounded Energy, Healing Your Unbalanced Energy, Finding a Balance that works for You. Included: Complete Course Journaling Pages, Complete Access to Course, Customized Lesson Guide for Masculine and Feminine Energy',
    quizResult: '100%',
    sectionTitles: [
      'Masculine and Feminine Energy',
      'How Unbalanced Energy Impacts Your Life',
      'Identifying Your Wounded Energy',
      'Healing Your Unbalanced Energy',
      'Finding a Balance that works for You',
      'References',
    ],
    sectionBody: [],
    progressPrecentage: 30,
  };

  const recommendedClasses = {
    recClassTitle: [
      'Explore Your Divine Femininity',
      'Find Your Self Care Routine',
      'Unlock Your Manifestation Power',
    ],
    recClassImage: [
      'https://images.unsplash.com/photo-1523501859272-afa857e87881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80',
      'https://images.unsplash.com/photo-1554167838-07aa5723df3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1511650526093-4c9107dbf5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    ],
    recClassURL: ['class1', 'class2', 'class3'],
  };

  function progress() {
    var precentage;
    var total = classContent.sectionTitles.length;
    precentage = 100 / total;
    classContent.progressPrecentage += precentage;
  }

  return (
    <Flex>
      <Box
        fontColor="fontColor"
        flex="0.75"
        align="left"
        npl="5"
        pr="5"
        pb="10"
        bg="white"
      >
        <Box p="5">
          <Box>
            <Heading mb="4" fontFamily="heading">
              {classContent.classTitle}
            </Heading>
          </Box>
          <Box mt="1">
            <Text fontFamily="subheading" fontSize="xl">
              {classContent.classDescription}
            </Text>
          </Box>
          <Box
            d="flex"
            alignItems="center"
            fontFamily="altBody"
            fontSize="xs"
            mt="2"
          >
            <Text>{classContent.classPublisher}</Text>
            <Text ml="4">{classContent.classDatePublished}</Text>
          </Box>
        </Box>

        <VideoEmbed videoEmbedLink={classContent.videoEmbedLink} />

        <Box pl="5">
          <Accordion allowToggle>
            {classContent.sectionTitles.map((id, i) => (
              <AccordionItem key={i}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontFamily="subheading"
                      height="40px"
                      fontSize="lg"
                    >
                      {id}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontFamily="body">
                  {/*{classContent.sectionBody[i]} */}
                  <p mb="1">
                    Everyone has two sides of their consciousness - feminine and
                    masculine energy; this is the yin and the yang to who you
                    are as a divine being. You need both sides balanced and
                    working together to live your soul purpose. This energy is
                    not gender based as everyone has both energies living within
                    us. Each person has to find their own mixture of the two
                    that works for them. You may think you know what you want in
                    life, but without access to your deeper intuition you will
                    never truly know if you are on the right path.
                  </p>
                  <br />
                  <p mb="1">
                    As a young person, we’re raised to believe that we need to
                    conform to the roles and expectations of gender based norms
                    in order to succeed in society. Although your energy isn’t
                    based on gender or a reflection of your sex. So as we grow
                    into adulthood, our energies are often shifted to one side
                    or another based on your gender. If you feel you are
                    masculine energy dominante, you might find it hard to stop
                    working or release control over certain situations. If you
                    are feminine energy dominante, you might struggle with
                    making decisions and procrastinating to get things done.
                  </p>
                  <br />
                  <p mb="1">
                    We live in a world that celebrates the power of masculine
                    energy above all else to succeed. Whereas femininity is
                    often associated with weakness or a submissive nature. This
                    could lead to career-driven women to be looked at as bossy
                    or overbearing, or make guys feel like less of a man when
                    they begin to show emotions. At the same time, being a
                    masculine strength person doesn’t mean you're destined to be
                    an aggressive person without feelings, it’s up to you to
                    find a balance of your energies.
                  </p>
                  <br />
                  <p mb="1">
                    Your masculine energy is your true expression of power or
                    strength - leaning towards our confidence and independence.
                    Your feminine energy is your true expression of love and
                    caring - leaning towards our creativity and intuition.
                    Balanced together, you experience your true expression of
                    wisdom, a healthy balance of human integrity.{' '}
                  </p>
                  <br />
                  <p mb="1">
                    Here is a quick chart of the characteristics that fall under
                    faminine and masculine energy. This is generally what people
                    think when they think of the two energies. This is a very
                    modern look at feminine and masculine energy.{' '}
                  </p>
                  <br />
                  <p mb="2">
                    Now if we look at this chart, there’s more variety in how
                    the energies flow with each other. This is the kind of
                    feminine and masculine energy that we will be focusing on
                    and achieving. ‘Boundaries’ can be found under both columns,
                    recognizing that in every aspect of your life you need
                    boundaries. Under Divine Feminine we have the word ‘strong’,
                    which wouldn’t be something considered under femininity, but
                    unlocking your feminine energy can feel very empowering and
                    oftentimes leaves people feeling stronger and more able to
                    tackle life's challenges. Under Divine Masculinity we have
                    the word ‘humble, a trait we wouldn’t consider masculine but
                    when your masculine energy is balanced you can see a
                    brighter appreciation for life’s testing and rewarding
                    moments. We’re aiming to unlock your divine balance of
                    masculine and feminine energy to guide you to your truest
                    potential.{' '}
                  </p>
                  <br pb="2" />
                  <Checkbox>Finished Reading?</Checkbox>
                </AccordionPanel>
              </AccordionItem>
            ))}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontFamily="subheading"
                    height="40px"
                    fontSize="lg"
                  >
                    Quiz title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Quiz />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontFamily="subheading"
                    height="40px"
                    fontSize="lg"
                  >
                    Related Vendors
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList mr="4" ml="4" fontFamily="body">
                  <ListItem>Vendor 1</ListItem>
                  <ListItem>Vendor 2</ListItem>
                  <ListItem>Vendor 3</ListItem>
                  <ListItem>Vendor 4</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>

      <Box
        bg="background"
        dropShadow="2xl"
        flex="0.25"
        flexDirection="flex-end"
      >
        <Box ml="4" mr="2">
          <Text fontFamily="body">Progress</Text>
          <Progress
            colorScheme="green"
            height="32px"
            value={classContent.progressPrecentage}
          />
        </Box>

        <Box mr="2" ml="4" pt="6">
          <Text fontFamily="body">Quiz Results:</Text>
          <Text fontFamily="body" fontWeight="bold" mt="2">
            Quiz 1: {classContent.quizResult}
          </Text>
        </Box>

        <Divider m="5" ml="4" />

        <Box ml="4" mr="2">
          <Text pb="4" fontFamily="subheading" textAlign="center">
            Similar Classes
          </Text>
          {recommendedClasses.recClassTitle.map((id, i) => (
            <Box maxW="small" bg="white" overflow="hidden" mb="5">
              <Image
                src={recommendedClasses.recClassImage[i]}
                onClick={() =>
                  window.open(recommendedClasses.recClassURL[i], '_blank')
                }
              />
              <Box p="3" flex="1" fontFamily="subheading" textAlign="center">
                <Text
                  mt="1"
                  fontWeight="semibold"
                  lineHeight="tight"
                  isTruncated
                >
                  {id}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Box ml="4" mr="2" display="flex" justifyContent="center">
          <Button
            fontFamily="subheading"
            bg="primary"
            textColor="white"
            _hover={{ bg: 'white', textColor: 'black' }}
            mt="2"
            flex="1"
            onClick={() => window.open('allClasses', '_blank')}
          >
            All Classes
          </Button>
        </Box>

        <Divider m="5" ml="4" />
      </Box>
    </Flex>
  );
}
