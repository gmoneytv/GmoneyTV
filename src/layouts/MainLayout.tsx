import { Outlet, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faClock, faFire, faCrown } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"

export default function MainLayout() {
    const currentYear = new Date().getFullYear()

    return (
        <main>
            <nav className="flex flex-col items-center p-[15px] bg-secondary w-[200px] h-screen fixed">
                <Link to="/" className="not-link flex items-center gap-[5px] h-[40px]">
                    <img src="/logos/large.png" alt="GmoneyTV Logo Large" className="size-full rounded-[8px]" />
                    <h3>GmoneyTV</h3>
                </Link>

                <div className="my-[15px] bg-black w-full h-[1.5px]" />

                <ul className="w-full">
                    <li>
                        <Link to="/" className="not-link button-link">
                            <FontAwesomeIcon icon={faHome} />
                            For You
                        </Link>
                    </li>
                    <li>
                        <Link to="/recent" className="not-link button-link">
                            <FontAwesomeIcon icon={faClock} />
                            Recent
                        </Link>
                    </li>
                    <li>
                        <Link to="/popular" className="not-link button-link">
                            <FontAwesomeIcon icon={faFire} />
                            Popular
                        </Link>
                    </li>
                    <li>
                        <Link to="/certified-legends" className="not-link button-link">
                            <FontAwesomeIcon icon={faCrown} />
                            Certified Legends
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="ml-[200px] h-full">
                <Outlet />
            </div>

            <footer className="flex flex-col items-center ml-[200px] py-[15px] bg-secondary h-full min-h-[64px] relative">
                <p id="copyright-info">Copyright &copy; {currentYear} GmoneyTV. All rights reserved.</p>

                <div className="flex justify-between mt-[50px] w-[585px]">
                    <div id="pages" className="flex flex-col">
                        <b className="uppercase">Pages</b>
                        
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} />
                            For You
                        </Link>
                        <Link to="/recent">
                            <FontAwesomeIcon icon={faClock} />
                            Recent
                        </Link>
                        <Link to="/popular">
                            <FontAwesomeIcon icon={faFire} />
                            Popular
                        </Link>
                        <Link to="/certified-legends">
                            <FontAwesomeIcon icon={faCrown} />
                            Certified Legends
                        </Link>
                    </div>

                    <div id="socials" className="flex flex-col">
                        <b className="uppercase">Socials</b>

                        <Link to="https://www.github.com/gmoneytv/GmoneyTV/?from=gmoneytv" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                            GitHub
                        </Link>
                        <Link to="https://www.youtube.com/@FlappyGrantStudios/?from=gmoneytv" target="_blank">
                            <FontAwesomeIcon icon={faYoutubeSquare} />
                            YouTube
                        </Link>
                    </div>
                </div>

                <Link to="/" className="not-link flex items-center gap-[5px] h-[40px] absolute bottom-[15px] left-[15px]">
                    <img src="/logos/large.png" alt="GmoneyTV Logo Large" className="size-full rounded-[8px]" />
                    <h3>GmoneyTV</h3>
                </Link>
            </footer>
        </main>
    )
}
