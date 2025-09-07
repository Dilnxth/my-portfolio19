import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, videoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className={`proj-imgbx ${videoUrl ? 'proj-video-container' : ''}`}>
        {videoUrl ? (
          <video 
            src={videoUrl} 
            alt={title}
            controls
            className="proj-video"
          />
        ) : (
          <img src={imgUrl} alt={title} />
        )}
        {!videoUrl && (
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        )}
      </div>
    </Col>
  );
};