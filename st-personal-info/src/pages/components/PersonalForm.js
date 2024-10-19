import React, { useState, useEffect } from "react";
import ProfileImage from "./ProfileImage";
// Define your form JSON structure
const formJson = {
  form: {
    title: "Personal Information Form",
    description: "Please fill out your personal details below.",
    groups: [
      {
        title: "Contact Information",
        fields: [
          {
            label: "Full Name",
            type: "text",
            name: "fullName",
            placeholder: "Enter your full name",
            required: true,
          },
          {
            label: "Address",
            type: "textarea",
            name: "address",
            placeholder: "Enter your address",
            required: true,
          },
          {
            label: "State",
            type: "dropdown",
            name: "state",
            options: [
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "New York",
              "Texas",
              "Washington",
              "Wisconsin",
              "Wyoming",
            ],
            required: true,
          },
          {
            label: "Phone Number",
            type: "text",
            name: "phoneNumber",
            placeholder: "Enter your phone number",
            required: true,
          },
          {
            label: "Preferred Contact Method",
            type: "radio",
            name: "contactMethod",
            options: [
              { label: "Email", value: "email" },
              { label: "Phone", value: "phone" },
              { label: "SMS", value: "sms" },
            ],
            required: true,
          },
        ],
      },
      {
        title: "Schooling Information",
        fields: [
          {
            label: "Highest Qualification",
            type: "dropdown",
            name: "qualification",
            options: [
              "High School",
              "Associate Degree",
              "Bachelor's Degree",
              "Master's Degree",
              "Doctorate",
            ],
            required: true,
          },
          {
            label: "Graduation Year",
            type: "number",
            name: "graduationYear",
            placeholder: "Enter graduation year",
            min: 1950,
            max: 2024,
            required: true,
          },
          {
            label: "Subjects Studied",
            type: "checkbox",
            name: "subjects",
            options: [
              { label: "Mathematics", value: "math" },
              { label: "Physics", value: "physics" },
              { label: "Chemistry", value: "chemistry" },
              { label: "Biology", value: "biology" },
              { label: "Computer Science", value: "cs" },
            ],
          },
          {
            label: "Grade Point Average (GPA)",
            type: "slider",
            name: "gpa",
            min: 0.0,
            max: 4.0,
            step: 0.1,
          },
        ],
      },
      {
        title: "Employment Details",
        fields: [
          {
            label: "Current Job Title",
            type: "text",
            name: "jobTitle",
            placeholder: "Enter your current job title",
            required: false,
          },
          {
            label: "Employment Status",
            type: "radio",
            name: "employmentStatus",
            options: [
              { label: "Employed", value: "employed" },
              { label: "Unemployed", value: "unemployed" },
              { label: "Student", value: "student" },
              { label: "Retired", value: "retired" },
            ],
          },
          {
            label: "Skills",
            type: "checkbox",
            name: "skills",
            options: [
              { label: "Programming", value: "programming" },
              { label: "Project Management", value: "projectManagement" },
              { label: "Design", value: "design" },
              { label: "Data Analysis", value: "dataAnalysis" },
              { label: "Communication", value: "communication" },
            ],
          },
        ],
      },
      {
        title: "Hobbies and Interests",
        fields: [
          {
            label: "Favorite Hobby",
            type: "text",
            name: "favoriteHobby",
            placeholder: "Enter your favorite hobby",
          },
          {
            label: "Level of Interest in Technology",
            type: "slider",
            name: "techInterest",
            min: 1,
            max: 10,
            step: 1,
          },
          {
            label: "Do you participate in any sports?",
            type: "radio",
            name: "sportsParticipation",
            options: [
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ],
          },
        ],
      },
    ],
  },
};

