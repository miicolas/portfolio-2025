import Badge from "@/components/ui/badge";
import ContactForm from "@/components/form/contact-form";

export default function Contact() {
    return (
        <div className="py-16 mt-16">
            <Badge name="Contact" description="Contact me to get in touch with me." />
            <ContactForm />

        </div>
    )
}