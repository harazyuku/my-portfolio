import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";

export default function Contact() {
    return (
        <div
            className="
                w-full
                max-w-4xl
                border
                border-white/20
                bg-black/60
                p-10
            "
        >
            <p
                className="
                    mb-3
                    tracking-[0.4em]
                    text-sm
                    text-gray-400
                "
            >
                GET IN TOUCH
            </p>

            <h2
                className="
                    mb-12
                    text-6xl
                    font-semibold
                "
            >
                CONTACT
            </h2>

            <div className="space-y-5">
                <Link
                    href="https://crowdworks.jp/public/employees/6748730
                    
                    "
                    target="_blank"
                    className="
                        group
                        flex
                        items-center
                        justify-between
                        border
                        border-white/10
                        p-6
                        transition-all
                        duration-300
                        hover:border-white/40
                        hover:bg-white/5
                    "
                >
                    <div className="flex items-center gap-4">
                        <FaBriefcase size={28} />
                        <div>
                            <p className="text-xl font-medium">
                                Works
                            </p>
                            <p className="text-sm text-gray-400">
                                crowdworks.jp
                            </p>
                        </div>
                    </div>

                    <span
                        className="
                            text-2xl
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                    >
                        →
                    </span>
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
                        p-6
                        transition-all
                        duration-300
                        hover:border-white/40
                        hover:bg-white/5
                    "
                >
                    <div className="flex items-center gap-4">
                        <MdEmail size={28} />
                        <div>
                            <p className="text-xl font-medium">
                                Email
                            </p>
                            <p className="text-sm text-gray-400">
                                ikehara.yuto.gaku@gmail.com
                            </p>
                        </div>
                    </div>

                    <span
                        className="
                            text-2xl
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                    >
                        →
                    </span>
                </a>

              
                
            </div>

            <p
                className="
                    mt-12
                    text-center
                    text-sm
                    text-gray-500
                "
            >
                Thank you for visiting.
            </p>
        </div>
    );
}
