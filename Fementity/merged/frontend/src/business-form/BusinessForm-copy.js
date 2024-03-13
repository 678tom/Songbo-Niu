//Reference for EmailJs
// https://www.emailjs.com/docs/examples/reactjs/
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Checkbox,
  Select,
  Alert,
  AlertIcon,
  Image,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

import React, { createRef, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function BusinessForm() {
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
                  email_address: emailAddress,
                  phone_number: phoneNumber,
                  data_of_birth: dateOfBirth,
                  location_time: locationTime,
                  address: address,
                  city: city,
                  country: country,
                  info_source: info_source*/
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

  const navigate = useNavigate();
  const { signUp } = useUserAuth();

  // Form Inputs
  const [emailAddress, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [brandingImages, setBrandingImages] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [involveCourse, setInvolveCourse] = useState(true);
  const [involvePodcast, setInvolvePodcast] = useState(true);
  const [involveWorkshops, setInvolveWorkshops] = useState(true);
  const [involveEvents, setInvolveEvents] = useState(true);
  const [involveGiveaways, setInvolveGiveaways] = useState(true);
  const [finding, setFinding] = useState('');

  const [error, setError] = useState('');
  const errorRef = createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    if (validate() && handleFiles()) {
      try {
        //await signUp(emailAddress, password);

        let formData = {
          email: emailAddress,
          'first name': firstName,
          'last name': lastName,
          'phone number': phoneNumber,
          'date of birth': date,
          'business type': businessType,
          'business name': businessName,
          'located at': location,
          city: city,
          province: province,
          'description of product': description,
          pricing: priceRange,
          website: websiteLink,
          socials: socialMedia,
          'branding Images': brandingImages,
          'where did you find us': finding,
          involvement: {
            'course referrals': involveCourse,
            'podcasts and youtube': involvePodcast,
            workshops: involveWorkshops,
            events: involveEvents,
            giveaways: involveGiveaways,
          },
        };
        sendEmail(formData);
        console.log(formData);
        handleSubmitDB(formData);
        navigate('/login');
      } catch (err) {
        setError(err.message);
      }
    } else {
      errorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  const handleFiles = () => {
    if (brandingImages.length === 0) {
      setError('Please upload atleast 1 image');
      return false;
    } else if (brandingImages.length > 3) {
      setError("Can't upload more than 3 images");
      return false;
    }

    for (let i = 0; i < brandingImages.length; i++) {
      if (!brandingImages[i].type.includes('image')) {
        setError(`File '${brandingImages[i].name}' has to be an image`);
        return false;
      }
    }
    return true;
  };

  const validate = () => {
    const nameRegex = /^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/gi;
    const emailRegEx =
      /^([\w\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#_]{8,}$/;
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
    } else if (businessType === '') {
      setError('Please select a business type');
      return false;
    } else if (businessName === '') {
      setError('Please enter a business name');
      return false;
    } else if (date === '') {
      setError('Please enter your date of birth');
      return false;
    } else if (location === '') {
      setError('Please enter where you are located');
      return false;
    } else if (description === '') {
      setError('Please enter a description');
      return false;
    } else if (websiteLink === '') {
      setError('Please enter your website link');
      return false;
    } else if (priceRange === '') {
      setError('Please enter your price range');
      return false;
    } else if (city === '') {
      setError('Please enter your city');
      return false;
    } else if (province === '') {
      setError('Please enter your province');
      return false;
    } else if (socialMedia === '') {
      setError('Please enter your social media handles');
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
    } else if (!phoneRegEx.test(phoneNumber)) {
      setError('Please enter a valid phone number');
      return false;
    }

    return true;
  };

  const form = useRef();
  const sendEmail = (e, formData) => {
    e.preventDefault();
    emailjs.sendForm('ServiceID', 'templateID', formData, 'userID').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <Box
      mt={4}
      w={['full', 'md']}
      h={['full', 'mx']}
      boxShadow="md"
      p={['6', '10']}
      rounded="lg"
      bg="background"
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

      <form ref={form} onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={1} align={['flex-start', 'center']} w="full" mb={3}>
            <Heading>Fem Entity</Heading>
          </VStack>

          <VStack spacing={1} align={['flex-start', 'center']} w="full" mb={3}>
            <Heading fontWeight={500}>Business Form</Heading>
          </VStack>

          {error && (
            <Alert rounded={5} ref={errorRef} status="error">
              <AlertIcon /> {error}
            </Alert>
          )}

          <FormControl>
            <FormLabel>Preferred Email Address</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="emailaddress"
              name="emailAddress"
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
            <FormLabel>First Name</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="firstname"
              name="firstName"
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
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Are you a Consultant or a Business?</FormLabel>
            <Select
              type={'email'}
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              aria-label="email"
              placeholder="Select Type"
              name="businessType"
              onChange={(e) => setBusinessType(e.target.value)}
            >
              <option value="Business">Business</option>
              <option value="Consultant">Consultant</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Business Name</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="businessName"
              name="businessName"
              onChange={(e) => setBusinessName(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Where are you located?</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="location"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Preferred Phone Number</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'number'}
              aria-label="phonenumber"
              name="phoneNumber"
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
              name="dateOfBirth"
              onChange={(e) => setDate(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Description of Product/Service</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Official Website or Page of Product/Service</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="officialwebsite"
              name="website"
              onChange={(e) => setWebsiteLink(e.target.value)}
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
                aria-label="city"
                placeholder="Select City"
                name="city"
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
                aria-label="province"
                placeholder="Select Province"
                name="province"
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
            <FormLabel>Social Media Handles</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="socialhandles"
              name="socialMedia"
              onChange={(e) => setSocialMedia(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>1-3 Branding Images</FormLabel>
            <input
              type="file"
              accept="image/*"
              color={'white'}
              w={['full', 'auto']}
              multiple
              onChange={(e) => setBrandingImages(e.target.files)}
              name="images"
            ></input>
          </FormControl>

          <FormControl>
            <FormLabel>Price Range of Product/Service</FormLabel>
            <Input
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              type={'text'}
              aria-label="pricing"
              name="pricing"
              onChange={(e) => setPriceRange(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel>
              How involved do you want to be with Fem Entity?{' '}
            </FormLabel>
            <Checkbox
              onChange={(e) => setInvolveCourse(e.target.checked)}
              defaultIsChecked
            >
              Course Referrals
            </Checkbox>{' '}
            <br></br>
            <Checkbox
              onChange={(e) => setInvolvePodcast(e.target.checked)}
              defaultIsChecked
            >
              Podcast and Youtube
            </Checkbox>{' '}
            <br></br>
            <Checkbox
              onChange={(e) => setInvolveWorkshops(e.target.checked)}
              defaultIsChecked
            >
              Workshops
            </Checkbox>
            <br></br>
            <Checkbox
              onChange={(e) => setInvolveEvents(e.target.checked)}
              defaultIsChecked
            >
              Events
            </Checkbox>
            <br></br>
            <Checkbox
              onChange={(e) => setInvolveGiveaways(e.target.checked)}
              defaultIsChecked
            >
              Giveaways
            </Checkbox>
          </FormControl>

          <FormControl>
            <FormLabel>Where did you find Fem Entity?</FormLabel>
            <Select
              type={'text'}
              rounded={2}
              boxShadow={'md'}
              outlineColor={'gray'}
              variant={''}
              aria-label="country"
              placeholder="Select Item"
              name="infosource"
              onChange={(e) => setFinding(e.target.value)}
            >
              <option value="Online">Online</option>
              <option value="Friend">Friend</option>
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
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
