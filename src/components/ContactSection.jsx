import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
import emailjs from 'emailjs-com'

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const SERVICE_ID = "service_nj18gbb";
    const TEMPLATE_ID = "template_75aajau";
    const PUBLIC_KEY = "k3Nii9Soojk673nyF";

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you as soon as possible! :)"
            })
            setIsSubmitting(false);
        }, 1500)
            setFormData({name: "", email: "", message: ""});
        }).catch(() => 
            toast({
                title: "Oops!",
                description: "Something went wrong, please try again!"
            }));
        setIsSubmitting(true);   
    }

    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start text-left pl-24 space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                        href="mailto:danielhuangg91@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        danielhuangg91@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start text-left pl-24 space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a 
                                        href="tel:+60122150410" 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +60122150410
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start text-left pl-24 space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Sri Petaling, Kuala Lumpur, Malaysia
                                    </a>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a
                                        href="https://www.linkedin.com/in/danielyie"
                                        target="_blank"
                                    >
                                        <Linkedin/>
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                    >
                                        <Instagram/>
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                    >
                                        <Facebook/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    valur={formData.name}
                                    className="w-full px-4 py-3 mt-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Daniel Yie..."
                                    onChange={
                                        (e) => setFormData({...formData, name: e.target.value})
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    valur={formData.email}
                                    className="w-full px-4 py-3 mt-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="johndoe@gmail.com"
                                    onChange={
                                        (e) => setFormData({...formData, email: e.target.value})
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    valur={formData.message}
                                    className="w-full px-4 py-3 mt-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    onChange={
                                        (e) => setFormData({...formData, message: e.target.value})
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}