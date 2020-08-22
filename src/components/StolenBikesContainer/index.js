import React from "react";
import { StolenBikesSearcher } from "../StolenBikesSearcher";
import { StolenBikesList } from "../StolenBikesList";
import { StolenBikesPagination } from "../StolenBikesPagination";
import { Container } from "./styles";
import { incidents } from "../../api/mockIncidents.json";

const bikes = incidents.slice(0, 10);
export const StolenBikesContainer = () => (
  <Container id="stolen-bykes-page">
    <StolenBikesSearcher />
    <StolenBikesList bikes={bikes} />
    <StolenBikesPagination />
  </Container>
);
