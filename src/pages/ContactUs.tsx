import { useState } from "react";
import img from "../assets/contact_2.png";

const contactData = [
  {
    title: "Tel: 877–67–88–99",
    subtitle: "E-Mail: shop@store.com",
  },
  {
    title: "Support Forum",
    subtitle: "For over 24hr",
  },
  {
    title: "20 Margaret st, London",
    subtitle: "Great britain, 3NM98–LK",
  },
  {
    title: "Free standard shipping",
    subtitle: "on all orders.",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-10 mx-auto max-w-6xl 2xl:pt-14">
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className=" flex flex-col  md:w-1/2">
          <h1 className="text-2xl font-semibold">Information About us</h1>
          <p className="text-xs text-gray-500 sm:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold mb-2">Contact Way</h1>
          <div className="grid sm:grid-cols-2 gap-6 text-[#585858]">
            {contactData.map((item) => (
              <div className="flex gap-2 items-center ">
                <div className="w-10 h-10 rounded-full bg-gradient-to-l from-[#DBF4E2] to-[#F6FDEC]"></div>
                <div className="flex flex-col text-sm">
                  <p>{item.title}</p>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center  ">
        <div className="sm:w-1/2">
          <h1 className="text-2xl font-semibold">Get In Touch</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </p>
          <form onSubmit={handleSubmit} className=" mx-auto max-w-4xl   mt-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                className="border border-[#909090BF] p-2 rounded-md"
                value={formData.Name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border border-[#909090BF] p-2 rounded-md "
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border border-[#909090BF] p-2 rounded-md mb-4"
              value={formData.subject}
              onChange={handleChange}
            />
            <input
              type="text"
              name="msg"
              placeholder="Type your message *"
              className="border border-[#909090BF] p-2 rounded-md w-full mb-4 "
              value={formData.msg}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w- bg-[#3EB34B] text-white py-2 px-6 cursor-pointer text-sm"
            >
              Send Mail
            </button>
          </form>
        </div>
        <div className="sm:w-1/2">
          <img src={img} className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
