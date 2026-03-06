import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  images?: string[];
};

export default function CategoryImageCarousel({ images = [] }: Props) {
  if (!images.length) return null;

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="overflow-hidden rounded-3xl shadow-elevated aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9]">
              <img
                src={src}
                alt="Product category"
                className="w-full h-full object-contain bg-muted/20"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden lg:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
