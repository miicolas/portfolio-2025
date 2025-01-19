'use client'

import { motion } from 'motion/react';
import Link from 'next/link';

export default function Contact() {
    return (
        <div
            className="py-16 w-full min-h-[50vh] max-w-4xl mx-auto space-y-16 flex flex-col justify-center items-center relative"
            id="contact"
        >
            <p className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl text-neutral-500 px-16 py-8 group-hover:text-neutral-200 group-active:text-neutral-400 font-light -rotate-3'>
                Tap this &apos;tiny&apos; button to connect with me =)
            </p>
            <Link href="/contact">
                <motion.div
                    className='group cursor-pointer'
                    style={{
                        background: "linear-gradient(rgb(230, 230, 230) 0%, rgb(166, 166, 166) 100%)",
                        boxShadow:
                            "rgb(0 2 122) 0px -7px 3px 0px inset, rgb(255, 255, 255) 0px -8px 1px 0px inset, rgb(184, 184, 184) 0px 6px 6px 0px",
                        borderRadius: "128px",
                        padding: "12px",
                        rotate: 8
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <motion.div
                        style={{
                            borderRadius: "110px",
                            boxShadow: 'rgb(68 72 237) 0px 3px 0px 2px, rgb(65 68 229 / 90%) 0px 6px 8px 8px, rgba(99, 102, 222, 0.5) 0px 0px 56px 48px, rgba(99, 102, 241, 0.15) 0px 0px 90px 140px, rgba(0, 0, 0, 0) 0px 10px 6px 0px',
                            backgroundColor: 'rgb(0, 0, 0, 0)',
                            transformOrigin: '50% 50% 0px'
                        }}
                        initial={{ y: "-10%" }}
                        animate={{ y: "-10%" }}
                    >
                        <motion.div
                            style={{
                                backgroundColor: 'rgb(64, 53, 0)',
                                boxShadow: 'rgba(99,102,241,0.6) 0px -2px 6px 0px inset',
                                borderRadius: '110px',
                                transformOrigin: '50% 50% 0px',
                            }}
                            whileTap={{ y: "5%" }}
                        >
                            <motion.div
                                style={{
                                    background: "linear-gradient(rgb(26 26 26) 0%, rgb(51, 45, 0) 100%)",
                                    boxShadow:
                                        "rgba(255, 255, 255, 0.1) 0px 10px 8px 0px inset, rgba(0, 0, 0, 0.1) 0px 8px 4px 0px inset",
                                    borderRadius: "110px",
                                    padding: "12px",
                                    transformOrigin: "50% 50%",
                                }}
                                initial={{ y: "-5%" }}
                                animate={{ y: "-5%" }}
                            >
                                <motion.div
                                    style={{
                                        outline: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        textShadow: "rgba(99,102,241, 0.2) 0px 4px 12px",
                                        transformOrigin: "50% 50%",
                                    }}
                                >
                                    <p className="text-center text-8xl font-medium text-neutral-100 px-16 py-8 group-hover:text-neutral-200 group-active:text-neutral-400">
                                        Connect
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Link>
        </div>
    );
}