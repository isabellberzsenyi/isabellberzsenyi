import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CeramicImages`.
 */
export type CeramicImagesProps =
  SliceComponentProps<Content.CeramicImagesSlice>;

/**
 * Component for "CeramicImages" Slices.
 */
const CeramicImages = ({ slice }: CeramicImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for ceramic_images (variation: {slice.variation})
      Slices
    </section>
  );
};

export default CeramicImages;
