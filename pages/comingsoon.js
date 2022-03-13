import Image from "next/image";
import { motion } from "framer-motion";

export default function Comingsoon() {
    return (
        <section className="h-screen w-screen">
            <div className="flex flex-col w-full h-full justify-center items-center">
                <motion.div className="relative h-1/4 w-2/3 md:w-1/3 lg:h-1/3">
                    <Image
                        src={"/images/coming-soon.png"}
                        alt="Placeholder-Hero"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                    />
                </motion.div>
                <div className="text-center text-xl mt-2 md:mt-5 w:1/4 lg:w-1/3">
                    <p>We're currently updating our website.</p>
                    <p>Stay tuned for updates!</p>
                </div>
            </div>
        </section>
    );
}