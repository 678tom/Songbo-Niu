import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { Stack} from '@chakra-ui/react'

//Submit funcitons for the contact form - developed by the winter 2022 team
export default function ContactForm() {
  const [toSend, setToSend] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); /* prevents the page from refreshing after form submission */
    alert(`Form submitted successfully!`);
    /* send([SERVICE ID], [TEMPLATE ID], toSend, [User ID]) */
    send('service_cdirtsj', 'template_9jno68s', toSend, 'R6E4YZWy9Y3rihUQo')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };  
  
  

  //Restyled the contact us form - Summer 2022 team
  return (
    <div className="ContactForm">
      <form
          onSubmit={handleSubmit}
          style={{
            width: 360,
            marginLeft: "auto",
            marginRight: "auto"
          }}
      >
        <Stack direction={'column'}>
          <Stack
              direction={'row'}
              width={"50%"}
          >
            <fieldset>
              <label>
                {/* <p >First Name</p> */}
                <input 
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder='First Name'
                  value={toSend.firstName}
                  onChange={handleChange}
                  style={{
                      width: 176,
                      height: 40,
                      borderColor: '#b97375',
                      borderWidth: 3
                  }}
                />
              </label>
            </fieldset>

            <fieldset>
              <label>
                {/* <p>Last Name</p> */}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder='Last Name'
                  value={toSend.lastName}
                  onChange={handleChange}
                  style={{
                      width: 176,
                    height: 40,
                    borderColor: '#b97375',
                    borderWidth: 3
                  }}
                  
                />
              </label>
            </fieldset>
          </Stack>
          <Stack>
          <fieldset>
            <label>
              {/* <p>Email Address</p> */}
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder='Email'
                value={toSend.emailAddress}
                onChange={handleChange}
                style={{
                  height: 40,
                  width: "100%",
                  borderColor: '#b97375',
                  borderWidth: 3
                }}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              {/* <p>Your Message</p> */}
              <textarea
                id="message"
                name="message"
                placeholder='Enter your message here...'
                rows={5}
                value={toSend.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  borderColor: '#b97375',
                  borderWidth: 3 }}
              />
            </label>
          </fieldset>

          <button
          style={{
            position: 'relative',
            borderRadius: 100,
            padding: 3,
            transform: 'scale(1)',
            color: 'white',
            transitionDuration: '0.5s',
            cursor: 'pointer',
            bottom: 7,
            backgroundColor: '#b97375',
            borderWidth: 1,
            width:'25%',
            justifyItems: 'center',
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 30
          }}
            type="submit">Submit
          </button>
          
          </Stack>
        </Stack>
      </form>
    </div>
  );
}
