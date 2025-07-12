import React, { useState } from "react";

function Carousel() {
    const [isPaused, setIsPaused] = useState(false)
    

      const images = {
        image01: `/Image/Image-01.webp`,
        image02: `/Image/Image-02.webp`,
        image03: `/Image/Image-03.webp`,
        image04: `/Image/Image-04.webp`,
        image05: `/Image/Image-05.webp`,
        image06: `/Image/Image-06.webp`,
        image07: `/Image/Image-07.webp`,
        image08: `/Image/Image-08.webp`,
        image09: `/Image/Image-09.webp`,
        image10: `/Image/Image-10.webp`,
      };


  return <div>Carousel</div>;
}

export default Carousel;
