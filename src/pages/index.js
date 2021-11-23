import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Location />

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
