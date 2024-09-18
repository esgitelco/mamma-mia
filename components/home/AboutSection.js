import SectionPage from '../SectionPage';

export default function AboutSection() {
  return (
    <SectionPage
      button="Découvrez nous"
      title="Le temple des produits frais"
      paragraph="
      En plus de nos délicieux plats, nous vous offrons une atmosphère chaleureuse et conviviale pour partager des moments inoubliables en famille ou entre amis. Notre service accueillant et professionnel fera de votre visite une expérience mémorable."
      src={'/img/fresh-food.jpg'}
    />
  );
}
