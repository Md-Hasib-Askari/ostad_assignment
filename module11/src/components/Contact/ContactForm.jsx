import InputBox from "./InputBox.jsx";
import TextAreaBox from "./TextAreaBox.jsx";

function ContactForm(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan?
                    Let us know.
                </p>
                <form action="#" className="space-y-8">
                    <InputBox id={"email"} label={"Your email"} placeholder={"name@riseup.com"} type={"email"}/>
                    <InputBox id={"subject"} label={"Subject"} placeholder={"Let us know how we can help you"} type={"text"}/>
                    <TextAreaBox />
                    <button type="submit"
                            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;