import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function FAQ() {
    return (
      <div className="flex flex-col items-center  p-10">
         <h2 className="text-2xl font-semibold mb-4">"Frequently Asked Questions"</h2>
        <Accordion type="multiple" className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is therapy?</AccordionTrigger>
            <AccordionContent>
              Therapy is a process of seeking help from a trained therapist to
              address emotional, psychological, or relationship issues and improve
              one's well-being.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I know if therapy is right for me?</AccordionTrigger>
            <AccordionContent>
              Therapy can benefit anyone facing challenges in their life, such as
              stress, anxiety, depression, or relationship issues. It's a good
              option if you want support and guidance in dealing with these
              issues.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What happens in a therapy session?</AccordionTrigger>
            <AccordionContent>
              In a therapy session, you'll talk to a therapist about your
              concerns, thoughts, and feelings. The therapist will listen, provide
              insights, and help you develop strategies to address your issues.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is therapy confidential?</AccordionTrigger>
            <AccordionContent>
              Yes, therapy sessions are confidential. Therapists are bound by
              ethical guidelines to protect your privacy, and they won't disclose
              your information without your consent.
            </AccordionContent>
          </AccordionItem>
          {/* Add more questions and answers as needed */}
        </Accordion>
      </div>
    );
  }
  