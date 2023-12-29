import * as React from "react";
import { Button } from "@/components/ui/button";
import ButtonIcon from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import image from "@/assets/bgImg.jpeg";

export default function CardWithForm(props: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className="rounded-3xl h-[450px] w-[350px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image className="rounded-3xl h-52 w-52" src={props.image} width={500} height={500} alt="Post Image"/>
        <br/>
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <ButtonIcon/>
      </CardFooter>
    </Card>
  );
}