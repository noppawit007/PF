import Head from 'next/head'

const Contact = () => {
    return (
        <div>

            <div class="login">
                <div class="login_area">
                    <h1>Contact Us</h1>
                    <form>
                        <label>Your Name</label><br ></br>
                        <input type="text" placeholder="Your Name" /><br ></br>
                        <label>Your Email</label><br></br>
                        <input type="email" placeholder="Your Email" /><br ></br>
                        <label>Your Subject</label><br></br>
                        <input type="text" placeholder="Your Subject" /><br ></br>
                        <label>Your Message</label><br></br>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea><br></br>
                        <button>send</button><br ></br>
                    </form>
                </div>
            </div>



        </div>
    )
}
export default Contact