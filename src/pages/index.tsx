import Image from "next/image";
import _ from "@/components/_";
import Menu from "@/components/Menu";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Menu />
        <div className="grid max-md:grid-cols-3 max-2xl:grid-cols-4 gap-5 mx-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </>
  );
}
