import {BiSolidQuoteAltLeft} from "react-icons/bi";

function Testimonial() {
    return (
        <section className="bg-slate-200 dark:bg-slate-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                    <BiSolidQuoteAltLeft className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-300" />
                    <blockquote>
                        <p className="text-2xl font-medium text-gray-900 dark:text-slate-300">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus earum eligendi excepturi fuga perferendis placeat qui tempora ullam voluptatem."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <img className="w-6 h-6 rounded-full"
                             src="./images/about/team/img_2.png"
                             alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-slate-300">Micheal Gough</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-slate-300">CEO at
                                    Google
                                </div>
                            </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Testimonial;