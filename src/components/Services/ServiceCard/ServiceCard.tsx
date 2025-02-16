import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  src: string;
  content: string;
}

function ServiceCard({ src, content }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <img className={styles.icon} src={src} alt={content} draggable="false" />
      <p className={styles.title}>{content}</p>
    </div>
  );
}
export default ServiceCard;
