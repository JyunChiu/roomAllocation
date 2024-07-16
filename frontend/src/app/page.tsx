"use client";
import BaseInfoBlock from "components/BaseInfoBlock";
import AllocationBlock from "components/AllocationBlock";
import { Container } from "./page.style";

export default function Home() {
  return (
    <Container>
      <BaseInfoBlock />
      <AllocationBlock />
    </Container>
  );
}
