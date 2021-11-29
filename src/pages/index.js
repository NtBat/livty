import Button from "@/components/Button";
import Comfort from "@/components/Comfort";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Content from "@/components/Content";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Location />

      <Comfort />

      <Content />

      <Gallery />

      <Button title="Tenho Interesse" link="#form" color="primary" />
      <Button title="Tenho Interesse" link="#form" color="secondary" />
      <Button
        title="Tenho Interesse"
        link="#form"
        color="secondary"
        icon="/icons/camera.svg"
      />
      <Button title="Tenho Interesse" link="#form" />
    </>
  );
}
