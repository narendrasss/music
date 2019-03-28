import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Song from './Song';

const LikedSong = ({ onChange, liked: isLiked, ...props }) => {
  const [liked, setLiked] = useState(isLiked);

  const handleClick = id => {
    setLiked(!liked);
    onChange(id, !liked);
  };

  return (
    <Song onClick={handleClick} {...props}>
      <FontAwesomeIcon icon={liked ? 'times' : 'plus'} />
    </Song>
  );
};

export default LikedSong;
