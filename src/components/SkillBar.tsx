import { useEffect, useRef } from 'react';
import { SkillBarComponentProps } from './types';

const SkillBar = ({ name, percentage, visible }: SkillBarComponentProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible && progressBarRef.current) {
      setTimeout(() => {
        // @ts-expect-error it will never be null
        progressBarRef.current.style.width = `${percentage}%`;
      }, 300);
    }
  }, [visible, percentage]);

  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div
          ref={progressBarRef}
          className="skill-progress-bar"
          style={{ width: visible ? `${percentage}%` : '0' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;