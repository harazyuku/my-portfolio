import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaBriefcase, FaArrowRightLong } from "react-icons/fa6";

export default function Contact() {
    return (
        <div
            className="
                w-full
                max-w-4xl
                border
                border-white/20
                bg-black/60
                p-6
                md:p-10
            "
        >
            <p
                className="
                    mb-3
                    tracking-[0.4em]
                    text-xs
                    md:text-sm
                    text-gray-400
                "
            >
                GET IN TOUCH
            </p>

            <h2
                className="
                    mb-8
                    md:mb-12
                    text-4xl
                    md:text-6xl
                    font-semibold
                "
            >
                CONTACT
            </h2>

            <div className="space-y-4 md:space-y-5">
                <Link
                    href="https://crowdworks.jp/public/employees/6748730"
                    target="_blank"
                    className="
                        group
                        flex
                        items-center
                        justify-between
                        border
                        border-white/10
                        p-5
                        md:p-6
                        transition-all
                        duration-300
                        hover:border-white/40
                        hover:bg-white/5
                    "
                >
                    <div className="flex items-center gap-4">
                        <FaBriefcase className="text-2xl md:text-3xl" />
                        <div>
                            <p className="text-lg md:text-xl font-medium">
                                CrowdWorks
                            </p>
                            <p className="text-xs md:text-sm text-gray-400">
                                crowdworks.jp
                            </p>
                        </div>
                    </div>

                    <FaArrowRightLong 
                        className="
                            text-xl
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            text-white/50
                            group-hover:text-white
                        "
                    />
                </Link>

                <a
                    href="mailto:ikehara.yuto.gaku@gmail.com"
                    className="
                        group
                        flex
                        items-center
                        justify-between
                        border
                        border-white/10
                        p-5
                        md:p-6
                        transition-all
                        duration-300
                        hover:border-white/40
                        hover:bg-white/5
                    "
                >
                    <div className="flex items-center gap-4">
                        <MdEmail className="text-2xl md:text-3xl" />
                        <div>
                            <p className="text-lg md:text-xl font-medium">
                                Email
                            </p>
                            <p className="text-xs md:text-sm text-gray-400">
                                ikehara.yuto.gaku@gmail.com
                            </p>
                        </div>
                    </div>

                    <FaArrowRightLong 
                        className="
                            text-xl
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            text-white/50
                            group-hover:text-white
                        "
                    />
                </a>
            </div>

            <p
                className="
                    mt-8
                    md:mt-12
                    text-center
                    text-xs
                    md:text-sm
                    text-gray-500
                "
            >
                Thank you for visiting.
            </p>
        </div>
    );
}
