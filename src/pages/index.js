import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

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
