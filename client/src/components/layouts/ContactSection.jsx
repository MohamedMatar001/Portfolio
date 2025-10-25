import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function ContactSection(){
    return <section id="contact" className="py-24 px-4 relative bg-secondary">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary "> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 mx-w-2xl mx-auto">
            some discreption goes here
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:mohamed.m.matar001@gmail.com" className="text-muted-foreground hover:text-primary">mohamed.m.matar001@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+201154030177" className="text-muted-foreground hover:text-primary">+201154030177</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a  className="text-muted-foreground hover:text-primary">New Cairo, Egypt</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/mohamed-mahmoud-728074244/" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="https://github.com/MohamedMatar001" target="_blank">
                            <Github/>
                        </a>
                    </div>
                </div>
        </div>
        </div>

    </section>
}

export default ContactSection;