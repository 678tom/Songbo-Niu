//References: https://dev.to/_s_w_a_y_a_m_/how-to-integrate-react-frontend-with-node-backend-36a4
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Select,
  Alert,
  AlertIcon,
  Image,
} from '@chakra-ui/react';

import React, { createRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

export default function MemberForm() {
  let handleSubmitDB = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(
        `https://api.${window.location.host}/api/add-member`,
        {
          method: 'POST',
          body: JSON.stringify({
            first_name: firstName,
            /*last_name: lastName,
                  pronouns: pronouns,
                  occupation: occupation,
                  email: emailAddress,
                  phone_number: phoneNumber,
                  address: address,
                  city: city,
                  province: province,
                  workshops: workshops,
                  podcast: podcast,
                  course_referral: courseReferral,
                  social_media_handle: socialMedia,
                  giveaway_interest: giveaway*/
          }),
        },
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setFirstName('');
        //setEmail("");
        //setMessage("User created successfully");
      } else {
        setError('Some error occured');
      }
    } catch (err) {
      console.log(err);
    }
  };
  //
  const navigate = useNavigate();
  const { signUp } = useUserAuth();

  // Form Inputs
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [occupation, setOccupation] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [date, setDate] = useState('');
  const [locationTime, setLocationTime] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [finding, setFinding] = useState('');

  //Form Errors
  const [error, setError] = useState('');
  const errorRef = createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    if (validate()) {
      try {
        await signUp(emailAddress, password);
        navigate('/login');
      } catch (err) {
        setError(err.message);
        window.scrollTo(0, errorRef.current.offsetTop);
      }
    } else {
      errorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
    errorRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  const validate = () => {
    const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gim;
    const emailRegEx =
      /^([\w\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#_]{8,}$/;
    const textRegEx = /^[a-zA-Z]*$/;
    const phoneRegEx =
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (firstName === '') {
      setError('Please enter your first name');
      return false;
    } else if (lastName === '') {
      setError('Please enter your last name');
      return false;
    } else if (emailAddress === '') {
      setError('Please enter your email');
      return false;
    } else if (password === '') {
      setError('Please enter a password');
      return false;
    } else if (confirmPassword === '') {
      setError('Please confirm your password');
      return false;
    } else if (phoneNumber === '') {
      setError('Please enter your phone number');
      return false;
    } else if (date === '') {
      setError('Please enter your date of birth');
      return false;
    } else if (address === '') {
      setError('Please enter your address');
      return false;
    } else if (city === '') {
      setError('Please enter your city');
      return false;
    } else if (province === '') {
      setError('Please enter your province');
      return false;
    } else if (!nameRegex.test(firstName)) {
      setError('Please enter a valid first name');
      return false;
    } else if (!emailRegEx.test(emailAddress)) {
      setError('Please enter a valid email');
      return false;
    } else if (!passwordRegEx.test(password)) {
      setError(
        'Password must contain atleast 1 Alphabet, 1 Number, 1 Special Character, 1 Upper case letter, and must be atleast 8 letters long',
      );
      return false;
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    } else if (!textRegEx.test(occupation)) {
      setError('Occupation can only contain letters or can be left empty');
      return false;
    } else if (!phoneRegEx.test(phoneNumber)) {
      setError('Please enter a valid phone number');
      return false;
    }

    return true;
  };

  return (
    <Box
      mt={4}
      w={['full', 'md']}
      h={['full', 'mx']}
      boxShadow="md"
      p={['6', '10']}
      rounded="lg"
      bg= 'rgba(200,115,117,0.3)'
      // bg="background"
      mx="auto"
      mb={20}
    >
      <VStack>
        <Image
          borderRadius="full"
          position={'relative'}
          margin={'0'}
          padding={'0'}
          boxSize="150px"
          src="images/fementity-logo.png"
          alt="Fementity Logo"
        />
      </VStack>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start" w="full">
          <VStack
            spacing={1}
            backgroundColor={'primay'}
            align={['flex-start', 'center']}
            w="full"
            mb={3}
          >
            <Heading>Fem Entity</Heading>
          </VStack>

          <VStack spacing={1} align={['flex-start', 'left']} w="full" mb={1}>
            <Heading fontWeight={500}>Membership Form</Heading>
          </VStack>

          {error && (
            <Alert rounded={5} ref={errorRef} status="error">
              <AlertIcon /> {error}
            </Alert>
          )}

          {/* Required information for free member signup */}
          <VStack spacing={1} align={['flex-start', 'left']} w="full">
            <Heading mt={8}>Required Information</Heading>
          </VStack>

          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="lasttname"
              onChange={(e) => setLastName(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'email'}
              aria-label="email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'password'}
              aria-label="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'password'}
              aria-label="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Phone number</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'number'}
              aria-label="phonenumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Date of birth</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'date'}
              aria-label="dateofbirth"
              onChange={(e) => setDate(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="address"
              onChange={(e) => setAddress(e.target.value)}
            ></Input>
          </FormControl>
          
          {/* Optional information for free member signup */}
          <VStack spacing={1} align={['flex-start', 'left']} w="full">
            <Heading mt={8}>Optional Information</Heading>
          </VStack>

          <FormControl>
            <FormLabel>Salutations</FormLabel>
            <Select
              type={'email'}
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              backgroundColor={''}
              aria-label="email"
              placeholder="Selected Item"
              onChange={(e) => setSalutation(e.target.value)}
            >
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Pronouns</FormLabel>
            <Select
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              backgroundColor={''}
              aria-label="pronouns"
              placeholder="Select"
              onChange={(e) => setPronouns(e.target.value)}
            >
              <option value="He/Him">He/Him</option>
              <option value="She/Her">She/her</option>
              <option value="They/Them">They/them</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Occupation</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="occupation"
              onChange={(e) => setOccupation(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Location and Time Born</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="locationandtimeborn"
              onChange={(e) => setLocationTime(e.target.value)}
            ></Input>
          </FormControl>


          <HStack w="full" justify={'space-between'}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Select
                type={'text'}
                rounded={2}
                boxShadow={'md'}
                outlineColor={'gray'}
                variant={''}
                backgroundColor={''}
                aria-label="city"
                placeholder="Select city"
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="Halifax">Halifax</option>
                <option value="Toronto">Toronto</option>
                <option value="Montreal">Montreal</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Fredricton">Fredricton</option>
                <option value="Saint Johns">Saint Johns</option>
                <option value="Calgary">Calgary</option>
                <option value="Ottawa">Ottawa</option>
                <option value="Winnipeg">Winnipeg</option>
                <option value="Edmonton">Edmonton</option>
                <option value="Saskatoon">Saskatoon</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Province</FormLabel>
              <Select
                type={'text'}
                rounded={2}
                boxShadow={'md'}
                outlineColor={'gray'}
                variant={''}
                backgroundColor={''}
                aria-label="province"
                placeholder="Select Province"
                onChange={(e) => setProvince(e.target.value)}
              >
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Saskatchawan">Saskatchawan</option>
                <option value="Newfoundland">Newfoundland & Labrador</option>
                <option value="Quebec">Quebec</option>
                <option value="New Brunswick">New Brunswick</option>
              </Select>
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Where did you find Fem Entity?</FormLabel>
            <Select
              type={'text'}
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              backgroundColor={''}
              aria-label="Where did you find FemEntity"
              onChange={(e) => setFinding(e.target.value)}
            >
              <option value="Online">Online</option>
              <option value="Friends">Friends</option>
              <option value="Other">Other</option>
            </Select>
          </FormControl>

          {error && (
            <Alert rounded={5} status="error">
              <AlertIcon /> {error}
            </Alert>
          )}

          <Button
            type="submit"
            backgroundColor={'primary'}
            color={'white'}
            w={['full', 'auto']}
            alignSelf={'end'}
            aria-label="login"
            padding="auto"
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
