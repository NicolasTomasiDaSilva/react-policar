import styles from "./ReviewCard.module.css";
import { useState } from "react";

interface ReviewCardProps {
  avatarUrl: string;
  name: string;
  content: string;
}

function ReviewCard({ avatarUrl, name, content }: ReviewCardProps) {
  const [imageSrc, setImageSrc] = useState(avatarUrl);

  const handleError = () => {
    setImageSrc("./src/assets/avatar.jpg");
  };
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <img className={styles.avatar} src={imageSrc} onError={handleError} />
        <p className={styles.name}>{name}</p>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
export default ReviewCard;
