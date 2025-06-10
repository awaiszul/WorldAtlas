import './Conatct.css';
export const Contact = ()=>{
    const handleFormSubmit = (formData)=>{
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
        
    }
     return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form action={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required autoComplete='false' />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required autoComplete='false' />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Write your message here..."></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}