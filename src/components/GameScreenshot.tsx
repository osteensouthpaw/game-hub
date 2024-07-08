import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameSlug: string;
}

const GameScreenshot = ({ gameSlug }: Props) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameSlug);

  if (isLoading) return null;
  if (error) throw error;

  return screenshots ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} marginY={10}>
      {screenshots.results.map(
        (screenshot) =>
          !screenshot.hidden && (
            <Image
              key={screenshot.id}
              src={screenshot.image}
            />
          )
      )}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshot;
