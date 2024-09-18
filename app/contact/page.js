import ContactForm from '@/components/contact/ContactForm';
import HeroContact from '@/components/contact/Hero';
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <HeroContact />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
