import PageOne from "./PageOne";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import React, {useState} from "react";
import {Center} from "@chakra-ui/react";
import PageTwo from "./PageTwo";

function BusinessForm() {

    const [page, setPage] = useState("pageOne");

    //Todo: The function and variables to handel user input need some change later

    //Store user's input
    const [formData, setFormData] = useState({
        //Page one
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        emailAddress: "",
        phoneNumber: "",
        password: "",
        memberType: "basic",

        //Page two
        houseNumberName: "",
        streetName: "",
        unit: "",
        postcode: "",
        city: "",
        province: "",
        //If user use same address for bill
        sameAddress: true,
        //Billing Address
        billHouseNumberName: "",
        billStreetName: "",
        billUnit: "",
        billPostcode: "",
        billCity: "",
        billProvince: "",

        //Page three
        salutations: "",
        pronouns: "",
        sunSign: "",
        moonSign: "",
        risingSign: "",
    })

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const {value} = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }

    // If user use same address for bill, set it same as the address
    const useSameAddress = (sameAddress) => {
        if (sameAddress) {
            setFormData({
                ...formData,
                billHouseNumberName: formData.houseNumberName,
                billStreetName: formData.streetName,
                billUnit: formData.unit,
                billPostcode: formData.postcode,
                billCity: formData.city,
                billProvince: formData.province,
            });
        } else {
            setFormData({
                ...formData,
                billHouseNumberName: "",
                billStreetName: "",
                billUnit: "",
                billPostcode: "",
                billCity: "",
                billProvince: "",
            });
        }
    }

    const nextPage = (page) => {
        setPage(page);
    };

    return (
        <Center
            width={'100%'}
            mb={10}
        >
            {
                {
                    pageOne: <PageOne onButtonClick={nextPage} handleFormData={handleInputData} values={formData}/>,
                    pageTwo: <PageTwo onButtonClick={nextPage} handleFormData={handleInputData}
                                      handleSameAddress={useSameAddress} values={formData} />,
                    pageThree: <PageThree onButtonClick={nextPage} handleFormData={handleInputData} values={formData}/>,
                    pageFour: <PageFour onButtonClick={nextPage} handleFormData={handleInputData} values={formData}/>,
                    pageFive: <PageFive/>,
                }[page]
            }
        </Center>
    );
}

export default BusinessForm;
