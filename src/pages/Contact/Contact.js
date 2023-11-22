import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import Layout from '../../components/Layout';

const Contact = ({ user }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z55pa1f', 'contact_form', form.current, 'm7VUgv7wvSPvw4ryn')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout user={user}>
			<div>
				<div className="feature-wrapper">
					<form ref={form} onSubmit={sendEmail} className='contact-form'>
						<div>
							<label>Name</label>
							<input type="text" name="user_name" />
						</div>
						<div>
							<label>Email</label>
							<input type="email" name="user_email" />
						</div>
						<div>
							<label>Message</label>
							<textarea name="message" />
						</div>
						<input type="submit" value="Send" />
					</form>
				</div>
			</div>
    </Layout>
  );
};

export default Contact;

// import React, { useState } from 'react';
// import emailjs from "emailjs-com";
// import Layout from '../../components/Layout';

// import { Contact } from './styles';

// const ContactForm = ({ user }) => {
// 	const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
// 	e.preventDefault();

// 	emailjs.sendForm (
// 		"service_z55pa1f",
// 		"template_yt3uh4r",
// 		formData,
// 		"m7VUgv7wvSPvw4ryn"
// 	)
//   };

// 	return (
// 		<Layout user={user}>
// 			<div>
// 				<Contact className='feature-wrapper'>
// 					<form onSubmit={handleSubmit} className='contact-form'>
// 						<div>
// 							<label htmlFor="name">Name:</label>
// 							<input
// 								type="text"
// 								id="name"
// 								name="name"
// 								value={formData.name}
// 								onChange={handleChange}
// 								required
// 							/>
// 						</div>
// 						<div>
// 						<label htmlFor="email">Email Address:</label>
// 						<input
// 							type="email"
// 							id="email"
// 							name="email"
// 							value={formData.email}
// 							onChange={handleChange}
// 							required
// 						/>
// 						</div>
// 						<div>
// 						<label htmlFor="subject">Subject:</label>
// 						<input
// 							type="text"
// 							id="subject"
// 							name="subject"
// 							value={formData.subject}
// 							onChange={handleChange}
// 							required
// 						/>
// 						</div>
// 						<div>
// 						<label htmlFor="message">Message:</label>
// 						<textarea
// 							id="message"
// 							name="message"
// 							value={formData.message}
// 							onChange={handleChange}
// 							rows="4"
// 							required
// 						/>
// 						</div>

// 						{error && <p style={{ color: "red" }}>{error}</p>}
// 						{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

// 						<button type="submit">Submit</button>
// 					</form>
// 				</Contact>
// 			</div>
// 	</Layout>

// 	);
// };
    
// export default ContactForm;