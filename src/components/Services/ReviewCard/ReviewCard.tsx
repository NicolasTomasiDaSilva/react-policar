import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  avatarUrl: string;
  name: string;
  content: string;
}

function ReviewCard({ avatarUrl, name, content }: ReviewCardProps) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <img className={styles.avatar} src={avatarUrl} />
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
export default ReviewCard;
