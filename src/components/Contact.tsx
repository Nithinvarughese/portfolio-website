"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input, Textarea } from "./ui/input";
import { Button } from "./ui/button";
import { CheckCircle2, X } from "lucide-react";

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = () => {
        // Show modal after a short delay to simulate network request since we are posting to hidden iframe
        setTimeout(() => {
            setShowModal(true);
            if (formRef.current) formRef.current.reset();
        }, 500);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-24 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-accent font-mono text-xl block mb-4">05. What's Next?</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>

                {/* Hidden Iframe */}
                <iframe name="hidden_iframe" id="hidden_iframe" className="hidden" style={{ display: 'none' }}></iframe>

                <Card className="max-w-md mx-auto bg-card border-none text-left">
                    <CardHeader>
                        <CardTitle className="text-center">Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form
                            ref={formRef}
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSczmbvxMoGNPVQosOIUCgD_Z-BQ26abQGL4ohc6jbwSJ93t8Q/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <Input name="entry.1415945160" placeholder="Name" required className="bg-muted/80 border-border focus:border-accent" />
                            </div>
                            <div>
                                <Input name="entry.1570886367" type="email" placeholder="Email" required className="bg-muted/80 border-border focus:border-accent" />
                            </div>
                            <div>
                                <Textarea name="entry.558672215" placeholder="Message" rows={4} required className="bg-muted/80 border-border focus:border-accent" />
                            </div>
                            <Button type="submit" className="w-full text-accent border-accent hover:bg-accent/10">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Modal */}
                <AnimatePresence>
                    {showModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-card border border-accent rounded-lg p-8 max-w-sm w-full relative shadow-2xl"
                            >
                                <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <CheckCircle2 className="w-16 h-16 text-accent" />
                                    <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                                    <p className="text-foreground">Your message has been sent successfully. I'll get back to you soon!</p>
                                    <Button onClick={() => setShowModal(false)} variant="outline" className="mt-4">Close</Button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.div>
        </section>
    );
}
