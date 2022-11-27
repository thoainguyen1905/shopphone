import React from "react";
import SliderImage from "react-zoom-slider";
import { useScreenQuery } from "@hooks/useScreenQuery";

function SliderDetail({ data }: any) {
  const testImage = data?.map((item: any) => {
    return {
      image: item,
    };
  });
  const { isDesktop } = useScreenQuery();
  return (
    <div>
      {testImage && (
        <SliderImage
          data={testImage}
          width={isDesktop ? "600px" : "100%"}
          direction="right"
        />
      )}
    </div>
  );
}

export default SliderDetail;
