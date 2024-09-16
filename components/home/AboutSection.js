import SectionPage from '../SectionPage';

export default function AboutSection() {
  return (
    <SectionPage
      link="/company"
      button="Learn about us"
      title="The home of fresh products"
      paragraph="
          Apart from great food, we also offer a warm and comfortable atmosphere for you and your family to enjoy time
          together. Our friendly and professional service will make your visit an unforgettable experience"
      src={'/img/fresh-food.jpg'}
    />
  );
}
