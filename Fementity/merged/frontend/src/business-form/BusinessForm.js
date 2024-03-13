import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import React, {useState} from "react";
import {Center} from "@chakra-ui/react";
import PageFive from "./PageFive";

const LAST_PAGE = "pageFive";

function BusinessForm() {

    const [page, setPage] = useState("pageOne");

    //Todo: The function and variables to handel user input need some change later

    //Store user's input
    const [formData, setFormData] = useState({
        //Page one
        firstName: "",
        lastName: "",
        businessType: "",
        registeredName: "",
        emailAddress: "",
        phoneNumber: "",
        password: "",

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
        description: "",
        website: "",
        facebook: "",
        instagram: "",
        twitter: "",
        youtube: "",
        linkedin: "",
        spotify: "",

        //Page four
        course: false,
        podcastYoutube: false,
        blog: false,
        event: false,
        workshop: false,
        coupon: false,
        noInvolvements: false,
        findMethod: "",
        additionalComment: ""
    })

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = (e) => {
        const {name, type} = e.target;
        setFormData({
            ...formData,
            [name]: e.target[type === "checkbox" ? "checked" : "value"]
        });
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"formData": formData})
        }
        // TODO: Check register worked before sending to next page
        await fetch('/registerNewBusiness', fetchOptions);
        nextPage(LAST_PAGE);
    };

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
                    pageFour: <PageFour onButtonClick={nextPage} handleSubmit={handleSubmit}
                                        handleFormData={handleInputData} values={formData}/>,
                    pageFive: <PageFive />,
                }[page]
            }
        </Center>
    );
}

export default BusinessForm;