import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { simplePostCall } from "../api/ApiServices";
import { ApiConfig } from "../api/ApiConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../comman/Loader";
import {isValid} from "../comman/isValidation";

const Registration = () => {
  const [key, setKey] = useState("step1");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });
  const { regEmail, regexPassword, regName, regLastName, regNumber } = isValid
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
 if (validateForm()) {
      setLoading(true);
 // eslint-disable-next-line no-unused-vars
      const { acceptTermsAndCondition, ...dataToSubmit } = userData;
      simplePostCall(ApiConfig.USER_REGISTRATION, JSON.stringify(dataToSubmit))
        .then((res) => {
          console.log(res);
          navigate("/posts");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  const validateForm = () => {

    let formErrors = {};
  
    if (key === "step1") {
      if (!userData.emailId || !regEmail.test(userData.emailId)) {
        formErrors.emailId = "Valid email is required.";
      }
  
      if (!userData.password || !regexPassword.test(userData.password)) {
        formErrors.password =
          "Password must contain  uppercase,  lowercase,  numbers, and  special characters.";
      }
    } else if (key === "step2") {
      if (!userData.firstName || !regName.test(userData.firstName)) {
        formErrors.firstName = "First name must be between 2 and 50 characters.";
      }
      if (!userData.lastName || !regLastName.test(userData.lastName)) {
        formErrors.lastName = "Last name must contain only letters.";
      }
      if (!userData.address && userData.address.length < 10) {
        formErrors.address = "Address must be at least 10 characters long.";
      }
    } else if (key === "step3") {
      if (!userData.phoneNumber || !regNumber.test(userData.phoneNumber)) {
        formErrors.phoneNumber = "Phone number must be 10 digits.";
      }
      if (!userData.acceptTermsAndCondition) {
        formErrors.acceptTermsAndCondition = "You must accept terms and conditions.";
      }
    }
  
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="wrapper-container">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="main-form-wrapper">
            <div className="form-wrapper">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(key) => {
                  setKey(key);
                  // if(key==='step1') {
                  //   setKey(key);
                  // }
                  //   else if (validateForm()) {
                  //     setKey(key);
                  //   }
                  
                 
            
                }}
                className="mb-3"
              >
                <Tab eventKey="step1" title="Form 1" >
                  <Form>
                    <Form.Group className="mb-3" controlId="emailId">
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control
                        type="email"
                        name="emailId"
                        placeholder="name@example.com"
                        value={userData.emailId}
                        onChange={handleChange}
                      />
                      {errors.emailId && <span>{errors.emailId}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={userData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <span>{errors.password}</span>}
                    </Form.Group>
                  </Form>
                </Tab>
                <Tab eventKey="step2" title="Form 2"  disabled={!userData.emailId || !userData.password}>
                  <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={userData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && <span>{errors.firstName}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={userData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && <span>{errors.lastName}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="address"
                        rows={3}
                        value={userData.address}
                        onChange={handleChange}
                      />
                      {errors.address && <span>{errors.address}</span>}
                    </Form.Group>
                  </Form>
                </Tab>
                <Tab eventKey="step3" title="Form 3" disabled={!userData.firstName || !userData.lastName || !userData.address}>
                  <Form>
                    <Form.Group className="mb-3" controlId="countryCode">
                      <Form.Label>Country Code</Form.Label>
                      <Form.Select
                        name="countryCode"
                        value={userData.countryCode}
                        onChange={handleChange}
                      >
                        <option value="+91">India (+91)</option>
                        <option value="+1">America (+1)</option>
                      </Form.Select>
                      {errors.countryCode && <span>{errors.countryCode}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phoneNumber">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter Mobile Number"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        maxLength={10}
                      />
                      {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="acceptTermsAndCondition">
                      <Form.Check
                        type="checkbox"
                        name="acceptTermsAndCondition"
                        label="Accept Terms and Conditions"
                        checked={userData.acceptTermsAndCondition}
                        onChange={handleChange}
                      />
                      {errors.acceptTermsAndCondition && (
                        <span>{errors.acceptTermsAndCondition}</span>
                      )}
                    </Form.Group>
                  </Form>
                </Tab>
              </Tabs>
            </div>
            <div className="btn-wrapper">
              {key !== "step1" ? (
                <Button variant="info" onClick={() => setKey(key === "step2" ? "step1" : "step2")}>
                  Back
                </Button>
              ) : (
                <Button variant="info" disabled>
                  Back
                </Button>
              )}
              <Button
                variant="info"
                disabled={key === "step3"}
                onClick={() => {
                  if (validateForm()) {
                    setKey(key === "step1" ? "step2" : "step3");
                  }
                }}
              >
                Save & Next
              </Button>
              {key === "step3" && (
                <Button variant="primary" onClick={handleSubmit}>
                  Save All
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Registration;
