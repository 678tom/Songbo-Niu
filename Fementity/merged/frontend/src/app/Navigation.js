import React from 'react';
import { Link as RouteLink, Link as ReactRouterLink } from 'react-router-dom';
import {
  CalendarIcon,
  DragHandleIcon,
  EditIcon,
  LockIcon,
  RepeatIcon,
  Search2Icon,
  StarIcon,
} from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Image,
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { Nav } from '../theme/NavStyles';
import { BsCart } from 'react-icons/bs';
import { BsBookmarkHeart } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { Center } from '@chakra-ui/react';

const menuItems = [
  { name: 'Home', href: '/', icon: <StarIcon /> },
  { name: 'Login', href: '/login', icon: <LockIcon /> },
  { name: 'Memberships', href: '/memberships', icon: <RepeatIcon /> },
  { name: 'Directory', href: '/directory', icon: <Search2Icon /> },
  { name: 'Calendar', href: '/calendar', icon: <CalendarIcon /> },
  { name: 'Lvlup Boutique', href: '/storefront', icon: <DragHandleIcon /> },
  { name: 'About Us', href: '/about', icon: <EditIcon /> },
  { name: 'Cart', href: '/cart-page', icon: <BsCart /> },
  { name: 'Wishlist', href: '/wishlist-page', icon: <BsBookmarkHeart /> },
];

const Navbar = () => {
  //breakpoint for desktop to mobile
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <HStack>
          {isDesktop ? (
            <Center margin="auto">
              <Flex direction="column">
                <Flex >
                  {' '}
                  {/* elements at the top of the page login, calender icon, cart icon */}
                  <HStack>
                    {' '}
                    <a href="/login">
                      {' '}
                      <Button variant="link">Login</Button>{' '}
                    </a>
                    <a href="/cart-page">
                      {' '}
                      <Button variant="link">
                        {' '}
                        <BsCart />{' '}
                      </Button>{' '}
                    </a>
                    <a href="/calendar">
                      {' '}
                      <Button variant="link">
                        {' '}
                        <CalendarIcon />{' '}
                      </Button>{' '}
                    </a>{' '}
                  </HStack>
                </Flex>
                <Flex flex="1">
                  {/* Can use button group but idk how to implement route */}

                  {/* <ButtonGroup variant="primary" spacing="8" >
                  {['Home', 'Directory', 'Lvlup Boutique',  'About Us', 'Memberships', 'Wishlist'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup> */}

                  {/*elements to the left of logo*/}
                  <HStack spacing="2">
                    <a href="/">
                      {' '}
                      <Button variant="primary">Home</Button>{' '}
                    </a>
                    <a href="/directory">
                      {' '}
                      <Button variant="primary">Directory</Button>{' '}
                    </a>
                    <a href="/storefront">
                      {' '}
                      <Button variant="primary">Lvlup Boutique</Button>{' '}
                    </a>
                  </HStack>

                  {/* Logo in middle of navbar*/}
                  <Image src="/images/New FemLogo.png" boxSize="130px" />

                  {/*elements to the right of logo*/}
                  <HStack spacing="2">
                    <a href="/about">
                      {' '}
                      <Button variant="primary"> About Us</Button>{' '}
                    </a>
                    <a href="/memberships">
                      {' '}
                      <Button variant="primary">Memberships</Button>{' '}
                    </a>
                    <a href="/wishlist-page">
                      {' '}
                      <Button variant="primary">Wishlist</Button>{' '}
                    </a>
                  </HStack>
                </Flex>
              </Flex>
            </Center>
          ) : (
            // mobile drop down navbar
            <Nav>
              <Menu>
                <MenuButton
                  as={IconButton}
                  variant="primary"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
                <MenuList color="primary">
                  {menuItems.map((item) => {
                    return (
                      <>
                        <MenuItem as={Link} href={item.href} icon={item.icon}>
                          {' '}
                          {item.name}{' '}
                        </MenuItem>
                      </>
                    );
                  })}
                </MenuList>
              </Menu>
            </Nav>
          )}
        </HStack>
      </Box>
    </Box>
  );
};
export default Navbar;
