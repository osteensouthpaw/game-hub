import React from "react";
import useTrailors from "../hooks/useTrailers";

interface Props {
  gameSlug: string;
}

const GameTrailer = ({ gameSlug }: Props) => {
  const { data: trailer, error, isLoading } = useTrailors(gameSlug);

  if (error) throw error;
  if (isLoading) return null;

  const first = trailer?.results[0];
  return first ? (
    <video controls poster={first.preview}>
      <source src={first.data[480]} type="video/mp4" />
    </video>
  ) : null;
};

export default GameTrailer;
