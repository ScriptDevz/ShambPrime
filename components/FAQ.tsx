"use client";

import "../css/faq.css"
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function FAQ() {
    const firstFAQ = "Praesent auctor neque at imperdiet feugiat."
    const secondFAQ = "Vestibulum lobortis mollis tellus, eu pulvinar neque egestas et."
    const thirdFAQ = "Aliquam aliquet nunc ac iaculis cursus."
    const fourthFAQ = "Nulla facilisi."
    const fifthFAQ = "Donec sollicitudin enim a rhoncus pretium."
    const sixthFAQ = "Nulla facilisi."
    const seventhFAQ = "Maecenas cursus sit amet tellus nec posuere."

    return <section id="faq-list">
        <div className="inside-faq">
            <div className="headline-faq">
                <h2>Question? ... Answer!</h2>
            </div>
        <Accordion variant="splitted" selectionMode="multiple">
            <AccordionItem key="1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                {firstFAQ}
            </AccordionItem>
            <AccordionItem key="2" title="Nunc gravida felis id odio tincidunt pretium.">
                {secondFAQ}
            </AccordionItem>
            <AccordionItem key="3" title="Aliquam erat volutpat. Pellentesque ut euismod turpis.">
                {thirdFAQ}
            </AccordionItem>
            <AccordionItem key="4" title="Aenean quis dolor sapien.">
                {fourthFAQ}
            </AccordionItem>
            <AccordionItem key="5" title="Proin venenatis pretium leo, sed consectetur velit bibendum non.">
                {fifthFAQ}
            </AccordionItem>
            <AccordionItem key="6" title="Vivamus nunc orci, tincidunt vel ante sed, suscipit aliquam magna.">
                {sixthFAQ}
            </AccordionItem>
            <AccordionItem key="7" title="Vestibulum sed congue nibh, vel maximus mauris.">
                {seventhFAQ}
            </AccordionItem>
        </Accordion>
        </div>
    </section>
}