const PersonalForm = () => {
  const [formData, setFormData] = useState({});

  // Only access localStorage in useEffect to ensure it's available in the browser
  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Save formData to localStorage whenever formData changes
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
  };

  return (
    <div className="main flex flex-row w-full ">
      <aside
        style={{ position: "fixed" }}
        className=" w-2/12 md:min-h-[100vh] shadow-[0_0_8px_1px_rgba(0,0,0,0.1)] px-6 "
      >
        <h2 className=" py-5 text-2xl">Personal</h2>
        <div className="flex md:min-h-[85vh] flex-col justify-between">
          <ul>
            <li className="flex py-2">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
              <span className="px-2">Contact Information</span>
            </li>
            <li className="flex py-2">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </svg>
              <span className="px-2">Schooling Information</span>
            </li>
            <li className="flex py-2">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
              <span className="px-2">Employment Details</span>
            </li>
            <li className="flex py-2">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
              </svg>
              <span className="px-2">Hobbies and Interests</span>
            </li>
            <li className="flex py-2">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              <span className="px-2">Preferred Contact</span>
            </li>
          </ul>
          <ul>
            <li className="flex py-2">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
              </svg>
              <span className="px-2">Grade Point Average</span>
            </li>
            <li className="flex py-2">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <span className="px-2">Do you participate in</span>
            </li>
          </ul>
        </div>
      </aside>
      <div style={{ marginLeft: "250px" }} className="right-main px-8 w-11/12">
        <div className="top-header pl-5 py-5 align-middle flex-row md:min-w-full flex justify-between">
          <h1 className="text-2xl font-bold">Personal</h1>
          <div className="header-right flex justify-between">
            <svg
              className="w-4 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
            <div className="flex align-middle">
              <img
                className="w-8 mx-3 object-cover object-center"
                src="/images/abstract-user-flat-4.svg"
                alt="nature image"
              />
              <span className="pt-1 font-semibold align-middle">Full Name</span>
            </div>
            <svg
              className="w-3 ml-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="p-6 bg-white md:max-w-[750px]">
          {/* <h1 className="text-2xl font-bold mb-4">{formJson.form.title}</h1> */}
          <div className="head-list min-w-12 flex-wrap">
            <ul className=" flex justify-between border-b-2 border-gray-300 pb-3 mb-3">
              <li className="flex">
                <svg
                  className="w-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l293.1 0c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1l-91.4 0zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" />
                </svg>
                Highest
              </li>
              <li className="flex">
                <svg
                  className="w-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 64c-44.2 0-80 35.8-80 80l0 48 240 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0 0-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0z" />
                </svg>
                Graduation Year
              </li>
              <li className="flex">
                <svg
                  className="w-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                </svg>
                Skills
              </li>
              <li className="flex">
                <svg
                  className="w-4 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM272 192l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16zM164 152l0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9l0 13.8c0 11-9 20-20 20s-20-9-20-20l0-14.6c-10.3-2.2-20-5.5-28.2-8.4c0 0 0 0 0 0s0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5l0-14c0-11 9-20 20-20s20 9 20 20z" />
                </svg>
                Level of Interest
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ProfileImage />
          </div>
          {formJson.form.groups.map((group, groupIndex) => (
            <div key={groupIndex} className="">
              {/* <h2 className="text-xl font-semibold">{group.title}</h2> */}
              {group.fields.map((field, fieldIndex) => {
                switch (field.type) {
                  case "text":
                  case "textarea":
                  case "number":
                    return (
                      <div
                        key={fieldIndex}
                        className="float-left w-6/12 mt-5 pr-4"
                      >
                        <label className="block mb-1">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          className="w-full shadow px-3 py-2 rounded-md h-12"
                          required={field.required}
                        />
                      </div>
                    );
                  case "dropdown":
                    return (
                      <div
                        key={fieldIndex}
                        className=" float-left w-6/12 mt-5 pr-4"
                      >
                        <label className="block mb-1">{field.label}</label>
                        <select
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          className="w-full shadow px-3 py-2 rounded-md h-12"
                          required={field.required}
                        >
                          <option value="">Select {field.label}</option>
                          {field.options.map((option, i) => (
                            <option key={i} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    );
                  case "radio":
                    return (
                      <div
                        key={fieldIndex}
                        className=" w-full clear-both pt-3 mt-5 pr-4"
                      >
                        <label className="block mb-1">{field.label}</label>
                        {field.options.map((option, i) => (
                          <label
                            key={i}
                            className="inline-flex items-center mr-2"
                          >
                            <input
                              type="radio"
                              name={field.name}
                              value={option.value}
                              checked={formData[field.name] === option.value}
                              onChange={handleChange}
                              className="mr-1"
                            />
                            {option.label}
                          </label>
                        ))}
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          ))}

          <button
            type="submit"
            className="px-4 py-2 bg-black w-full mt-5 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalForm;
