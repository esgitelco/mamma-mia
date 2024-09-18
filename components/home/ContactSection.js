import React from 'react';
import SectionPage from '../SectionPage';

const ContactSection = () => {
  return (
    <SectionPage
      link="https://wa.me/22997415626"
      target="_blank"
      button="Contacter via WhatsApp"
      title="Besoin d'aide urgent ? DM nous par WhatsApp !"
      paragraph="
          Notre service client est à votre disposition pour répondre à toutes vos questions ou pour vous aider à passer commande. 
          Cliquez simplement sur le bouton ci-dessous pour discuter avec nous via WhatsApp, et nous vous répondrons rapidement. 
          Commandez, modifiez ou obtenez des informations en toute simplicité !"
      src="/img/resto-view.jpg"
    />
  );
};

export default ContactSection;
