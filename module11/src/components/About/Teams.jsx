import TeamTile from "./TeamTile.jsx";

function Teams(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Our Team
                    </h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A distinctio dolores ducimus ex, hic in inventore laboriosam officiis porro praesentium.
                    </p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <TeamTile
                        name={"Bonnie Green"}
                        position={"CEO & Web Developer"}
                        description={"Bonnie drives the technical strategy of the RiseUP."}
                        image={"./images/about/team/img.png"}
                    />
                    <TeamTile
                        name={"Jese Leos"}
                        position={"CTO"}
                        description={"Jese drives the technical strategy of the RiseUP."}
                        image={"./images/about/team/img_1.png"}
                    />
                    <TeamTile
                        name={"Michael Gough"}
                        position={"Senior Front-end Developer"}
                        description={"Michael drives the technical strategy of the RiseUP."}
                        image={"./images/about/team/img_2.png"}
                    />
                </div>
            </div>
        </section>
    );
}

export default Teams;